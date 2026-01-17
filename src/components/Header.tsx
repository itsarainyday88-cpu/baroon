"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 right-0 z-50 pt-2"
        >
            <div className="w-full px-4 flex justify-between items-center">
                <Link href="/" className="group flex items-center gap-2 cursor-pointer z-50">
                    {/* Logo Image */}
                    <div className="relative w-[30rem] md:w-[45rem] h-28 md:h-48 -mt-4 md:-mt-8">
                        <Image
                            src="/images/baroon_logo_user.png"
                            alt="바른모양치과 - 홈으로 이동"
                            fill
                            className="object-contain object-left-top"
                            priority
                        />
                    </div>
                </Link>
            </div>
        </motion.header>
    );
}
