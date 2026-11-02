# Industry Insight (인더스트리 인사이트)

대한민국 취업 준비생을 위한 **자동차·중공업·철강** 3대 제조 산업 동향 및 실전 면접 인텔리전스 플랫폼입니다.

단순한 기사 나열 사이트가 아닌, **'산업 뉴스 → 핵심 내용 요약 → 산업적 파급효과 → 직무 연결 및 면접 질문 대비'**의 4단계 프레임워크를 제공합니다.

---

## 🌟 주요 기능

1. **3대 핵심 제조 산업 특화**:
   - **자동차 산업**: 현대자동차, 기아, 현대모비스, 현대트랜시스, 현대위아, HL만도
   - **중공업 산업**: HD현대중공업, HD현대미포, HD현대일렉트릭, 삼성중공업, 한화오션, 두산에너빌리티
   - **철강 산업**: POSCO, 현대제철, 동국제강, 세아베스틸, 세아제강

2. **구조화된 뉴스 분석 카드 및 상세 뷰 (9대 필수 영역)**:
   - 기사 제목, 출처 및 발행일, 데이터 수집 시각
   - 핵심 요약 (Core Summary)
   - 산업에 미치는 영향 (Industry Impact)
   - 관련 기업에 미치는 영향 (Company Impact)
   - 취업준비생 필수 기술·용어 사전 (Technical Glossary)
   - 직무별 연결점 (생산기술, R&D/설계, 품질관리/보증, 구매/SCM, 사업기획 등)
   - 실전 면접 예상 질문 및 답변 포인트 가이드
   - 언론사 원문 링크 연결

3. **스마트 검색 및 다차원 필터**:
   - 산업별 세그먼트 (전체 / 자동차 / 중공업 / 철강)
   - 17개 대표 기업별 필터링
   - 직무별 필터링 (생산기술, R&D, 품질 등)
   - 키워드 실시간 검색 및 최신순/과거순 정렬
   - 심층 분석 기사 필터링

4. **17개 기업 디렉터리 & 2026 채용 포커스**:
   - 기업별 핵심 사업 영역, 주요 제품군, 채용 집중 분야 조망

5. **2026 산업 심층 브리핑 리포트**:
   - SDV 전환과 혼류생산, K-조선 슈퍼사이클과 무탄소선, CBAM 탄소장벽과 수소환원제철(HyREX)

6. **면접 대비 스크랩북 (Scrapbook)**:
   - 관심 기사를 로컬 스토리지에 저장하여 면접 직전 복습 가능

---

## 🛠️ 기술 스택

- **Framework**: React 19 / Vite 6 (Next.js App Router 변환 호환 구조)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Architecture**: 모듈형 서비스 계층 (`src/services/newsService.ts`), 향후 RSS 및 외부 뉴스 API 연동 확장 지원

---

## 🚀 로컬 실행 방법 (Local Development)

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행 (포트 3000)
npm run dev

# 3. 브라우저에서 확인
http://localhost:3000
```

---

## 🌐 GitHub 업로드 및 Vercel 무료 배포 가이드

대학생 및 비전공자도 3분 만에 전 세계에 무료 배포할 수 있습니다.

### 1단계: GitHub에 코드 올리기

```bash
# Git 초기화 및 커밋
git init
git add .
git commit -m "feat: Industry Insight MVP 출시"

# GitHub에서 신규 Repository 생성 후 연결
git branch -M main
git remote add origin https://github.com/당신의아이디/industry-insight.git
git push -u origin main
```

### 2단계: Vercel 배포 (원클릭)

1. [Vercel](https://vercel.com)에 접속하여 GitHub 계정으로 로그인합니다.
2. 대시보드 우측 상단의 **[Add New...] → [Project]**를 클릭합니다.
3. 방금 업로드한 `industry-insight` 저장소를 선택하고 **[Import]**를 클릭합니다.
4. **Framework Preset**: `Vite` (자동 감지됨)
5. **[Deploy]** 버튼을 클릭하면 약 1분 후 고유 웹사이트 주소(`https://industry-insight-xxx.vercel.app`)로 즉시 배포가 완료됩니다!

---

## 📁 디렉터리 구조

```
├── public/                 # 정적 리소스
├── src/
│   ├── assets/             # 고품질 산업 다큐멘터리 사진
│   ├── components/         # UI 컴포넌트
│   │   ├── Header.tsx                 # 상단 탑바 (3구역 원칙 준수)
│   │   ├── Footer.tsx                 # 리서치 플랫폼 푸터
│   │   ├── IndustryNavHero.tsx        # 3대 산업 비주얼 스위처 & 프레임워크
│   │   ├── FilterBar.tsx              # 다차원 검색/필터 바
│   │   ├── NewsCard.tsx               # 11개 필드 뉴스 카드
│   │   ├── NewsDetailModal.tsx        # 9개 영역 심층 분석 모달
│   │   ├── CompanyDirectorySection.tsx# 17개 기업 디렉터리
│   │   ├── IndustryReportModal.tsx    # 2026 산업 리포트 룸
│   │   └── ScrapDrawer.tsx            # 면접 스크랩북
│   ├── data/               # 분석 데이터셋
│   │   ├── mockNews.ts                # 실전 산업 뉴스 및 직무 분석 데이터
│   │   ├── companies.ts               # 17개 제조 기업 프로필
│   │   └── industryReports.ts         # 3대 산업 심층 리포트
│   ├── services/           # 데이터 서비스 레이어
│   │   └── newsService.ts             # 필터, 검색, 정렬 및 스크랩북 관리
│   ├── types/              # TypeScript 타입 선언
│   │   └── index.ts
│   ├── App.tsx             # 메인 애플리케이션
│   ├── main.tsx
│   └── index.css           # 글로벌 스타일 & 폰트 세팅
├── .env.example            # 환경 변수 예시
├── metadata.json           # 앱 메타데이터
├── package.json
└── vite.config.ts
```

---

## 📄 라이선스 & 면책 조항

본 웹사이트의 분석 내용은 취업 준비생의 산업 이해도 제고 및 교육·면접 대비를 목적으로 작성되었습니다.
기사 저작권은 각 언론사에 귀속되며, 본 서비스는 원문 링크를 직접 제공합니다.
