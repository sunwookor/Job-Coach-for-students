import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Cpu, Layers, ShieldCheck } from 'lucide-react';
import { IndustryType } from '../types';

interface IndustryNavHeroProps {
  currentIndustry: IndustryType;
  onSelectIndustry: (ind: IndustryType) => void;
  stats: {
    autoCount: number;
    heavyCount: number;
    steelCount: number;
    totalCount: number;
  };
}

export const IndustryNavHero: React.FC<IndustryNavHeroProps> = ({
  currentIndustry,
  onSelectIndustry,
  stats,
}) => {
  return (
    <div className="bg-slate-900 text-white border-b border-slate-800">
      {/* Editorial Headline & Value Prop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-2">
              <span>대한민국 제조업 취업준비생을 위한 산업동향 인텔리전스</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">RESEARCH & CAREER INSIGHT</span>
            </div>
            <h1 className="text-[35px] font-bold tracking-tight text-white leading-tight font-sans">
              산업 뉴스에서 직무 역량과 실전 면접 질문까지
            </h1>
            <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              단순한 기사 나열을 넘어 <strong>‘산업 뉴스 → 핵심 요약 → 산업적 파급효과 → 직무 연결 및 면접 대비’</strong>로 이어지는 4단계 취업 인사이트를 제공합니다.
            </p>
          </div>

          {/* 4-Step Methodology Pillar Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-950/80 p-3 rounded-lg border border-slate-800 text-xs">
            <div className="px-2 py-1">
              <span className="text-[10px] text-blue-400 font-mono block">STEP 01</span>
              <span className="font-semibold text-slate-200">산업 뉴스 색인</span>
            </div>
            <div className="px-2 py-1 border-l border-slate-800">
              <span className="text-[10px] text-blue-400 font-mono block">STEP 02</span>
              <span className="font-semibold text-slate-200">기술 핵심 요약</span>
            </div>
            <div className="px-2 py-1 border-l border-slate-800">
              <span className="text-[10px] text-blue-400 font-mono block">STEP 03</span>
              <span className="font-semibold text-slate-200">산업·기업 영향</span>
            </div>
            <div className="px-2 py-1 border-l border-slate-800">
              <span className="text-[10px] text-blue-400 font-mono block">STEP 04</span>
              <span className="font-semibold text-slate-200">직무·면접 연결</span>
            </div>
          </div>
        </div>

        {/* 3 Pillar Industry Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          {/* Card 1: Automotive */}
          <div
            onClick={() => onSelectIndustry('automotive')}
            className={`cursor-pointer rounded-lg overflow-hidden border transition-all duration-200 relative group flex flex-col justify-between ${
              currentIndustry === 'automotive'
                ? 'border-blue-500 bg-slate-800/90 ring-2 ring-blue-500/30'
                : 'border-slate-800 bg-slate-800/40 hover:border-slate-700 hover:bg-slate-800/70'
            }`}
          >
            <div className="relative h-36 w-full overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950">
              <img
                src="/images/auto_manufacturing_line.jpg"
                alt="자동차 생산라인"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if main path has issues
                  const target = e.currentTarget;
                  if (!target.src.includes('auto_manufacturing_line_')) {
                    target.src = '/images/auto_manufacturing_line_1793603206517.jpg';
                  } else {
                    target.style.opacity = '0';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="absolute top-3 left-3 flex items-center gap-1.5 text-xs text-white bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span className="font-semibold">자동차 (Automotive)</span>
              </div>
              <div className="absolute bottom-2.5 right-3 text-xs text-slate-300 font-mono tabular-nums">
                {stats.autoCount}건의 분석
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs text-slate-400 mb-1.5">
                  현대차 · 기아 · 현대모비스 · 현대트랜시스 · 현대위아 · HL만도
                </div>
                <div className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  전기차(EV) 캐즘 대응 혼류생산, SDV 아키텍처 전환, 차세대 섀시 바이와이어 및 배터리 시스템
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-blue-400 group-hover:text-blue-300 font-medium">
                <span>자동차 산업 전용 피드</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 2: Heavy Industries */}
          <div
            onClick={() => onSelectIndustry('heavy')}
            className={`cursor-pointer rounded-lg overflow-hidden border transition-all duration-200 relative group flex flex-col justify-between ${
              currentIndustry === 'heavy'
                ? 'border-blue-500 bg-slate-800/90 ring-2 ring-blue-500/30'
                : 'border-slate-800 bg-slate-800/40 hover:border-slate-700 hover:bg-slate-800/70'
            }`}
          >
            <div className="relative h-36 w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-slate-900 to-slate-950">
              <img
                src="/images/shipyard_heavy_industry.jpg"
                alt="중공업 조선소"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('shipyard_heavy_industry_')) {
                    target.src = '/images/shipyard_heavy_industry_1793603208246.jpg';
                  } else {
                    target.style.opacity = '0';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="absolute top-3 left-3 flex items-center gap-1.5 text-xs text-white bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span className="font-semibold">중공업 (Heavy Industries)</span>
              </div>
              <div className="absolute bottom-2.5 right-3 text-xs text-slate-300 font-mono tabular-nums">
                {stats.heavyCount}건의 분석
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs text-slate-400 mb-1.5">
                  HD현대중공업 · HD현대미포 · HD현대일렉트릭 · 삼성중공업 · 한화오션 · 두산에너빌리티
                </div>
                <div className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  친환경 가스선(VLAC/LNG), 미 해군 MRO 방산 특수선, SMR 원전 주기기 및 초고압 전력망 슈퍼사이클
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-blue-400 group-hover:text-blue-300 font-medium">
                <span>중공업 산업 전용 피드</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 3: Steel */}
          <div
            onClick={() => onSelectIndustry('steel')}
            className={`cursor-pointer rounded-lg overflow-hidden border transition-all duration-200 relative group flex flex-col justify-between ${
              currentIndustry === 'steel'
                ? 'border-blue-500 bg-slate-800/90 ring-2 ring-blue-500/30'
                : 'border-slate-800 bg-slate-800/40 hover:border-slate-700 hover:bg-slate-800/70'
            }`}
          >
            <div className="relative h-36 w-full overflow-hidden bg-gradient-to-br from-amber-950 via-slate-900 to-slate-950">
              <img
                src="/images/steel_plant_production.jpg"
                alt="철강 압연 설비"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('steel_plant_production_')) {
                    target.src = '/images/steel_plant_production_1793603207204.jpg';
                  } else {
                    target.style.opacity = '0';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="absolute top-3 left-3 flex items-center gap-1.5 text-xs text-white bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="font-semibold">철강 (Steel & Materials)</span>
              </div>
              <div className="absolute bottom-2.5 right-3 text-xs text-slate-300 font-mono tabular-nums">
                {stats.steelCount}건의 분석
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs text-slate-400 mb-1.5">
                  POSCO · 현대제철 · 동국제강 · 세아베스틸 · 세아제강
                </div>
                <div className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  수소환원제철(HyREX), 탄소국경세(CBAM) 대응 전기로 신설, 1.5GPa 초고장력 기가스틸 및 해상풍력 특수강관
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-blue-400 group-hover:text-blue-300 font-medium">
                <span>철강 산업 전용 피드</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
