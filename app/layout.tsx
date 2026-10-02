import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "잇다과외 | 대한민국 No.1 AI 기반 1:1 맞춤 코치 & 학생 매칭 플랫폼",
  description: "내 아이에게 딱 맞는 명문대 코치 매칭과 성공하는 학습 습관의 시작. AI 기반 성향 정밀 분석과 철저히 검증된 명문대 신입 코치진을 만나보세요.",
  keywords: ["잇다과외", "잇다", "ITDA", "에듀테크", "AI 코치 매칭", "과외 매칭", "학습 코칭", "명문대 코치"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
