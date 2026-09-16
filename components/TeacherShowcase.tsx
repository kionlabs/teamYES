'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Sparkles, UserCheck, ShieldCheck, HeartHandshake } from 'lucide-react';

const mentorPoints = [
  {
    icon: ShieldCheck,
    title: '3단계 철저한 팩트체크',
    description: '서류 검증, 전문 역량 테스트, 인성 심층 면접 통과',
  },
  {
    icon: UserCheck,
    title: '1:1 성향 매칭 시스템',
    description: '학생과 코치의 학습 성향 및 케미스트리를 고려한 정밀 배정',
  },
  {
    icon: HeartHandshake,
    title: '지속적인 수업 피드백',
    description: '코치 혼자가 아닌 본사 매니저의 2중 밀착 학부모 케어',
  },
];

export default function TeacherShowcase() {
  return (
    <section className="relative bg-white border-b border-slate-200/80 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Column: Teacher Image with Floating Badge */}
          <div className="relative group">
            {/* Soft Ambient Background Glow */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-purple-200/60 to-indigo-200/60 opacity-60 blur-xl group-hover:opacity-90 transition-opacity" />

            <div className="relative overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-xl shadow-purple-500/10">
              <Image
                src="/images/teacher-coaching.jpg"
                alt="실력과 인성을 갖춘 예스지구 전문 코치의 1:1 맞춤 지도"
                width={700}
                height={480}
                priority
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Floating Verification Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-purple-400/40 px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-2xl">
                <Sparkles className="h-4 w-4 text-amber-300 shrink-0" />
                <span>합격률 5% 미만의 엄격한 코치 검증 시스템</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist Points */}
          <div className="text-left">
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 border border-purple-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700 mb-4 shadow-sm">
              <span>PREMIUM MENTORS</span>
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-tight break-keep">
              <span className="inline-block">실력과 인성을 모두 겸비한</span><br className="hidden sm:inline" />{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 inline-block">
                예스지구 전문 코치진
              </span>
            </h2>

            {/* Subtext */}
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium break-keep">
              스펙만 내세우지 않습니다. 아이의 마음을 열고 올바른 학습 습관을 심어줄 진짜 멘토를 만나보세요.
            </p>

            {/* 3 Checklist Points */}
            <div className="mt-8 space-y-4">
              {mentorPoints.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 p-4 transition-all hover:border-purple-300 hover:bg-purple-50/30"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700 border border-purple-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5 break-keep">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
