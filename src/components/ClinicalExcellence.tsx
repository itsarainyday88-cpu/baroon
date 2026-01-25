"use client";
import { Hammer, Sparkles, Microscope, Moon } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: <Hammer className="w-8 h-8" />,
        title: "디지털 임플란트",
        desc: "3D CT와 모의수술로 오차 범위를 0.1mm까지 줄인 정교한 수술.",
        color: "bg-amber-50"
    },
    {
        icon: <Microscope className="w-8 h-8" />,
        title: "자연치아 보존",
        desc: "미세현미경 신경치료로 발치를 권유받은 치아도 한번 더 살려봅니다.",
        color: "bg-green-50"
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: "심미 디자인",
        desc: "얼굴 전체의 조화를 고려한 라미네이트와 잇몸 성형.",
        color: "bg-rose-50"
    },
    {
        icon: <Moon className="w-8 h-8" />,
        title: "통증 최소화",
        desc: "가글 마취부터 수면 진료까지, 두려움 없는 치료 환경.",
        color: "bg-blue-50"
    }
];

export default function ClinicalExcellence() {
    return (
        <section className="py-24 bg-background">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
                        The Standard of Care
                    </h2>
                    <p className="text-gray-500">
                        결과로 증명하는 바른모양치과의 진료 철학
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className={`p-8 rounded-2xl ${feature.color} border border-black/5 flex flex-col items-start transition-all cursor-default group`}
                        >
                            <div className="p-3 bg-white rounded-xl shadow-sm mb-6 text-secondary group-hover:text-accent transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-secondary mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-light">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
