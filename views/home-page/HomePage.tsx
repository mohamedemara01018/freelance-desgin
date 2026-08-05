'use client';

import { useDispatch, useSelector } from "react-redux";

import { fetchMe, selectMeSlice } from "@/store/slices/authSlice";
import { UserRole } from "@/utils/enums.utils";

import Hero from "@/components/features/landing/Hero";
import PartnersBar from "@/components/features/landing/Partnersbar";
import Features from "@/components/features/landing/Features";
import Workflow from "@/components/features/landing/Workflow";
import Stats from "@/components/features/landing/Stats";
import Testimonial from "@/components/features/landing/Testimonial";
import CtaBanner from "@/components/features/landing/Ctabanner";

import PublicNavbar from "@/components/layout/public/navbar/Navbar";
import PublicFooter from "@/components/layout/public/footer/Footer";

import FreelanceNavbar from "@/components/layout/freelancer/navbar/Navbar";
import FreelanceFooter from "@/components/layout/freelancer/footer/Footer";
import { Loader2 } from "lucide-react";
import { AppDispatch } from "@/store/store";
import { useEffect } from "react";



function HomePage() {
    const { me } = useSelector(selectMeSlice)
    // console.log(isLoading)
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMe());
    }, [dispatch]);

    switch (me?.role) {
        case UserRole.FREELANCER:
            return (
                <div className="min-h-screen bg-background text-on-surface font-['Inter']">
                    <FreelanceNavbar />

                    <main className="wrapper py-8 space-y-8">
                        freelancer
                    </main>

                    <FreelanceFooter />
                </div>
            );

        case UserRole.CLIENT:
            return (
                <div className="min-h-screen">
                    CLIENT
                </div>
            );

        default:
            return (
                <div className="min-h-screen flex flex-col bg-surface transition-colors duration-200">
                    <PublicNavbar />
                    <Hero />
                    <PartnersBar />
                    <Features />
                    <Workflow />
                    <Stats />
                    <Testimonial />
                    <CtaBanner />

                    <PublicFooter />
                </div>
            );
    }
}

export default HomePage;