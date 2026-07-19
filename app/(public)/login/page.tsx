"use client";

import LoginForm from "@/components/features/login/LoginForm";
import { GoogleIcon } from "@/utils/icons.utils";
import Link from "next/link";

// Inline SVGs for icons


export default function LoginPage() {


  return (
    <div className="bg-background font-sans text-on-surface selection:bg-primary-fixed-dim selection:text-on-primary-fixed min-h-screen flex flex-col justify-center items-center py-8 px-6">
      <main className="w-full max-w-110 flex flex-col gap-8">


        {/* Login Card */}
        <div
          className="border border-outline-variant rounded-3xl p-8 md:p-10 flex flex-col gap-8"
          style={{ boxShadow: "var(--shadow-level-2)" }}
        >

          {/* Heading */}
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold text-on-surface">Welcome Back</h2>
            <p className="text-sm text-on-surface-variant">Enter your credentials to access your workspace.</p>
          </div>

          <LoginForm />

          {/* Divider */}
          <div className="relative flex items-center justify-center py-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-outline-variant"></span>
            </div>
            <span className="relative bg-background px-4 text-xs font-medium text-outline uppercase tracking-widest">
              Or continue with
            </span>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-1 gap-4">
            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-outline-variant rounded-xl hover:bg-surface-container hover:border-outline transition-all focus:ring-2 focus:ring-outline-variant/30 outline-none cursor-pointer">
              <GoogleIcon className="w-5 h-5" />
              <span className="text-sm font-medium text-on-surface">Google</span>
            </button>
          </div>

          {/* Footer Link */}
          <Link href={'/role'} className="text-center text-sm text-on-surface-variant">
            Don&apos;t have an account?
            <a className="text-primary text-sm font-medium hover:underline decoration-2 underline-offset-4 ml-1" href="#">
              Create an account
            </a>
          </Link>
        </div>


      </main>

      {/* Support Links */}
      <footer className="mt-8 flex gap-8">
        <a className="text-xs font-medium text-outline hover:text-on-surface transition-colors" href="#">Privacy Policy</a>
        <a className="text-xs font-medium text-outline hover:text-on-surface transition-colors" href="#">Terms of Service</a>
        <a className="text-xs font-medium text-outline hover:text-on-surface transition-colors" href="#">Contact Support</a>
      </footer>
    </div>
  );
}