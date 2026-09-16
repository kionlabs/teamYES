'use client';

import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              YESJIGU
            </span>
            <span className="hidden sm:inline-flex items-center rounded-full bg-purple-50 border border-purple-200 px-2.5 py-0.5 text-xs font-semibold text-purple-700">
              에듀테크 플랫폼
            </span>
          </div>
        </div>

        {/* Right: CTA Anchor Button */}
        <div>
          <a
            href="#lead-form"
            onClick={scrollToForm}
            className="group relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-purple-500/20 transition-all hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <span>무료 상담 신청</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 text-white/90" />
          </a>
        </div>
      </div>
    </header>
  );
}
