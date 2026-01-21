"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VideoHero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleVideoReady = () => {
        if (videoRef.current) {
            const video = videoRef.current;
            video.playbackRate = 0.55; // Slightly faster for smoother motion

            // Skip first 7 seconds safely once ready
            if (video.currentTime < 7) {
                video.currentTime = 7;
            }

            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Auto-play was prevented
                    // We can retain the muted state and try again or just log it
                });
            }
        }
    };

    const handleVideoEnded = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 7;
            videoRef.current.play().catch(() => { });
        }
    };

    return (
        <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
            {isMounted && (
                <video
                    key="cinematic-hero-video-v5-custom-loop"
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    src="/videos/Hong.mp4"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover z-0 opacity-90 scale-150"
                    style={{ width: '100vw', height: '100vh' }}
                    onCanPlay={handleVideoReady}
                    onEnded={handleVideoEnded}
                />
            )}

            {/* Atmosphere Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            <div className="relative z-20 text-white container-custom h-full flex flex-col items-center md:items-start justify-center pt-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="max-w-6xl text-center md:text-left space-y-12"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] drop-shadow-2xl">
                        함께 고민하고<br />
                        <span className="text-warmGold">책임지겠습니다.</span>
                    </h1>
                    <p className="text-lg md:text-2xl font-light text-white/90 max-w-2xl leading-relaxed tracking-wider">
                        과잉 진료 없는 정직함으로,<br />
                        보건복지부 인증 2인 전문의가 직접 진료합니다.
                    </p>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2"
                >
                    <div className="w-1 h-2 bg-white rounded-full" />
                </motion.div>
            </div>
        </section>
    );
}
