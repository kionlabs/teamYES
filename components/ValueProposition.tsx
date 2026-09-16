'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Search, Sliders, LineChart } from 'lucide-react';

const coachingSteps = [
  {
    step: 'STEP 01',
    badgeStyle: 'bg-purple-100 text-purple-700 border-purple-200',
    icon: Search,
    title: 'AI 성향 및 취약점 진단',
    description: '아이의 학습 성향, 심리 상태, 부족한 개념을 데이터 기반으로 정밀하게 진단합니다.',
  },
  {
    step: 'STEP 02',
    badgeStyle: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    icon: Sliders,
    title: '1:1 맞춤 커리큘럼 수행',
    description: '검증된 명문대 코치와 함께 호흡하며 매일의 학습 계획과 과제를 주도적으로 수행합니다.',
  },
  {
    step: 'STEP 03',
    badgeStyle: 'bg-teal-100 text-teal-700 border-teal-200',
    icon: LineChart,
    title: '실시간 성장 데이터 피드백',
    description: '매 수업 이후 학부모에게 전송되는 투명하고 상세한 밀착 리포트로 아이의 변화를 확인합니다.',
  },
];

export default function ValueProposition() {
  return (
    <section className="relative pt-36 md:pt-48 pb-16 md:pb-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Cohesive Phrase-Level Inline-Block Control */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 border border-purple-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700 mb-4 shadow-sm">
            <span>PREMIUM LEARNING ENVIRONMENT</span>
          </div>
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl md:text-4xl leading-snug sm:leading-snug md:leading-snug break-keep max-w-2xl sm:max-w-3xl mx-auto text-center">
            <span className="inline-block">우리 아이가 몰입하는</span>{' '}
            <span className="inline-block">전문적인 1:1 맞춤 코칭 환경</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base break-keep font-medium max-w-2xl mx-auto">
            <span className="inline-block">단순 과외 연결을 넘어</span>{' '}
            <span className="inline-block">학생의 성공적인 성장을 지원하는 프리미엄 케어 시스템</span>
          </p>
        </div>

        {/* Storytelling Banner Card with Light Gradient Overlay */}
        <div className="relative overflow-hidden rounded-3xl mb-14 border border-slate-200 shadow-xl group">
          <div className="relative h-72 sm:h-96 md:h-[420px] w-full">
            <Image
              src="/images/study-env.jpg"
              alt="실제 우리 아이가 공부하는 편안하고 전문적인 1:1 학습 환경"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Very Light Subtle Gradient Overlay for Text Readability Only */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/30 to-transparent" />
          </div>

          {/* Compressed Crisp Overlay Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-14 text-white max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 border border-white/30 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-md w-fit mb-3">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              <span>실제 우리 아이가 경험하는 몰입 학습 공간</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-snug tracking-tight break-keep text-white">
              <span className="inline-block">AI 분석과 1:1 밀착 코칭으로</span>{' '}
              <span className="inline-block">완성하는 자기주도 학습</span>
            </h3>
            <p className="mt-2.5 text-slate-100 text-xs sm:text-sm font-medium leading-relaxed break-keep">
              체계적인 데이터 진단과 검증된 코치가 아이의 학습 페이스를 촘촘히 케어합니다.
            </p>
          </div>
        </div>

        {/* 3-Step Coaching Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coachingSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Step Badge */}
                <span
                  className={`inline-block border px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-sm ${item.badgeStyle}`}
                >
                  {item.step}
                </span>

                {/* Icon Box & Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed break-keep font-medium">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
