"use client" 
import Footer from '@/components/footer';
import Header from '@/components/header';
import ProfileIndex from '@/components/profile';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';


const Profile = () => {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (!token) {
            router.push('/signin'); // Redirect to signin page if token not found
        }
    }, [])
    return(
        <>
        <Header />
            <ProfileIndex />
            <Footer />
        </>
    )
}

export default Profile;