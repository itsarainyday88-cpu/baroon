"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const events = [
    { id: 1, src: "/images/events/event_newyear.png", alt: "2026 New Year Event" },
    { id: 2, src: "/images/events/event_anniversary.png", alt: "1st Anniversary Event" },
    { id: 3, src: "/images/events/event_pdrn.png", alt: "PDRN Regeneration Injection" },
    { id: 4, src: "/images/events/event_whitening.png", alt: "Whitening Package" },
    { id: 5, src: "/images/events/event_denture.png", alt: "Denture Cleaning Service" },
];

export default function EventPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dontShowToday, setDontShowToday] = useState(false);

    useEffect(() => {
        // Check localStorage for "hide_event_popup_{today}"
        const today = new Date().toISOString().split("T")[0];
        const hiddenDate = localStorage.getItem("hide_event_popup");

        if (hiddenDate !== today) {
            setIsOpen(true);
        }
    }, []);

    const handleClose = () => {
        if (dontShowToday) {
            const today = new Date().toISOString().split("T")[0];
            localStorage.setItem("hide_event_popup", today);
        }
        setIsOpen(false);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % events.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-xl bg-white rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Header / Close */}
                        <div className="absolute top-4 right-4 z-10">
                            <button
                                onClick={handleClose}
                                className="p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Image Carousel */}
                        <div className="relative aspect-square bg-gray-100">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={events[currentIndex].src}
                                        alt={events[currentIndex].alt}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-secondary rounded-full shadow-lg transition-all"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-secondary rounded-full shadow-lg transition-all"
                            >
                                <ChevronRight size={24} />
                            </button>

                            {/* Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {events.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? "bg-secondary w-6" : "bg-secondary/30"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Footer / Actions */}
                        <div className="flex items-center justify-between p-4 bg-white border-t border-gray-100">
                            <label className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    checked={dontShowToday}
                                    onChange={(e) => setDontShowToday(e.target.checked)}
                                    className="rounded border-gray-300 text-secondary focus:ring-secondary"
                                />
                                오늘 하루 보지 않기
                            </label>
                            <button
                                onClick={handleClose}
                                className="px-6 py-2 bg-secondary text-white text-sm font-bold rounded-lg hover:bg-secondary/90 transition-colors"
                            >
                                닫기
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
