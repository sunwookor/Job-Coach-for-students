import React, { useState } from 'react';
import { ArrowRight, Building, CheckCircle2, ChevronRight, Compass, Search, Tag } from 'lucide-react';
import { COMPANIES_DATA } from '../data/companies';
import { CompanyInfo, IndustryType } from '../types';

interface CompanyDirectorySectionProps {
  onSelectCompanyFilter: (companyName: string) => void;
  onClose?: () => void;
}

export const CompanyDirectorySection: React.FC<CompanyDirectorySectionProps> = ({
  onSelectCompanyFilter,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<IndustryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCompanies = COMPANIES_DATA.filter((comp) => {
    const matchesIndustry = activeTab === 'all' || comp.industry === activeTab;
    const matchesSearch =
      searchQuery === '' ||
      comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.coreBusiness.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.hiringFocus2026.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesIndustry && matchesSearch;
  });

  return (
    <section className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 sm:p-8 my-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mb-1">
            <Compass className="w-4 h-4" />
            <span>2026 제조 대기업 채용 포커스</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans">
            산업별 17개 핵심 기업 디렉터리 & 직무 가이드
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            기업을 클릭하면 해당 기업의 최신 산업 동향 및 실전 면접 인사이트 피드로 즉시 이동합니다.
          </p>
        </div>

        {/* Industry Switcher Buttons & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="기업명, 직무, 기술 검색..."
              className="pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg w-full sm:w-48 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-2.5 py-1 text-xs font-semibold rounded ${
                activeTab === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              전체
            </button>
            <button
              onClick={() => setActiveTab('automotive')}
              className={`px-2.5 py-1 text-xs font-semibold rounded ${
                activeTab === 'automotive' ? 'bg-blue-600 text-white' : 'text-slate-600'
              }`}
            >
              자동차 ({COMPANIES_DATA.filter((c) => c.industry === 'automotive').length})
            </button>
            <button
              onClick={() => setActiveTab('heavy')}
              className={`px-2.5 py-1 text-xs font-semibold rounded ${
                activeTab === 'heavy' ? 'bg-blue-600 text-white' : 'text-slate-600'
              }`}
            >
              중공업 ({COMPANIES_DATA.filter((c) => c.industry === 'heavy').length})
            </button>
            <button
              onClick={() => setActiveTab('steel')}
              className={`px-2.5 py-1 text-xs font-semibold rounded ${
                activeTab === 'steel' ? 'bg-blue-600 text-white' : 'text-slate-600'
              }`}
            >
              철강 ({COMPANIES_DATA.filter((c) => c.industry === 'steel').length})
            </button>
          </div>
        </div>
      </div>

      {/* Company Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
        {filteredCompanies.map((comp) => (
          <div
            key={comp.id}
            className="border border-slate-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between bg-slate-50/40"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    {comp.name}
                    {comp.stockTicker && (
                      <span className="text-[10px] font-mono text-slate-400 font-normal">
                        {comp.stockTicker}
                      </span>
                    )}
                  </h3>
                  <p className="text-[11px] text-slate-500">{comp.englishName}</p>
                </div>
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                    comp.industry === 'automotive'
                      ? 'bg-blue-100 text-blue-700'
                      : comp.industry === 'heavy'
                      ? 'bg-cyan-100 text-cyan-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {comp.industry === 'automotive' ? '자동차' : comp.industry === 'heavy' ? '중공업' : '철강'}
                </span>
              </div>

              <div className="text-xs text-slate-700 mb-3 leading-relaxed">
                <span className="font-semibold text-slate-800 block mb-0.5">핵심 사업 분야</span>
                <p className="line-clamp-2">{comp.coreBusiness}</p>
              </div>

              {/* 2026 Hiring Focus */}
              <div className="bg-white border border-slate-200/80 rounded p-2.5 mb-3 text-xs">
                <span className="font-bold text-blue-800 block mb-1">
                  2026 채용 및 기술 포커스
                </span>
                <p className="text-slate-600 text-[11px] leading-relaxed line-clamp-2">
                  {comp.hiringFocus2026}
                </p>
              </div>

              {/* Target Job Roles */}
              <div className="text-[11px] text-slate-500 mb-2">
                <span className="font-medium text-slate-700 block mb-1">주요 타깃 직무:</span>
                <div className="flex flex-wrap gap-1">
                  {comp.targetJobs.map((j, i) => (
                    <span key={i} className="text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">
                      {j}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectCompanyFilter(comp.name)}
              className="mt-4 pt-3 border-t border-slate-200/70 w-full text-left text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center justify-between group"
            >
              <span>{comp.name} 관련 뉴스 및 분석 피드</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
