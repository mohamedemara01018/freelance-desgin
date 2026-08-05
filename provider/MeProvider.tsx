'use client'
import { fetchMe, selectMeSlice } from '@/store/slices/authSlice';
import { AppDispatch } from '@/store/store';
import { Loader2 } from 'lucide-react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function MeProvider({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const dispatch: AppDispatch = useDispatch();
    const { me, initialized } = useSelector(selectMeSlice);

    // 1. fetch user once
    useEffect(() => {
        dispatch(fetchMe());
    }, [dispatch]);

    if (!initialized) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        );
    }

    console.log('me', me)
    return children
}

export default MeProvider