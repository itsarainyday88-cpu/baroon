"use client";
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DoctorsPage() {
    return (
        <main className="min-h-screen bg-warmWhite">
            <Header />

            {/* Cooperation Banner Section */}
            <section className="pt-40 pb-20 bg-secondary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/doctors_bg_logo_v2.png')] opacity-5 bg-cover bg-center" />
                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-accent font-medium tracking-widest mb-4">COOPERATIVE DIAGNOSIS</h2>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            2인 전문의 협진 시스템
                        </h1>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
                            통합치의학과와 치과보철과 전문의가 함께 고민하고 진단합니다.<br className="hidden md:block" />
                            대학병원급 정밀 진단으로 하나의 치아도 놓치지 않는 바른 진료를 약속합니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Director Kim Ju-hyeong */}
            <section className="py-24 overflow-hidden">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[600px] lg:h-[800px] rounded-3xl overflow-hidden bg-white shadow-2xl"
                        >
                            <Image
                                src="/images/director_left_transparent.png"
                                alt="김주형 대표원장"
                                fill
                                className="object-cover object-top lg:object-contain lg:scale-[1.1] lg:translate-y-12"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </motion.div>

                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:pl-12"
                        >
                            <div className="mb-12">
                                <h3 className="text-accent font-bold mb-2">통합치의학과 전문의</h3>
                                <h2 className="text-4xl font-serif font-bold text-secondary mb-6">김주형 대표원장</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    "나무가 아닌 숲을 봅니다.<br />
                                    환자분의 구강 전체를 아우르는 통합적인 시각으로,<br />
                                    오래도록 건강하게 쓸 수 있는 치료 계획을 세웁니다."
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-bold text-secondary text-lg mb-4 border-b border-secondary/10 pb-2">약력 (Resume)</h4>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li>• 보건복지부 인증 통합치의학과 전문의</li>
                                        <li>• 단국대학교 치과대학 졸업</li>
                                        <li>• 건강보험심사평가원장 / 김천시장 표창장 수상</li>
                                        <li>• 前) 경북 김천시보건소 치과진료실 과장</li>
                                        <li>• 前) 성남 박애치과 / 대전 연세고운미소치과 원장</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary text-lg mb-4 border-b border-secondary/10 pb-2">학회 및 활동</h4>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li>• 대한치과보철학회 / 보존학회 / 이식임플란트학회 정회원</li>
                                        <li>• 서울대학교 치의학대학원 임상치의학 과정 수료</li>
                                        <li>• 대한심폐소생협회 BLS provider</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-px bg-secondary/5 container-custom" />

            {/* Director Kim Hyeong-jun */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text (Order 2 on Mobile, 1 on Desktop) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1 lg:pr-12"
                        >
                            <div className="mb-12 text-right lg:text-left"> {/* Right align mobile, left desktop? actually left is better generally, but alternating is nice. Let's keep consistent left align for text content reading. */}
                                <h3 className="text-accent font-bold mb-2">치과보철과 전문의</h3>
                                <h2 className="text-4xl font-serif font-bold text-secondary mb-6">김형준 대표원장</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    "기본에 충실한 것이 가장 빠른 치료입니다.<br />
                                    0.1mm의 오차도 허용하지 않는 정교함으로<br />
                                    편안하고 아름다운 미소를 되찾아 드립니다."
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-bold text-secondary text-lg mb-4 border-b border-secondary/10 pb-2">약력 (Resume)</h4>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li>• 보건복지부 인증 치과보철과 전문의</li>
                                        <li>• 단국대학교 치과대학 졸업 및 대학원 치과보철학 석사</li>
                                        <li>• 단국대학교 치과대학병원 인턴 / 보철과 전공의 수료</li>
                                        <li>• 前) 단국대학교 치과대학병원 외래교수</li>
                                        <li>• 前) 국군고양병원 치과 보철과장</li>
                                        <li>• 前) 연세세브란스치과의원 공도점 수석원장</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary text-lg mb-4 border-b border-secondary/10 pb-2">학회 및 활동</h4>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li>• 대한치과보철학회 인정의 및 정회원</li>
                                        <li>• 대한턱관절교합학회 인정의 및 정회원</li>
                                        <li>• 서울대학교 치의학대학원 임상치의학 과정 수료</li>
                                        <li>• 서울대학교 치의학대학원 치의학교육연수원 동창회원</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image (Order 1 on Mobile, 2 on Desktop) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2 relative h-[600px] lg:h-[800px] rounded-3xl overflow-hidden bg-warmWhite shadow-2xl"
                        >
                            <Image
                                src="/images/director_right_transparent.png"
                                alt="김형준 대표원장"
                                fill
                                className="object-cover object-top lg:object-contain lg:scale-[1.1] lg:translate-y-12"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
