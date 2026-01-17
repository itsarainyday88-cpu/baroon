"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-warmWhite overflow-hidden">

            {/* Background/Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-secondary/5 to-transparent z-0" />

            {/* Directors "Gate" Layout */}
            <div className="absolute inset-0 pointer-events-none flex justify-between items-end z-0 pb-[10vh] lg:pb-[10vh]">
                {/* Left Director */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden lg:block relative w-[35vw] h-[85vh] xl:h-[90vh] -ml-8 lg:ml-0"
                >
                    <Image
                        src="/images/director_left_transparent.png"
                        alt="Director Kim Ju-hyeong"
                        fill
                        className="object-contain object-bottom"
                        priority
                    />
                </motion.div>

                {/* Right Director */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden lg:block relative w-[35vw] h-[85vh] xl:h-[90vh] -mr-8 lg:mr-0"
                >
                    <Image
                        src="/images/director_right_transparent.png"
                        alt="Director Kim Hyeong-jun"
                        fill
                        className="object-contain object-bottom"
                        priority
                    />
                </motion.div>
            </div>

            {/* Mobile Visual (Fallback) */}
            <div className="lg:hidden absolute inset-0 z-0 opacity-20">
                <Image
                    src="/images/directors_v2.png"
                    alt="Directors"
                    fill
                    className="object-cover object-top"
                />
            </div>

            {/* Content Container */}
            <div className="container-custom relative z-10 flex flex-col items-center text-center h-full pt-20 lg:pt-0">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl space-y-8"
                >
                    <div className="space-y-6">
                        <h2 className="text-secondary/80 font-medium tracking-[0.2em] text-sm md:text-base uppercase">
                            The Standard of Dental Care
                        </h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-secondary">
                            이름과 얼굴을 걸고 <br />
                            <span className="text-accent relative inline-block">
                                약속합니다.
                                <span className="absolute bottom-2 left-0 w-full h-1 bg-primary/40 -z-10"></span>
                            </span>
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto">
                            치과는 두려움의 대상이 아닌, 신뢰의 공간이어야 합니다.<br className="hidden md:block" />
                            바른모양치과는 과잉 없는 정직한 진료만을 고집합니다.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <a
                            href="https://map.naver.com/p/entry/place/1333658420?c=14.91,0,0,0,dh&placePath=/home?additionalHeight=76&fromPanelNum=1&locale=ko&svcName=map_pcv5&timestamp=202601171603&from=map&fromPanelNum=1&locale=ko&svcName=map_pcv5&timestamp=202601171543&additionalHeight=76"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 px-10 h-14 text-lg shadow-xl shadow-secondary/10">
                                진료 예약하기
                            </Button>
                        </a>
                        <Link href="/doctors">
                            <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/5 h-14 px-8 text-lg bg-white/50 backdrop-blur-sm">
                                의료진 소개
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
