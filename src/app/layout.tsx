import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const noto_sans = Noto_Sans_KR({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const notoSerif = Noto_Serif_KR({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Baroon Dentistry | 바른모양치과",
  description: "과잉 없는 바른 진료, 본연의 아름다움을 찾아드립니다. 대표원장 2인 책임진료.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${noto_sans.variable} ${notoSerif.variable} antialiased bg-warmWhite text-secondary font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
