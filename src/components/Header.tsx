"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 py-4 px-6 md:px-12">
            <div className="flex items-center justify-start w-full overflow-hidden">
                <Link href="/" className="group flex flex-col items-start">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                        style={{ width: '1000px', height: '220px', maxWidth: '100vw' }}
                    >
                        <Image
                            src="/images/baroon_logo_user.png"
                            alt="Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </motion.div>
                </Link>
            </div>
        </header>
    );
}
