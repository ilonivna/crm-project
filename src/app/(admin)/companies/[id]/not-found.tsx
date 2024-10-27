'use client';

import React from "react";
import Link from "next/link";

export interface NotFoundProps {}

export default function NotFound({}: NotFoundProps ) {
    return (
        <div>
           <p>Company not found</p>
            <Link href="/companies" className="text-blue-500">Back to companies list</Link>
        </div>)
}