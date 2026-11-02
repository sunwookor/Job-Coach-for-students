import React from 'react';
import { ArrowUpRight, Bookmark, Building2, CheckCircle2, ChevronRight, Clock, ExternalLink, Sparkles } from 'lucide-react';
import { NewsArticle } from '../types';

interface NewsCardProps {
  article: NewsArticle;
  onSelect: (article: NewsArticle) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  article,
  onSelect,
  isBookmarked,
  onToggleBookmark,
}) => {
  const getIndustryBadge = (ind: NewsArticle['industry']) => {
    switch (ind) {
      case 'automotive':
        return { label: '자동차', color: 'text-blue-700 font-semibold' };
      case 'heavy':
        return { label: '중공업', color: 'text-cyan-700 font-semibold' };
      case 'steel':
        return { label: '철강', color: 'text-amber-800 font-semibold' };
    }
  };

  const badge = getIndustryBadge(article.industry);

  return (
    <article
      onClick={() => onSelect(article)}
      className="group bg-white rounded-lg border border-slate-200/90 hover:border-blue-400/80 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      <div className="p-5 sm:p-6">
        {/* Unboxed Metadata Line (No Pill Enclosures) */}
        <div className="flex items-center justify-between gap-3 text-xs text-slate-500 mb-2.5">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className={badge.color}>{badge.label}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="font-medium text-slate-700">{article.source}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="tabular-nums">{article.publishedAt}</span>
          </div>

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={(e) => onToggleBookmark(article.id, e)}
            className="p-1.5 -mr-1.5 text-slate-400 hover:text-amber-500 rounded-md transition-colors"
            title={isBookmarked ? '스크랩 취소' : '스크랩 저장'}
            aria-label={isBookmarked ? '스크랩 취소' : '스크랩 저장'}
          >
            <Bookmark
              className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-500' : ''}`}
            />
          </button>
        </div>

        {/* Article Headline */}
        <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2 mb-2 font-sans">
          {article.title}
        </h2>

        {/* Target Companies Strip */}
        <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-3 overflow-hidden text-ellipsis whitespace-nowrap">
          <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-400 shrink-0">관련 기업:</span>
          <span className="font-medium text-slate-800">
            {article.companies.join(', ')}
          </span>
        </div>

        {/* Article Summary */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {article.summary}
        </p>

        {/* Job Seeker Takeaway Callout (Key Value Prop) */}
        <div className="bg-slate-50 border border-slate-200/70 rounded-md p-3 mb-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>취업준비생 관점 시사점</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed line-clamp-2">
            {article.jobSeekerImplication}
          </p>
        </div>

        {/* Keywords and Relevant Jobs Line */}
        <div className="space-y-1.5 text-xs">
          {/* Keywords as clean typographic list */}
          <div className="flex items-center gap-1.5 text-slate-500 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="text-slate-400 shrink-0">핵심 키워드:</span>
            <span className="text-slate-700 font-medium truncate">
              {article.keywords.join(' · ')}
            </span>
          </div>

          {/* Relevant Jobs */}
          <div className="flex items-center gap-1.5 text-slate-500 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="text-slate-400 shrink-0">연관 직무:</span>
            <span className="text-blue-700 font-medium truncate">
              {article.relevantJobs.join(' / ')}
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer: Analysis Status & Data Collection Timestamp */}
      <div className="px-5 sm:px-6 py-3 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <div className="flex items-center gap-1.5">
          {article.hasAnalysis ? (
            <span className="flex items-center gap-1 text-blue-700 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span>직무·면접 심층 분석</span>
            </span>
          ) : (
            <span className="text-slate-400">기본 기사 요약</span>
          )}
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="font-mono text-slate-400 hidden sm:inline">
            수집: {article.collectedAt}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Direct External Link to Actual News */}
          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-slate-500 hover:text-blue-700 hover:underline px-1.5 py-0.5 rounded transition-colors"
            title="언론사 원문 기사 새 탭에서 열기"
          >
            <span>원문</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <div className="flex items-center gap-1 text-blue-600 group-hover:text-blue-800 font-medium ml-1">
            <span>분석 보기</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </article>
  );
};
