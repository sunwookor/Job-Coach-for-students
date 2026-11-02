import { COMPANIES_DATA } from '../data/companies';
import { INDUSTRY_REPORTS } from '../data/industryReports';
import { MOCK_NEWS } from '../data/mockNews';
import { CompanyInfo, IndustryReport, IndustryType, JobRoleType, NewsArticle } from '../types';

export interface FilterOptions {
  industry?: IndustryType;
  company?: string;
  jobRole?: JobRoleType;
  keyword?: string;
  sortBy?: 'latest' | 'oldest';
  onlyAnalyzed?: boolean;
}

const BOOKMARK_STORAGE_KEY = 'industry_insight_bookmarks_v1';

export class NewsService {
  /**
   * Fetch all news articles with filtering and sorting applied.
   * Modular design allows seamless replacement with remote REST / RSS endpoint.
   */
  static async getArticles(filters: FilterOptions = {}): Promise<NewsArticle[]> {
    // Simulate real async fetch
    await new Promise((resolve) => setTimeout(resolve, 60));

    let results = [...MOCK_NEWS];

    // Filter by industry
    if (filters.industry && filters.industry !== 'all') {
      results = results.filter((item) => item.industry === filters.industry);
    }

    // Filter by company
    if (filters.company && filters.company !== 'all') {
      results = results.filter((item) => item.companies.includes(filters.company!));
    }

    // Filter by job role
    if (filters.jobRole && filters.jobRole !== 'all') {
      results = results.filter((item) => item.relevantJobs.includes(filters.jobRole!));
    }

    // Filter by only analyzed if requested
    if (filters.onlyAnalyzed) {
      results = results.filter((item) => item.hasAnalysis);
    }

    // Search query matching title, summary, keywords, companies, or analysis
    if (filters.keyword && filters.keyword.trim() !== '') {
      const q = filters.keyword.toLowerCase().trim();
      results = results.filter((item) => {
        const inTitle = item.title.toLowerCase().includes(q);
        const inSummary = item.summary.toLowerCase().includes(q);
        const inCompanies = item.companies.some((c) => c.toLowerCase().includes(q));
        const inKeywords = item.keywords.some((k) => k.toLowerCase().includes(q));
        const inJobs = item.relevantJobs.some((j) => j.toLowerCase().includes(q));
        const inAnalysis = item.analysis
          ? item.analysis.coreSummary.toLowerCase().includes(q) ||
            item.analysis.technicalTerms.some((t) => t.term.toLowerCase().includes(q))
          : false;

        return inTitle || inSummary || inCompanies || inKeywords || inJobs || inAnalysis;
      });
    }

    // Sorting
    if (filters.sortBy === 'oldest') {
      results.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
    } else {
      // Default: latest
      results.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    }

    return results;
  }

  /**
   * Get single article by ID
   */
  static async getArticleById(id: string): Promise<NewsArticle | null> {
    const article = MOCK_NEWS.find((item) => item.id === id);
    return article || null;
  }

  /**
   * Fetch company list with optional industry filter
   */
  static getCompanies(industry?: IndustryType): CompanyInfo[] {
    if (!industry || industry === 'all') {
      return COMPANIES_DATA;
    }
    return COMPANIES_DATA.filter((c) => c.industry === industry);
  }

  /**
   * Fetch in-depth reports
   */
  static getReports(industry?: IndustryType): IndustryReport[] {
    if (!industry || industry === 'all') {
      return INDUSTRY_REPORTS;
    }
    return INDUSTRY_REPORTS.filter((r) => r.industry === industry);
  }

  /**
   * LocalStorage Bookmark utilities
   */
  static getBookmarks(): string[] {
    try {
      const stored = localStorage.getItem(BOOKMARK_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  static toggleBookmark(articleId: string): boolean {
    try {
      const current = this.getBookmarks();
      let updated: string[];
      let isSaved = false;

      if (current.includes(articleId)) {
        updated = current.filter((id) => id !== articleId);
        isSaved = false;
      } else {
        updated = [...current, articleId];
        isSaved = true;
      }

      localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(updated));
      return isSaved;
    } catch {
      return false;
    }
  }

  static isBookmarked(articleId: string): boolean {
    const bookmarks = this.getBookmarks();
    return bookmarks.includes(articleId);
  }
}
