'use client';

import { useDispatch, useSelector } from "react-redux";

import { fetchMe, selectMeSlice } from "@/store/slices/authSlice";
import { UserRole } from "@/utils/enums.utils";

import { AppDispatch } from "@/store/store";
import { useEffect } from "react";

import FreelancerPage from "./FreelancerPage";
import ClientPage from "./ClientPage";
import LandingPage from "./LandingPage";



function HomePage() {
    const { me } = useSelector(selectMeSlice)
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMe());
    }, [dispatch]);

    console.log('what heppen')

    switch (me?.role) {
        case UserRole.FREELANCER:
            return (<FreelancerPage />);

        case UserRole.CLIENT:
            return (<ClientPage />);

        default:
            return (<LandingPage />);
    }
}

export default HomePage;