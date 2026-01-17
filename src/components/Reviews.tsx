"use client";
import { Star } from "lucide-react";

const reviews = [
    {
        id: 1,
        name: "김**님",
        date: "24.01.15 방문",
        content: "치과 공포증이 너무 심해서 몇 년을 미루다 갔는데, 마취 주사 놓는 줄도 모르게 하나도 안 아파서 놀랐어요. 원장님이 계속 괜찮냐고 물어봐주시고 정말 세심하게 진료해주십니다.",
        rating: 5,
        tag: "통증 최소화",
        type: "영수증 리뷰"
    },
    {
        id: 2,
        name: "이**님",
        date: "23.12.20 방문",
        content: "다른 치과에서는 임플란트 3개 해야 한다고 해서 겁먹고 왔는데, 여기서는 1개만 하고 나머지는 최대한 살려보자고 하셔서 믿음이 갔습니다. 과잉진료 없는 진짜 양심 치과예요.",
        rating: 5,
        tag: "자연치아 보존",
        type: "영수증 리뷰"
    },
    {
        id: 3,
        name: "박**님",
        date: "24.03.05 방문",
        content: "상담 실장님부터 원장님까지 모두 너무 친절해요. 모니터로 엑스레이 보여주시면서 제 상태를 하나하나 알기 쉽게 설명해주시니 신뢰가 갑니다. 평생 다닐 치과 찾았어요!",
        rating: 5,
        tag: "친절한 상담",
        type: "예약 리뷰"
    }
];

export default function Reviews() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#03C75A]/10 text-[#03C75A] font-bold text-sm mb-4">
                        <span className="w-2 h-2 rounded-full bg-[#03C75A]"></span>
                        NAVER 방문자 리뷰
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
                        환자분들이 직접 남겨주신<br />
                        솔직한 이야기
                    </h2>
                    <p className="text-gray-500">
                        바른모양치과를 다녀가신 분들의 소중한 후기입니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-warmWhite p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-secondary/5 relative">
                            {/* Naver Icon Watermark */}
                            <div className="absolute top-6 right-6 font-bold text-[#03C75A]/20 text-4xl font-serif select-none">
                                "
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-[#03C75A]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6 min-h-[4.5rem] line-clamp-3 text-sm">
                                {review.content}
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-secondary/10">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="font-bold text-secondary text-sm">{review.name}</p>
                                        <span className="text-[10px] text-gray-400 border border-gray-200 px-1 rounded">{review.type}</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-0.5">{review.date}</p>
                                </div>
                                <span className="text-[10px] font-medium px-2 py-1 bg-white border border-secondary/10 rounded-full text-gray-500">
                                    {review.tag}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://map.naver.com/p/entry/place/1333658420?c=15.00,0,0,0,dh&placePath=/review?additionalHeight=76&fromPanelNum=1&locale=ko&svcName=map_pcv5&timestamp=202601171605&additionalHeight=76&timestamp=202601171605&locale=ko&svcName=map_pcv5&fromPanelNum=1"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-[#03C75A] transition-colors text-sm font-medium border-b border-transparent hover:border-[#03C75A] pb-0.5"
                    >
                        <span>네이버 지도에서 리뷰 더보기</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
