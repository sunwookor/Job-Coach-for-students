import React from 'react';
import { ArrowUpDown, Check, Filter, RotateCcw, Search, Sparkles, X } from 'lucide-react';
import { IndustryType, JobRoleType } from '../types';

interface FilterBarProps {
  currentIndustry: IndustryType;
  onSelectIndustry: (ind: IndustryType) => void;
  selectedCompany: string;
  onSelectCompany: (company: string) => void;
  selectedJobRole: JobRoleType;
  onSelectJobRole: (role: JobRoleType) => void;
  keyword: string;
  onChangeKeyword: (kw: string) => void;
  sortBy: 'latest' | 'oldest';
  onToggleSort: () => void;
  onlyAnalyzed: boolean;
  onToggleOnlyAnalyzed: () => void;
  onResetFilters: () => void;
  totalFilteredCount: number;
}

const JOB_ROLES: JobRoleType[] = [
  'all',
  '생산기술',
  'R&D / 설계',
  '품질관리 / 보증',
  '구매 / SCM',
  '사업기획 / 영업',
];

const COMPANIES_BY_INDUSTRY: Record<string, string[]> = {
  all: [
    '현대자동차',
    '기아',
    '현대모비스',
    'HD현대중공업',
    '한화오션',
    '삼성중공업',
    '두산에너빌리티',
    'POSCO',
    '현대제철',
    'HL만도',
    '세아제강',
  ],
  automotive: [
    '현대자동차',
    '기아',
    '현대모비스',
    '현대트랜시스',
    '현대위아',
    'HL만도',
  ],
  heavy: [
    'HD현대중공업',
    'HD현대미포',
    'HD현대일렉트릭',
    '삼성중공업',
    '한화오션',
    '두산에너빌리티',
  ],
  steel: [
    'POSCO',
    '현대제철',
    '동국제강',
    '세아베스틸',
    '세아제강',
  ],
};

export const FilterBar: React.FC<FilterBarProps> = ({
  currentIndustry,
  onSelectIndustry,
  selectedCompany,
  onSelectCompany,
  selectedJobRole,
  onSelectJobRole,
  keyword,
  onChangeKeyword,
  sortBy,
  onToggleSort,
  onlyAnalyzed,
  onToggleOnlyAnalyzed,
  onResetFilters,
  totalFilteredCount,
}) => {
  const availableCompanies = COMPANIES_BY_INDUSTRY[currentIndustry] || COMPANIES_BY_INDUSTRY.all;

  const isAnyFilterActive =
    currentIndustry !== 'all' ||
    selectedCompany !== 'all' ||
    selectedJobRole !== 'all' ||
    keyword.trim() !== '' ||
    onlyAnalyzed;

  return (
    <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 space-y-3">
        {/* Row 1: Search Input & Industry Segmented Tabs & Sort */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Industry Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg shrink-0 overflow-x-auto">
            <button
              onClick={() => {
                onSelectIndustry('all');
                onSelectCompany('all');
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap shrink-0 ${
                currentIndustry === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              전체 산업
            </button>
            <button
              onClick={() => {
                onSelectIndustry('automotive');
                onSelectCompany('all');
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap shrink-0 ${
                currentIndustry === 'automotive'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              자동차
            </button>
            <button
              onClick={() => {
                onSelectIndustry('heavy');
                onSelectCompany('all');
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap shrink-0 ${
                currentIndustry === 'heavy'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              중공업
            </button>
            <button
              onClick={() => {
                onSelectIndustry('steel');
                onSelectCompany('all');
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap shrink-0 ${
                currentIndustry === 'steel'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              철강
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={keyword}
              onChange={(e) => onChangeKeyword(e.target.value)}
              placeholder="기업명, 핵심 기술(SDV, HyREX, 암모니아, 혼류생산), 면접 키워드 검색..."
              className="w-full pl-9 pr-9 py-2 text-xs sm:text-sm bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-slate-900 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
            />
            {keyword && (
              <button
                onClick={() => onChangeKeyword('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                title="검색어 지우기"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort & Analysis Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onToggleOnlyAnalyzed}
              className={`px-3 py-2 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                onlyAnalyzed
                  ? 'bg-blue-50 border-blue-300 text-blue-700'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>심층 분석 기사만</span>
              {onlyAnalyzed && <Check className="w-3.5 h-3.5 ml-0.5 text-blue-600" />}
            </button>

            <button
              onClick={onToggleSort}
              className="px-3 py-2 text-xs font-medium bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
              title="정렬 변경"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
              <span>{sortBy === 'latest' ? '최신순' : '과거순'}</span>
            </button>

            {isAnyFilterActive && (
              <button
                onClick={onResetFilters}
                className="p-2 text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                title="모든 필터 초기화"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Row 2: Secondary Dropdowns & Quick Selectors (Target Company & Target Job Role) */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100 text-xs">
          {/* Target Job Role Filter */}
          <div className="flex items-center gap-1 overflow-x-auto py-1">
            <span className="text-slate-400 font-medium mr-1 shrink-0">직무 필터:</span>
            {JOB_ROLES.map((role) => (
              <button
                key={role}
                onClick={() => onSelectJobRole(role)}
                className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap shrink-0 text-xs ${
                  selectedJobRole === role
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {role === 'all' ? '전체 직무' : role}
              </button>
            ))}
          </div>

          <span className="hidden sm:inline h-4 w-[1px] bg-slate-200 mx-1"></span>

          {/* Company Quick Selector Dropdown / Tags */}
          <div className="flex items-center gap-1.5 flex-1 min-w-[200px] overflow-x-auto py-1">
            <span className="text-slate-400 font-medium shrink-0">기업 선택:</span>
            <button
              onClick={() => onSelectCompany('all')}
              className={`px-2 py-0.5 rounded text-xs transition-colors whitespace-nowrap shrink-0 ${
                selectedCompany === 'all'
                  ? 'bg-blue-100 text-blue-800 font-semibold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              전체 기업
            </button>
            {availableCompanies.slice(0, 7).map((comp) => (
              <button
                key={comp}
                onClick={() => onSelectCompany(comp)}
                className={`px-2 py-0.5 rounded text-xs transition-colors whitespace-nowrap shrink-0 ${
                  selectedCompany === comp
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {comp}
              </button>
            ))}
          </div>

          {/* Active Result Count */}
          <div className="ml-auto text-slate-500 font-mono text-xs tabular-nums shrink-0">
            총 <strong>{totalFilteredCount}</strong>건의 기사
          </div>
        </div>
      </div>
    </div>
  );
};
