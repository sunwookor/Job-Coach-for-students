import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Calendar, CheckCircle2, ChevronRight, Clock, FileText, Lightbulb, Share2, User, X } from 'lucide-react';
import { INDUSTRY_REPORTS } from '../data/industryReports';
import { IndustryReport, IndustryType } from '../types';

interface IndustryReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultIndustry?: IndustryType;
}

export const IndustryReportModal: React.FC<IndustryReportModalProps> = ({
  isOpen,
  onClose,
  defaultIndustry = 'all',
}) => {
  const [selectedReportId, setSelectedReportId] = useState<string>(
    defaultIndustry !== 'all'
      ? INDUSTRY_REPORTS.find((r) => r.industry === defaultIndustry)?.id || INDUSTRY_REPORTS[0].id
      : INDUSTRY_REPORTS[0].id
  );

  if (!isOpen) return null;

  const currentReport =
    INDUSTRY_REPORTS.find((r) => r.id === selectedReportId) || INDUSTRY_REPORTS[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-white w-full max-w-5xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between gap-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span className="font-bold text-sm tracking-tight">
              2026 제조업 취업 리서치 브리핑 룸
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Layout: Left Report Selector + Right Reader Canvas */}
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          {/* Left Column: Report Index Rail */}
          <div className="w-full lg:w-80 bg-slate-50 border-r border-slate-200 p-4 overflow-y-auto shrink-0 space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block px-2 mb-2">
              심층 리포트 목록
            </span>

            {INDUSTRY_REPORTS.map((rep) => {
              const isSelected = rep.id === selectedReportId;
              return (
                <div
                  key={rep.id}
                  onClick={() => setSelectedReportId(rep.id)}
                  className={`p-3.5 rounded-lg border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-white border-blue-500 shadow-xs ring-1 ring-blue-500/30'
                      : 'bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span className="font-semibold text-blue-600">
                      {rep.industry === 'automotive'
                        ? '자동차'
                        : rep.industry === 'heavy'
                        ? '중공업'
                        : '철강'}
                    </span>
                    <span className="font-mono">{rep.readingTime}</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug">
                    {rep.title}
                  </h4>
                </div>
              );
            })}

            <div className="mt-6 p-4 rounded-lg bg-blue-50/70 border border-blue-100 text-xs text-blue-900">
              <span className="font-bold block mb-1">취업 멘토 TIP</span>
              <p className="leading-relaxed text-[11px]">
                서류 전형 지원동기와 면접 1분 자기소개에서 각 리포트의 추천 키워드와 액션 포인트를 자연스럽게 녹여내면 압도적인 차별성을 확보할 수 있습니다.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Reading Area */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-900">
            {/* Meta Header */}
            <div className="border-b border-slate-200 pb-5">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-2">
                <span className="font-medium text-slate-800">{currentReport.author}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {currentReport.publishedDate}
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-600 font-medium">{currentReport.targetAudience}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-4">
                {currentReport.title}
              </h2>

              {/* Key Takeaways */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <span className="text-xs font-bold text-slate-800 block mb-2">
                  핵심 3대 시사점
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {currentReport.keySummary.map((sum, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{sum}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-6">
              {currentReport.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900">
                    {sec.heading}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {sec.content}
                  </p>
                  <div className="bg-amber-50/70 border border-amber-200/80 rounded-lg p-3.5 text-xs text-amber-950 flex items-start gap-2.5">
                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block mb-0.5">지원자 실전 행동 요령:</span>
                      <p className="text-amber-900 leading-relaxed">{sec.actionForCandidates}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recommended Keywords */}
            <div className="pt-6 border-t border-slate-200">
              <span className="text-xs font-bold text-slate-800 block mb-2">
                자기소개서 & 면접 추천 전문 키워드
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentReport.recommendedKeywords.map((kw, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono font-medium bg-slate-100 text-slate-800 px-2.5 py-1 rounded"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
