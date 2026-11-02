import React, { useState } from 'react';
import { Bookmark, Compass, FileText, Menu, Search, X } from 'lucide-react';
import { IndustryType } from '../types';

interface HeaderProps {
  currentIndustry: IndustryType;
  onSelectIndustry: (ind: IndustryType) => void;
  onOpenScrap: () => void;
  scrapCount: number;
  onOpenReport: () => void;
  onOpenCompanyTab: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentIndustry,
  onSelectIndustry,
  onOpenScrap,
  scrapCount,
  onOpenReport,
  onOpenCompanyTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-white shadow-md">
      {/* Top Notification / Briefing Strip */}
      <div className="bg-slate-950 text-slate-400 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span className="font-medium text-slate-300">2026 상반기 제조업 채용 대비</span>
            <span className="hidden sm:inline text-slate-500">·</span>
            <span className="hidden sm:inline text-slate-400">자동차·중공업·철강 산업 기술 동향 및 실전 면접 직무 분석</span>
          </div>
          <div className="flex items-center gap-4 shrink-0 text-slate-400">
            <span className="text-slate-400 font-mono text-[11px]">KST 09:00 - 18:00</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              onSelectIndustry('all');
            }}
            className="flex items-center gap-2.5 text-left focus:outline-none group"
          >
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center font-bold text-white text-base tracking-tighter group-hover:bg-blue-500 transition-colors">
              II
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white block leading-none font-sans">
                INDUSTRY INSIGHT
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                제조업 취업 분석 플랫폼
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Primary Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-300">
          <button
            onClick={() => onSelectIndustry('all')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 ${
              currentIndustry === 'all'
                ? 'bg-slate-800 text-white font-semibold'
                : 'hover:text-white hover:bg-slate-800/60'
            }`}
          >
            홈
          </button>
          <button
            onClick={() => onSelectIndustry('automotive')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 ${
              currentIndustry === 'automotive'
                ? 'bg-blue-600 text-white font-semibold'
                : 'hover:text-white hover:bg-slate-800/60'
            }`}
          >
            자동차
          </button>
          <button
            onClick={() => onSelectIndustry('heavy')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 ${
              currentIndustry === 'heavy'
                ? 'bg-blue-600 text-white font-semibold'
                : 'hover:text-white hover:bg-slate-800/60'
            }`}
          >
            중공업
          </button>
          <button
            onClick={() => onSelectIndustry('steel')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 ${
              currentIndustry === 'steel'
                ? 'bg-blue-600 text-white font-semibold'
                : 'hover:text-white hover:bg-slate-800/60'
            }`}
          >
            철강
          </button>

          <span className="h-4 w-[1px] bg-slate-700 mx-1"></span>

          <button
            onClick={onOpenCompanyTab}
            className="px-3 py-1.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Compass className="w-4 h-4 text-slate-400" />
            <span>기업별 동향</span>
          </button>
          <button
            onClick={onOpenReport}
            className="px-3 py-1.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4 text-slate-400" />
            <span>산업 리포트</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action & Scrapbook */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenScrap}
            className="relative px-3 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 transition-colors flex items-center gap-2 whitespace-nowrap"
            title="스크랩한 기사 모아보기"
          >
            <Bookmark className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">스크랩북</span>
            {scrapCount > 0 && (
              <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full tabular-nums">
                {scrapCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md focus:outline-none"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-2">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800 text-sm">
            <button
              onClick={() => {
                onSelectIndustry('all');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded text-left ${currentIndustry === 'all' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800/50'}`}
            >
              전체 산업 홈
            </button>
            <button
              onClick={() => {
                onSelectIndustry('automotive');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded text-left ${currentIndustry === 'automotive' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800/50'}`}
            >
              자동차 산업
            </button>
            <button
              onClick={() => {
                onSelectIndustry('heavy');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded text-left ${currentIndustry === 'heavy' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800/50'}`}
            >
              중공업 산업
            </button>
            <button
              onClick={() => {
                onSelectIndustry('steel');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded text-left ${currentIndustry === 'steel' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800/50'}`}
            >
              철강 산업
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenCompanyTab();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-2.5 text-sm text-slate-300 hover:bg-slate-800 rounded"
            >
              <Compass className="w-4 h-4 text-blue-400" />
              <span>17개 핵심 기업별 동향 및 채용 포커스</span>
            </button>
            <button
              onClick={() => {
                onOpenReport();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-2.5 text-sm text-slate-300 hover:bg-slate-800 rounded"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>2026 산업 심층 분석 리포트</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
