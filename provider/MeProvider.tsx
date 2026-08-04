'use client'
import { fetchMe, selectMeSlice } from '@/store/slices/authSlice';
import { AppDispatch } from '@/store/store';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function MeProvider({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const dispatch: AppDispatch = useDispatch();
    const me = useSelector(selectMeSlice);
    // 1. fetch user once
    useEffect(() => {
        dispatch(fetchMe());
    }, [dispatch]);

    console.log(me)
    return children
}

export default MeProvider