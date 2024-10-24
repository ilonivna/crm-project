import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
    return (
        <main>
            <h1 className="text-xl">Dashboard / New companies</h1>
            <div>Additional info</div>
        </main>
    );
}