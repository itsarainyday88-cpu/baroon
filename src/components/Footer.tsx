import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white py-16">
            <div className="container-custom grid lg:grid-cols-2 gap-12">

                {/* Info */}
                <div className="space-y-6 pl-4 md:pl-12">
                    <h2 className="text-2xl font-serif font-bold text-white mb-6">바른모양치과</h2>

                    <div className="space-y-4 text-sm font-light">
                        <div className="flex gap-4">
                            <span className="w-20 opacity-70 shrink-0">주소</span>
                            <span>경기 성남시 수정구 수정로 108 2, 3층 (태평동)</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="w-20 opacity-70 shrink-0">전화</span>
                            <span>031-8039-6543</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="w-20 opacity-70 shrink-0">진료시간</span>
                            <div>
                                <p>월 / 수 : 09:30 - 20:30 (야간진료)</p>
                                <p>화 / 목 / 금 : 09:30 - 18:30</p>
                                <p>토요일 : 09:30 - 14:00 (점심시간 없음)</p>
                                <p className="text-white/60 text-xs mt-1 mb-1">점심시간 : 13:30 - 14:30</p>
                                <p className="text-accent-300 mt-1 font-medium">일요일 및 공휴일 휴진</p>
                            </div>
                        </div>
                        <div className="flex gap-4 pt-2">
                            <span className="w-20 text-accent-300 font-medium shrink-0">주차</span>
                            <span>성남중앙공설시장 주차빌딩 이용</span>
                        </div>
                    </div>

                    <div className="pt-8 text-xs opacity-60 border-t border-white/20 mt-8">
                        © 2026 Baroon Dental Clinic. All rights reserved.
                    </div>
                </div>

                {/* Map */}
                <div className="h-64 bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative">
                    <Image
                        src="/images/baroon_map.png"
                        alt="바른모양치과 오시는 길"
                        fill
                        className="object-cover scale-[1.6]"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded text-[10px] font-bold text-secondary shadow-sm pointer-events-none">
                        성남 수정로 108
                    </div>
                </div>
            </div>
        </footer>
    );
}
