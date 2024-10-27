'use client';
import React from "react";

import Button from './components/button';
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();


    return (
        <main>
            <h1 className="text-3xl mb-6">Home page</h1>
            <Button onClick={() => router.push('/dashboard', { scroll: false })}>
                To dashboard
            </Button>
        </main>
    );
}



