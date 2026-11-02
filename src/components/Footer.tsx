import React from 'react';
import { ArrowUpRight, Building2, CheckCircle2, Github, ShieldAlert, Sparkles } from 'lucide-react';
import { IndustryType } from '../types';

interface FooterProps {
  onSelectIndustry: (ind: IndustryType) => void;
  onOpenReport: () => void;
  onOpenCompanyTab: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectIndustry,
  onOpenReport,
  onOpenCompanyTab,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs mt-16">
      {/* Top Value Recap Banner */}
      <div className="border-b border-slate-800/80 py-8 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-white font-bold text-base mb-1 font-sans">
              Industry Insight · 대한민국 제조업 취업 인텔리전스
            </div>
            <p className="text-slate-400 max-w-2xl text-xs sm:text-sm leading-relaxed">
              대학생 및 취업 준비생이 복잡한 산업 뉴스와 기술 용어를 빠르게 습득하고, 자기소개서 작성과 실전 임원·실무 면접에서 즉각 활용할 수 있도록 정밀 분석 프레임워크를 제공합니다.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenReport}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md transition-colors"
            >
              2026 산업 리포트 읽기
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Col 1: Platform Overview */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
              II
            </div>
            <span className="font-bold text-white text-sm tracking-tight font-sans">
              INDUSTRY INSIGHT
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed text-[11px]">
            한국 대표 제조업 3대 핵심축(자동차, 중공업, 철강) 중심의 실전 산업동향 큐레이션 및 직무 역량 매핑 시스템.
          </p>
          <div className="text-[11px] text-slate-500 font-mono">
            Platform Ver 1.0 (MVP) · Next.js & React Ready
          </div>
        </div>

        {/* Col 2: Industry Coverage */}
        <div className="space-y-2.5">
          <span className="font-bold text-white text-xs uppercase tracking-wider block">
            산업별 커버리지
          </span>
          <ul className="space-y-2 text-[11px]">
            <li>
              <button
                onClick={() => onSelectIndustry('automotive')}
                className="hover:text-white transition-colors"
              >
                자동차 산업 (현대차·기아·모비스·만도)
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectIndustry('heavy')}
                className="hover:text-white transition-colors"
              >
                중공업 산업 (HD현대·한화오션·삼성중·두산에너빌리티)
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectIndustry('steel')}
                className="hover:text-white transition-colors"
              >
                철강 산업 (POSCO·현대제철·동국제강·세아)
              </button>
            </li>
            <li>
              <button
                onClick={onOpenCompanyTab}
                className="hover:text-white transition-colors text-blue-400 font-medium"
              >
                17개 기업 디렉터리 & 채용 정보
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Key Keywords Guide */}
        <div className="space-y-2.5">
          <span className="font-bold text-white text-xs uppercase tracking-wider block">
            핵심 기술 분류
          </span>
          <div className="flex flex-wrap gap-1.5 text-[10px]">
            <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded text-slate-300">
              전기차(EV) & SDV
            </span>
            <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded text-slate-300">
              하이브리드 혼류생산
            </span>
            <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded text-slate-300">
              초대형 암모니아선(VLAC)
            </span>
            <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded text-slate-300">
              미 해군 함정 MRO
            </span>
            <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded text-slate-300">
              수소환원제철(HyREX)
            </span>
            <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded text-slate-300">
              전기로 탄소저감 강판
            </span>
            <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded text-slate-300">
              스마트 조선소(FOS)
            </span>
          </div>
        </div>

        {/* Col 4: Deployment & Architecture */}
        <div className="space-y-2.5">
          <span className="font-bold text-white text-xs uppercase tracking-wider block">
            개발 및 배포 구조
          </span>
          <p className="text-slate-400 leading-relaxed text-[11px]">
            본 프로젝트는 비전공자 대학생도 GitHub 레포지토리에 푸시하여 <strong>Vercel</strong>로 1분 만에 원클릭 무료 배포할 수 있도록 경량화 및 모듈화 설계되었습니다.
          </p>
          <div className="pt-1">
            <span className="text-slate-500 block text-[10px]">
              자세한 배포 가이드는 저장소의 README.md를 참조하세요.
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Disclaimer Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-3.5 h-3.5 text-slate-400" />
          <span>
            본 플랫폼은 대학생 및 취업 준비생의 산업 학습을 목적으로 제작된 인텔리전스 시스템이며, 모든 분석 데이터는 교육 및 면접 대비 가이드 목적으로 제공됩니다.
          </span>
        </div>
        <div className="font-mono text-slate-500">
          © 2026 Industry Insight. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
