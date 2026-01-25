"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Doctors() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-[50%] h-full bg-secondary/5 -skew-x-12 translate-x-1/2 -z-10" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Philosophy & Profiles */}
                    <div className="flex flex-col space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight text-secondary pl-[5%] md:pl-[10%] -ml-[15px]">
                                환자분의 이야기를<br />
                                <span className="text-accent">끝까지 듣겠습니다.</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-12 pl-[5%] md:pl-[15%] -ml-[15px]">
                                "치과 치료는 기술만이 전부가 아닙니다.<br />
                                <span className="inline-block ml-2 md:ml-6 mb-2">어떤 마음으로 대하느냐가 결과를 바꿉니다.</span><br />
                                저희는 한 분 한 분을 내 가족처럼 생각하며,<br />
                                <span className="inline-block ml-2 md:ml-6">평생 주치의가 되어드리고 싶습니다."</span>
                            </p>
                        </motion.div>

                        <div className="space-y-10">
                            {/* Doctor 1 */}
                            <div className="group relative pl-8 border-l-2 border-secondary/20">
                                <h3 className="text-2xl font-bold text-secondary mb-1">김주형 대표원장</h3>
                                <p className="text-accent font-medium text-sm mb-4">통합치의학과 전문의</p>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    "나무가 아닌 숲을 보는 진료로 입안 전체의 건강과 조화를 생각합니다."
                                </p>
                            </div>

                            {/* Doctor 2 */}
                            <div className="group relative pl-8 border-l-2 border-secondary/20">
                                <h3 className="text-2xl font-bold text-secondary mb-1">김형준 대표원장</h3>
                                <p className="text-accent font-medium text-sm mb-4">치과보철과 전문의</p>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    "작은 오차도 허용하지 않는 디테일로 완벽한 기능을 회복시켜 드립니다."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visuals & Qualificactions */}
                    <div className="flex flex-col space-y-8 lg:-mt-4">
                        {/* Luxury Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-secondary/10"
                        >
                            <Image
                                src="/images/consultation_room.jpg"
                                alt="Baroon Dental Consultation"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Qualifications Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-8 rounded-2xl shadow-lg shadow-secondary/5 border border-secondary/5"
                        >
                            <h4 className="font-serif text-xl mb-6 text-secondary border-b border-secondary/10 pb-4">
                                Clinical Qualifications
                            </h4>
                            <ul className="space-y-3 text-gray-600 font-light text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                    보건복지부 인증 통합치의학과 전문의
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                    보건복지부 인증 치과보철과 전문의
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                    서울대학교 치의학대학원 고급과정 수료
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                    오스템 임플란트 임상지도의
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                    대한심미치과학회 정회원
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
