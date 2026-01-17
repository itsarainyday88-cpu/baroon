"use client";
import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, HeartHandshake } from "lucide-react";

const pledges = [
    {
        icon: <ShieldCheck className="w-10 h-10 text-accent" />,
        title: "자연치아 살리기",
        description: "임플란트보다 소중한 자연치아를 지키는 것을 최우선원칙으로 진료합니다."
    },
    {
        icon: <UserCheck className="w-10 h-10 text-accent" />,
        title: "정직하고 투명한 진단",
        description: "환자분과 모니터를 함께 보며 현재 상태와 치료 계획을 숨김없이 설명드립니다."
    },
    {
        icon: <HeartHandshake className="w-10 h-10 text-accent" />,
        title: "아프지 않은 배려",
        description: "공포 없는 치과를 위해 무통 마취 시스템과 섬세한 테크닉을 연구합니다."
    }
];

export default function Pledge() {
    return (
        <section className="py-24 bg-background">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h3 className="text-accent font-medium tracking-widest text-sm uppercase mb-4">Our Promise</h3>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">
                        바른 생각이<br />바른 진료를 만듭니다.
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        과잉 진료 없는 정직한 치과, 환자분의 마음까지 헤아리는 따뜻한 치과.<br />
                        바른모양치과가 지켜나가는 세 가지 약속입니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {pledges.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-secondary/5 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="mb-6 p-4 bg-warmWhite rounded-full">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold text-secondary mb-3">{item.title}</h4>
                            <p className="text-gray-500 leading-relaxed whitespace-pre-line text-sm md:text-base">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
