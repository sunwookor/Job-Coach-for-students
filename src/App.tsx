import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Compass,
  FileText,
  Filter,
  Flame,
  HelpCircle,
  Layers,
  RotateCcw,
  Search,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { CompanyDirectorySection } from './components/CompanyDirectorySection';
import { FilterBar } from './components/FilterBar';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { IndustryNavHero } from './components/IndustryNavHero';
import { IndustryReportModal } from './components/IndustryReportModal';
import { NewsCard } from './components/NewsCard';
import { NewsDetailModal } from './components/NewsDetailModal';
import { ScrapDrawer } from './components/ScrapDrawer';
import { MOCK_NEWS } from './data/mockNews';
import { NewsService } from './services/newsService';
import { IndustryType, JobRoleType, NewsArticle } from './types';

export default function App() {
  // Navigation and Filter States
  const [currentIndustry, setCurrentIndustry] = useState<IndustryType>('all');
  const [selectedCompany, setSelectedCompany] = useState<string>('all');
  const [selectedJobRole, setSelectedJobRole] = useState<JobRoleType>('all');
  const [keyword, setKeyword] = useState<string>('');
  const [sortBy, setSortBy] = useState<'latest' | 'oldest'>('latest');
  const [onlyAnalyzed, setOnlyAnalyzed] = useState<boolean>(false);

  // Active view tab
  const [showCompanySection, setShowCompanySection] = useState<boolean>(false);

  // Modals & Drawers
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);
  const [isScrapDrawerOpen, setIsScrapDrawerOpen] = useState<boolean>(false);

  // Bookmarks
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  // Articles state
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Load initial bookmarks
  useEffect(() => {
    setBookmarks(NewsService.getBookmarks());
  }, []);

  // Fetch articles based on filters
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    NewsService.getArticles({
      industry: currentIndustry,
      company: selectedCompany,
      jobRole: selectedJobRole,
      keyword: keyword,
      sortBy: sortBy,
      onlyAnalyzed: onlyAnalyzed,
    }).then((data) => {
      if (isMounted) {
        setArticles(data);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [currentIndustry, selectedCompany, selectedJobRole, keyword, sortBy, onlyAnalyzed]);

  // Industry Statistics
  const stats = useMemo(() => {
    const auto = MOCK_NEWS.filter((n) => n.industry === 'automotive').length;
    const heavy = MOCK_NEWS.filter((n) => n.industry === 'heavy').length;
    const steel = MOCK_NEWS.filter((n) => n.industry === 'steel').length;
    return {
      autoCount: auto,
      heavyCount: heavy,
      steelCount: steel,
      totalCount: MOCK_NEWS.length,
    };
  }, []);

  // Saved Articles for Scrapbook
  const savedArticlesList = useMemo(() => {
    return MOCK_NEWS.filter((n) => bookmarks.includes(n.id));
  }, [bookmarks]);

  // Handle bookmark toggle
  const handleToggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    NewsService.toggleBookmark(id);
    setBookmarks(NewsService.getBookmarks());
  };

  // Reset all filters
  const handleResetFilters = () => {
    setCurrentIndustry('all');
    setSelectedCompany('all');
    setSelectedJobRole('all');
    setKeyword('');
    setSortBy('latest');
    setOnlyAnalyzed(false);
  };

  // Industry Select Handler
  const handleSelectIndustry = (ind: IndustryType) => {
    setCurrentIndustry(ind);
    setSelectedCompany('all');
    setShowCompanySection(false);
  };

  // Company Select from Directory
  const handleSelectCompanyFromDirectory = (companyName: string) => {
    setSelectedCompany(companyName);
    setShowCompanySection(false);
    // Smooth scroll down to news list
    const el = document.getElementById('news-feed-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Executive Header */}
      <Header
        currentIndustry={currentIndustry}
        onSelectIndustry={handleSelectIndustry}
        onOpenScrap={() => setIsScrapDrawerOpen(true)}
        scrapCount={bookmarks.length}
        onOpenReport={() => setIsReportModalOpen(true)}
        onOpenCompanyTab={() => setShowCompanySection(!showCompanySection)}
      />

      <main className="flex-1">
        {/* Industry Nav Hero & Visual 3-Pillar Switcher */}
        <IndustryNavHero
          currentIndustry={currentIndustry}
          onSelectIndustry={handleSelectIndustry}
          stats={stats}
        />

        {/* Filter Bar */}
        <FilterBar
          currentIndustry={currentIndustry}
          onSelectIndustry={handleSelectIndustry}
          selectedCompany={selectedCompany}
          onSelectCompany={setSelectedCompany}
          selectedJobRole={selectedJobRole}
          onSelectJobRole={setSelectedJobRole}
          keyword={keyword}
          onChangeKeyword={setKeyword}
          sortBy={sortBy}
          onToggleSort={() => setSortBy(sortBy === 'latest' ? 'oldest' : 'latest')}
          onlyAnalyzed={onlyAnalyzed}
          onToggleOnlyAnalyzed={() => setOnlyAnalyzed(!onlyAnalyzed)}
          onResetFilters={handleResetFilters}
          totalFilteredCount={articles.length}
        />

        {/* Main Content Area */}
        <div id="news-feed-section" className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          {/* Company Directory Section (Collapsible / Toggleable) */}
          {showCompanySection && (
            <div className="mb-8">
              <CompanyDirectorySection
                onSelectCompanyFilter={handleSelectCompanyFromDirectory}
                onClose={() => setShowCompanySection(false)}
              />
            </div>
          )}

          {/* Section Title & Sub-Kicker */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span>
                  {currentIndustry === 'all'
                    ? '대한민국 제조업 3대 축 실시간 분석 피드'
                    : currentIndustry === 'automotive'
                    ? '자동차 산업 심층 분석 피드'
                    : currentIndustry === 'heavy'
                    ? '중공업 & 조선·에너지 산업 분석 피드'
                    : '철강 & 첨단 금속소재 산업 분석 피드'}
                </span>
                {selectedCompany !== 'all' && (
                  <>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-slate-900 font-bold bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                      {selectedCompany} 필터링 중
                    </span>
                  </>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans tracking-tight">
                {currentIndustry === 'all'
                  ? '최신 산업 뉴스 & 직무 연결 인사이트'
                  : currentIndustry === 'automotive'
                  ? '자동차·모빌리티 산업 기술 동향 및 채용 이슈'
                  : currentIndustry === 'heavy'
                  ? '중공업·조선·원전 산업 동향 및 실전 면접 분석'
                  : '철강·탄소중립 소재 산업 동향 및 공정 기술 분석'}
              </h2>
            </div>

            {/* Quick Helper Button to open reports */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsReportModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-2xs whitespace-nowrap"
              >
                <FileText className="w-3.5 h-3.5 text-blue-600" />
                <span>2026 심층 리포트 보기</span>
              </button>
            </div>
          </div>

          {/* News Cards Grid or Empty State */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg border border-slate-200 p-6 h-72 animate-pulse space-y-4"
                >
                  <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                  <div className="h-6 bg-slate-200 rounded w-4/5"></div>
                  <div className="h-4 bg-slate-100 rounded w-full"></div>
                  <div className="h-4 bg-slate-100 rounded w-2/3"></div>
                  <div className="h-16 bg-slate-100 rounded"></div>
                </div>
              ))}
            </div>
          ) : articles.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200 p-12 text-center max-w-lg mx-auto my-12 shadow-xs">
              <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 mb-1">
                조건에 맞는 산업 기사가 없습니다
              </h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                선택한 기업, 직무, 또는 검색어와 일치하는 뉴스가 없습니다. 필터 조건을 초기화하거나 검색어를 변경해 보세요.
              </p>
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>전체 필터 초기화</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  onSelect={(item) => setSelectedArticle(item)}
                  isBookmarked={bookmarks.includes(article.id)}
                  onToggleBookmark={handleToggleBookmark}
                />
              ))}
            </div>
          )}

          {/* Quick Company Directory Strip at bottom if not already toggled */}
          {!showCompanySection && (
            <div className="mt-12 p-6 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  17개 대한민국 대표 제조기업의 2026 채용 포커스가 궁금하신가요?
                </h4>
                <p className="text-xs text-slate-500">
                  현대차·기아·현대모비스·HD현대·삼성중·한화오션·두산에너빌리티·POSCO·현대제철 등 전 기업 디렉터리를 확인하세요.
                </p>
              </div>
              <button
                onClick={() => {
                  setShowCompanySection(true);
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shrink-0 flex items-center gap-1.5"
              >
                <Building2 className="w-4 h-4" />
                <span>기업별 디렉터리 펼치기</span>
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer
        onSelectIndustry={handleSelectIndustry}
        onOpenReport={() => setIsReportModalOpen(true)}
        onOpenCompanyTab={() => {
          setShowCompanySection(true);
          window.scrollTo({ top: 400, behavior: 'smooth' });
        }}
      />

      {/* News Detail Modal */}
      <NewsDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        isBookmarked={selectedArticle ? bookmarks.includes(selectedArticle.id) : false}
        onToggleBookmark={handleToggleBookmark}
      />

      {/* Industry Report In-Depth Modal */}
      <IndustryReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        defaultIndustry={currentIndustry}
      />

      {/* Saved Articles Scrap Drawer */}
      <ScrapDrawer
        isOpen={isScrapDrawerOpen}
        onClose={() => setIsScrapDrawerOpen(false)}
        savedArticles={savedArticlesList}
        onSelectArticle={(art) => setSelectedArticle(art)}
        onRemoveBookmark={handleToggleBookmark}
      />
    </div>
  );
}
