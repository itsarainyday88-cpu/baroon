"use client";
import { Star } from "lucide-react";

const reviews = [
    {
        id: 1,
        name: "angelmakoto32님",
        date: "24.01.15 방문",
        content: "임산부라서 치료가능한지 엄청 걱정하면서 예약했는데 다행히 치료할때 상세히 설명해주시고 아프지않게 해주시고 의사선생님 간호사선생님들께서 엄청 친절하셔서 마음 편히 진료받고왔습니다~",
        rating: 5,
        tag: "예약 후 이용대기 시간 바로 입장",
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
                        <div key={review.id} className="bg-white p-7 rounded-[18px] border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 relative flex flex-col h-full group">
                            {/* Naver-like Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-lg select-none">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p className="font-bold text-gray-900 text-[15px]">{review.name}</p>
                                            <span className="text-[11px] text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100 tracking-tight">{review.type}</span>
                                        </div>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <div className="flex gap-0.5">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star key={i} className="w-3 h-3 text-[#03C75A] fill-[#03C75A]" />
                                                ))}
                                            </div>
                                            <span className="text-[12px] text-gray-400 font-medium">{review.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Review Content */}
                            <div className="mb-4 flex-grow">
                                <p className="text-gray-700 text-[15px] leading-[1.6] break-keep tracking-[-0.01em]">
                                    {review.content}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="mt-auto pt-4 border-t border-gray-50">
                                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 bg-[#03C75A]/5 text-[#03C75A] rounded-lg">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
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
