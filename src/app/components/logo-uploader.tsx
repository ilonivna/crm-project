'use client';

import React from 'react';
import Image from 'next/image';

export interface LogoUploaderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
}

export default function LogoUploader({
    label, placeholder, id, ...rest
}: LogoUploaderProps) {
    return (

    )
}
