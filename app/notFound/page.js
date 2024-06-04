'use client'
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const  router = useRouter();

    useEffect(()=>{
       setTimeout(()=>{
        router.push('/')      
       },3000)
    },[]);

    return (
        <main>
            This page is not found
            Go Back to <Link href="/">Home</Link>
        </main>
    );
}


export default NotFound;