import { jwtVerify, JWTPayload } from "jose";
import { NextRequest, NextResponse } from "next/server";

const secret = new TextEncoder().encode(
    process.env.JWT_TOKEN_SECRET_KEY
);

interface TokenPayload extends JWTPayload {
    email: string;
    role: "client" | "freelancer";
    isEmailVerified: boolean;
    isIdentityVerified: boolean;
}

const clientRoutes = [
    "/client",
];

const freelancerRoutes = [
    "/freelancer",
];

const sharedProtectedRoutes = [
    "/profile",
    "/settings",
];

const authRoutes = [
    "/login",
    "/register",
    "/verify-email",
    "/forgot-password",
    "/reset-password",
];

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const token = request.cookies.get("token")?.value;

    const isAuthRoute = authRoutes.some((route) =>
        pathname.startsWith(route)
    );

    const isClientRoute = clientRoutes.some((route) =>
        pathname.startsWith(route)
    );

    const isFreelancerRoute = freelancerRoutes.some((route) =>
        pathname.startsWith(route)
    );

    const isSharedProtectedRoute = sharedProtectedRoutes.some((route) =>
        pathname.startsWith(route)
    );

    const isProtectedRoute =
        isClientRoute ||
        isFreelancerRoute ||
        isSharedProtectedRoute;

    // Protected page without token
    if (!token && isProtectedRoute) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (!token) {
        return NextResponse.next();
    }

    try {
        const { payload } = await jwtVerify(
            token,
            secret
        );

        const user = payload as TokenPayload;

        // Logged-in user shouldn't access auth pages
        if (
            isAuthRoute &&
            pathname !== "/verify-email"
        ) {
            return NextResponse.redirect(new URL("/", request.url));
        }

        // Email verification
        if (
            !user.isEmailVerified &&
            pathname !== "/verify-email"
        ) {
            return NextResponse.redirect(
                new URL("/verify-email", request.url)
            );
        }

        // Prevent verified users from revisiting verify page
        if (
            user.isEmailVerified &&
            pathname === "/verify-email"
        ) {
            return NextResponse.redirect(new URL("/", request.url));
        }

        // Client cannot access freelancer routes
        if (
            user.role === "client" &&
            isFreelancerRoute
        ) {
            return NextResponse.redirect(new URL("/", request.url));
        }

        // Freelancer cannot access client routes
        if (
            user.role === "freelancer" &&
            isClientRoute
        ) {
            return NextResponse.redirect(new URL("/", request.url));
        }

        return NextResponse.next();
    } catch {
        const response = NextResponse.redirect(
            new URL("/login", request.url)
        );

        response.cookies.delete("token");

        return response;
    }
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};