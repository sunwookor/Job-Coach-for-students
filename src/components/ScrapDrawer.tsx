import React from 'react';
import { ArrowRight, Bookmark, Building2, Trash2, X } from 'lucide-react';
import { NewsArticle } from '../types';

interface ScrapDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: NewsArticle[];
  onSelectArticle: (article: NewsArticle) => void;
  onRemoveBookmark: (id: string, e: React.MouseEvent) => void;
}

export const ScrapDrawer: React.FC<ScrapDrawerProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onSelectArticle,
  onRemoveBookmark,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div
        className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="font-bold text-base">내 면접 스크랩북</span>
            <span className="text-xs bg-slate-800 px-2 py-0.5 rounded-full font-mono text-slate-300">
              {savedArticles.length}개 저장
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Saved List */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          {savedArticles.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              <Bookmark className="w-10 h-10 mx-auto mb-3 text-slate-300 stroke-[1.5]" />
              <p className="font-semibold text-slate-700 text-sm mb-1">
                저장된 기사가 없습니다
              </p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                뉴스 카드의 북마크 아이콘을 클릭하여 관심 있는 산업 동향과 면접 질문을 스크랩해 두세요.
              </p>
            </div>
          ) : (
            savedArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => {
                  onSelectArticle(art);
                  onClose();
                }}
                className="p-4 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-400 hover:shadow-xs transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                  <span className="font-semibold text-blue-600">
                    {art.industry === 'automotive'
                      ? '자동차'
                      : art.industry === 'heavy'
                      ? '중공업'
                      : '철강'}
                  </span>
                  <span>{art.publishedAt}</span>
                </div>

                <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700 line-clamp-2 leading-snug mb-2">
                  {art.title}
                </h4>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200/60">
                  <span className="truncate max-w-[200px]">
                    {art.companies.join(', ')}
                  </span>

                  <button
                    onClick={(e) => onRemoveBookmark(art.id, e)}
                    className="p-1 text-slate-400 hover:text-red-500 transition-colors"
                    title="스크랩 삭제"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between shrink-0">
          <span>브라우저 로컬 저장소에 안전하게 보관됩니다.</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 font-semibold text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-100 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
