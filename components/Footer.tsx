'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-slate-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 shadow-sm">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-extrabold text-slate-900 tracking-tight">
              YESJIGU
            </span>
            <span className="text-xs text-slate-500 border-l border-slate-200 pl-3">
              에듀테크 매칭 시스템
            </span>
          </div>

          {/* Copyright Notice */}
          <div className="text-center text-xs text-slate-500 sm:text-right">
            <p>© {currentYear} YESJIGU &amp; KION Labs. All rights reserved.</p>
            <p className="mt-1 text-slate-400">
              AI 기반 신입 코치 &amp; 학생 1:1 맞춤 매칭 서비스
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
