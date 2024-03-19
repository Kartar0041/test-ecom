"use client"
import React, { useEffect } from 'react';
import SignInCom from '@/components/signincom';
import { useRouter } from 'next/navigation';

export default function Signin () {
    
    
        const router = useRouter();
        useEffect(() => {
            const token = localStorage.getItem('jwt');
            if (token) {
                router.push('/profile'); // Redirect to signin page if token not found
            }
        }, [])
    return (
        <>
          
            <SignInCom 
            />

        </>
    )
}

