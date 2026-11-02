import React from 'react';
import {
  AlertCircle,
  ArrowRight,
  Bookmark,
  Building2,
  Calendar,
  CheckCircle2,
  Compass,
  ExternalLink,
  HelpCircle,
  Layers,
  Sparkles,
  Tag,
  Wrench,
  X,
} from 'lucide-react';
import { NewsArticle } from '../types';

interface NewsDetailModalProps {
  article: NewsArticle | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({
  article,
  onClose,
  isBookmarked,
  onToggleBookmark,
}) => {
  if (!article) return null;

  const getIndustryName = (ind: NewsArticle['industry']) => {
    switch (ind) {
      case 'automotive':
        return '자동차 산업 (Automotive)';
      case 'heavy':
        return '중공업 산업 (Heavy Industries)';
      case 'steel':
        return '철강 산업 (Steel & Advanced Metals)';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-white w-full max-w-4xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between gap-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-blue-400 font-semibold">{getIndustryName(article.industry)}</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-slate-300">{article.source}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => onToggleBookmark(article.id, e)}
              className={`p-2 rounded-md border text-xs font-medium flex items-center gap-1.5 transition-colors ${
                isBookmarked
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span className="hidden sm:inline">{isBookmarked ? '스크랩됨' : '스크랩'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-900">
          {/* Section 1 & 2: 기사 제목 및 출처 / 발행일 */}
          <div className="border-b border-slate-200 pb-6">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-3">
              <span className="font-medium text-slate-700">{article.source}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span className="tabular-nums">발행일: {article.publishedAt}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400 font-mono">수집시각: {article.collectedAt}</span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight mb-4 font-sans">
              {article.title}
            </h1>

            {/* Target Companies & Keywords Line */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs">
              <div className="flex items-center gap-1.5 text-slate-600">
                <Building2 className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400">관련 기업:</span>
                <span className="font-semibold text-slate-900">{article.companies.join(', ')}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-600">
                <Tag className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400">핵심 키워드:</span>
                <span className="text-slate-700">{article.keywords.join(' · ')}</span>
              </div>
            </div>
          </div>

          {/* Section 3: 핵심 내용 요약 */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <h3>01. 핵심 내용 요약</h3>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 sm:p-5 text-sm text-slate-800 leading-relaxed">
              <p className="mb-3 font-medium text-slate-900">
                {article.summary}
              </p>
              {article.analysis?.coreSummary && (
                <p className="text-slate-700 border-t border-slate-200 pt-3 text-xs sm:text-sm">
                  {article.analysis.coreSummary}
                </p>
              )}
            </div>
          </div>

          {/* Conditional Analysis Rendering: If analysis is NOT available */}
          {!article.hasAnalysis ? (
            <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-amber-900 space-y-1">
                  <p className="font-bold text-amber-950">
                    심층 직무 분석 미등록 기사
                  </p>
                  <p className="text-amber-800 leading-relaxed">
                    본 기사는 최신 뉴스 원문 수집 완료 상태이며, 산업 영향 평가 및 면접 예상 질문 분석이 생성되지 않은 원문 기사입니다. 기사 원문을 확인하려면 아래 원문 링크를 참고하세요.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Section 4 & 5: 산업 및 관련 기업에 미치는 영향 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-blue-50/60 border border-blue-100 rounded-lg p-5">
                  <div className="flex items-center gap-2 text-sm font-bold text-blue-950 mb-2">
                    <Compass className="w-4 h-4 text-blue-600" />
                    <h4>02. 산업에 미치는 영향</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {article.analysis?.industryImpact}
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-2">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    <h4>03. 관련 기업에 미치는 영향</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {article.analysis?.companyImpact}
                  </p>
                </div>
              </div>

              {/* Section 6: 취업 준비생이 알아야 할 핵심 기술·용어 */}
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-3">
                  <Wrench className="w-4 h-4 text-blue-600" />
                  <h3>04. 취업 준비생이 알아야 할 필수 기술·용어 해설</h3>
                </div>
                <div className="space-y-3">
                  {article.analysis?.technicalTerms.map((t, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-lg p-4 bg-white hover:border-slate-300 transition-colors"
                    >
                      <div className="text-sm font-bold text-slate-900 mb-1 flex items-center justify-between">
                        <span>{t.term}</span>
                        <span className="text-[11px] text-blue-600 font-mono font-medium">TERM #{idx + 1}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 mb-2 leading-relaxed">
                        {t.definition}
                      </p>
                      <div className="bg-slate-50 p-2.5 rounded border border-slate-100 text-xs text-slate-600">
                        <span className="font-semibold text-slate-800">실무·면접 팁: </span>
                        <span>{t.practicalNote}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 7: 관련 직무와 해당 기사의 연결점 */}
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-3">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <h3>05. 관련 직무와 해당 기사의 연결점 (Job Alignment)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {article.analysis?.jobConnections.map((job, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-lg p-4 bg-white flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-blue-700 mb-1.5 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                          <span>{job.role}</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed mb-3">
                          {job.connection}
                        </p>
                      </div>
                      <div className="pt-2.5 border-t border-slate-100 text-[11px] text-slate-600">
                        <span className="font-semibold text-slate-800 block mb-0.5">요구 핵심 역량</span>
                        <span className="text-slate-500">{job.requiredSkill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 8: 면접에서 활용할 수 있는 질문 및 답변 가이드 */}
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-3">
                  <HelpCircle className="w-4 h-4 text-blue-600" />
                  <h3>06. 실전 면접 예상 질문 및 답변 전략</h3>
                </div>
                <div className="space-y-4">
                  {article.analysis?.interviewQuestions.map((q, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 border border-slate-200 rounded-lg p-4 sm:p-5"
                    >
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-2 leading-snug">
                        {q.question}
                      </h4>
                      <div className="bg-white border border-slate-200/80 rounded p-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <span className="font-bold text-blue-700 block mb-1">
                          답변 가이드 포인트:
                        </span>
                        {q.answerTip}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Section 9: 원문 기사 링크 (실제 보도 기사 직결) */}
          <div className="pt-6 border-t border-slate-200">
            <div className="bg-slate-50 border border-slate-200/90 rounded-lg p-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                    <span>07. 언론사 공식 보도 원문 (Verified Source)</span>
                  </div>
                  <div className="text-xs text-slate-600 space-y-0.5">
                    <p>
                      <strong>출처 매체:</strong> {article.source} · <strong>보도 일자:</strong> {article.publishedAt}
                    </p>
                    <p className="font-mono text-slate-400 break-all text-[11px]">
                      {article.sourceUrl}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-2xs"
                  >
                    <span>언론사 원문 기사 열기</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`https://search.naver.com/search.naver?where=news&query=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-colors"
                    title="포털에서 관련 후속 기사 및 전재 기사 검색"
                  >
                    <span>네이버 뉴스 검색</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Close Action */}
        <div className="px-6 py-3.5 bg-slate-100 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            Industry Insight 분석 프레임워크 v1.0
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
