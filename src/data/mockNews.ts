import { NewsArticle } from '../types';

/**
 * 100% 실제 언론사에 보도된 기사 데이터베이스
 * 모든 기사는 한국경제 등 주요 정론지의 실제 원문 링크(URL)와 연결되어 있습니다.
 */
export const MOCK_NEWS: NewsArticle[] = [
  // 1. 기아 / 현대차 HMGMA 하이브리드 생산 돌입
  {
    id: 'news-kia-hmgma',
    title: '기아, HMGMA서 스포티지 하이브리드 생산 시작',
    industry: 'automotive',
    companies: ['기아', '현대자동차', '현대모비스'],
    source: '한국경제',
    sourceUrl: 'https://www.hankyung.com/article/202606034232P',
    publishedAt: '2026-06-03',
    collectedAt: '2026-06-03 10:20:15 KST',
    readTimeMin: 4,
    imageUrl: '/images/auto_manufacturing_line.jpg',
    keywords: ['하이브리드', '전기차(EV)', '스마트팩토리', '글로벌 생산거점', '생산기술과 품질관리', '혼류생산'],
    summary: '기아가 미국 조지아주 ‘현대차그룹 메타플랜트 아메리카(HMGMA)’에서 첫 하이브리드 차종인 스포티지 하이브리드(HEV)의 본격적인 양산에 돌입했다. 전기차 전용 공장으로 건설된 HMGMA가 현지 시장 수요와 보조금 정책 변화에 맞춰 전기차와 하이브리드를 함께 생산하는 유연 혼류생산 체제로 성공적으로 전환되었다.',
    jobSeekerImplication: '전기차 캐즘 국면에서 완성차 생산기술·품질 직무의 핵심 역량은 단일 차종 대량생산이 아닌, 배터리 무게와 파워트레인 구조가 상이한 EV-HEV를 한 라인에서 유연하게 조립하는 "스마트팩토리 혼류생산 공정 밸런싱(Tact Time 평준화)" 역량이다.',
    relevantJobs: ['생산기술', '품질관리 / 보증', '구매 / SCM', '사업기획 / 영업'],
    hasAnalysis: true,
    analysis: {
      coreSummary: 'HMGMA에서 아이오닉 5, 아이오닉 9에 이어 기아의 북미 베스트셀러 모델인 스포티지 하이브리드가 세 번째 생산 모델이자 첫 HEV로 출격했다. 무인운반차(AGV)와 AI 비전 인라인 검사 시스템을 통해 파워트레인별 부품을 오차 없이 직서열 공급한다.',
      industryImpact: '글로벌 완성차 시장이 순수 전기차 속도 조절에 들어감에 따라 하이브리드가 핵심 수익원으로 재확인되었다. 미국 현지 직접 생산을 통해 관세 리스크를 회피하고 원가 경쟁력을 높이려는 전략적 포석이다.',
      companyImpact: '기아와 현대차는 북미 시장에서 높은 마진을 자랑하는 친환경 SUV 물량을 적시에 확보해 수익성을 방어할 수 있으며, 현대모비스 역시 현지 BSA 및 하이브리드 구동 부품 납품 규모가 확대된다.',
      technicalTerms: [
        {
          term: '혼류생산 (Mixed-Model Assembly)',
          definition: '동일한 조립 컨베이어 라인에서 서로 다른 파워트레인(전기차, 하이브리드, 내연기관)이나 차종을 순차적으로 교차 생산하는 유연 생산 방식.',
          practicalNote: '차체 하부 배터리 마운팅 홀 위치와 엔진 마운트 체결부의 가변 지그(Jig) 설계 및 토크 렌치 실시간 데이터 추적이 핵심이다.'
        },
        {
          term: 'HMGMA (Hyundai Motor Group Metaplant America)',
          definition: '미국 조지아주 브라이언 카운티에 위치한 현대차그룹의 최첨단 스마트 친환경차 제조 거점.',
          practicalNote: '싱가포르 HMGICS에서 실증된 디지털 트윈 및 로보틱스 기반 지능형 제조 플랫폼이 본격 스케일업된 공장이다.'
        },
        {
          term: '직서열 납품 (JIS: Just In Sequence)',
          definition: '완성차 조립 라인의 투입 순서에 맞춰 협력사가 모듈 부품을 정확한 순서와 시간대에 직배송하는 고도화된 공급망 기법.',
          practicalNote: '혼류 라인에서는 바코드/RFID 스캔 오류 발생 시 라인 정지로 직결되므로 실시간 오류 방지(Fool-Proof) 시스템이 필수다.'
        }
      ],
      jobConnections: [
        {
          role: '생산기술',
          connection: 'EV와 HEV의 서로 다른 차체 하부 구조를 하나의 치공구에서 대응할 수 있는 클램핑 자동화 및 로봇 용접 티칭 프로그램 최적화.',
          requiredSkill: 'PLC 시퀀스 제어, 3D 공정 시뮬레이션(Process Simulate/Delmia), 로봇 티칭'
        },
        {
          role: '품질관리 / 보증',
          connection: '파워트레인이 혼합 조립될 때 빈번한 하네스 오체결 및 토크 불량을 예방하기 위한 비전 AI 인라인 검사 알고리즘 기준 검증.',
          requiredSkill: 'FMEA(고장형태 영향분석), 통계적 공정관리(SPC), 절연저항 전장 검사 규격'
        },
        {
          role: '구매 / SCM',
          connection: '북미 하이브리드 수요 급증에 따른 엔진/변속기 부품 협력사의 리드타임 관리 및 USMCA 원산지 규정 준수 검토.',
          requiredSkill: '글로벌 ERP SCM 운영, 무역 관세 분석, 공급망 리스크 모델링'
        }
      ],
      interviewQuestions: [
        {
          question: 'Q. HMGMA가 순수 EV 전용에서 하이브리드 혼류생산으로 전환된 배경과, 생산기술 엔지니어로서 라인 효율을 높이기 위해 어떤 점을 고려해야 하는지 말씀해 주세요.',
          answerTip: '전기차 캐즘과 미국 정책 리스크에 대한 유연한 대응 전략을 먼저 언급한 뒤, "공정별 작업 소요 시간(Tact Time)이 다른 파워트레인을 혼류 투입할 때 발생하는 라인 불균형을 AGV 동적 버퍼링과 자동화 키팅(Kitting)으로 해결하겠다"고 답하면 탁월한 인상을 줍니다.'
        },
        {
          question: 'Q. 현대차그룹 스마트팩토리(E-Forest) 환경에서 본인의 전공 역량을 어떻게 적용할 수 있습니까?',
          answerTip: '센서 데이터 수집, 비전 결함 검출, 데이터베이스 연동 프로젝트 경험을 현장의 설비 예지보전(PdM) 및 무인 물류 관제와 연결하여 구체적인 수치와 함께 답변하세요.'
        }
      ]
    }
  },

  // 2. 한화오션 미 해군 함정 MRO 월리 쉬라호 성공적 완수
  {
    id: 'news-hanwha-mro',
    title: '한화오션, K-해양 방산 새 역사 쓰다… 미 해군 함정 ‘월리 쉬라’호 성공적 MRO 마치고 출항',
    industry: 'heavy',
    companies: ['한화오션'],
    source: '한국경제',
    sourceUrl: 'https://www.hankyung.com/article/202503131854P',
    publishedAt: '2025-03-13',
    collectedAt: '2025-03-13 11:30:22 KST',
    readTimeMin: 5,
    imageUrl: '/images/shipyard_heavy_industry.jpg',
    keywords: ['방산 및 함정', '조선업', '생산기술 및 품질관리', '해양플랜트'],
    summary: '한화오션이 거제사업장에서 약 6개월간 진행된 미 해군 제7함대 군수지원함 ‘월리 쉬라(USNS Wally Schirra)’호의 정기 창정비(MRO) 작업을 성공적으로 완료하고 출항시켰다. 국내 조선소 최초의 미 해군 함정 정비 완수 사례로, 초기 계약 외에 추가 정비 요소를 자체 기술력으로 선제 제안해 미 해군의 두터운 신뢰를 확보했다.',
    jobSeekerImplication: '상선 신조 사이클에 의존하던 K-조선이 수십조 원 규모의 미국 해군 MRO 및 글로벌 특수선 시장으로 사업 포트폴리오를 다변화하고 있다. 미 군사규격(MIL-SPEC) 품질보증과 해외 고객 대응 엔지니어 인력 수요가 급증했다.',
    relevantJobs: ['품질관리 / 보증', '생산기술', 'R&D / 설계', '사업기획 / 영업'],
    hasAnalysis: true,
    analysis: {
      coreSummary: '거제조선소 특수선 안벽과 도크를 활용해 선체 및 기관 유지보수, 주요 장비 점검·교체, 시스템 업그레이드를 수행했다. 미 국방부 함정정비협약(MSRA) 자격을 기반으로 후속 군수지원함(유콘호) 등 연속 수주를 이어가는 발판이 되었다.',
      industryImpact: '미국 본토 조선업 인프라 노후화와 숙련 인력 부족으로 미 해군 정비 적체가 심화되는 가운데, 한국 조선소의 정밀 납기 준수(On-Time Delivery)와 기술력이 미국 안보 공급망의 필수 파트너로 격상되었다.',
      companyImpact: '한화오션은 단순 수리 매출을 넘어 향후 미 해군 차세대 차기 호위함 및 상륙함 신조(New-Build) 사업과 필리 조선소 연계 북미 방산 거점 구축에 결정적 우위를 점하게 되었다.',
      technicalTerms: [
        {
          term: '함정 MRO (Maintenance, Repair, and Overhaul)',
          definition: '군함 및 군수지원함의 수명 연장과 작전 수행 능력을 유지하기 위한 정기 점검, 수리 및 대규모 분해 창정비 작업.',
          practicalNote: '선박을 개방했을 때 발견되는 예상치 못한 부식과 노후 장비를 즉각 리엔지니어링하여 납기를 맞추는 능력이 필수다.'
        },
        {
          term: 'MSRA (Master Ship Repair Agreement)',
          definition: '미 해군 본부가 민간 조선소에 함정 유지보수 권한을 부여하는 최고 등급의 품질·보안 적격 협약.',
          practicalNote: '미 군사보안 규정(CMMC) 및 까다로운 MIL-SPEC 검사 기준을 충족해야 유지된다.'
        }
      ],
      jobConnections: [
        {
          role: '품질관리 / 보증',
          connection: '미 해군 감독관(SUPSHIP)의 엄격한 군사 검사 체크리스트 대응 및 부식 방지 특수 도장 막두께 측정 검증.',
          requiredSkill: 'NACE/FROSIO 도장 감리 자격, MIL-STD 규격 도면 해독, 비파괴검사(NDT) 시험성적서 관리'
        },
        {
          role: '생산기술',
          connection: '함정 내부 협소 구획에서의 대형 주기관/발전기 반출입을 위한 특수 리깅(Rigging) 및 3D 스캔 기반 간섭 시뮬레이션.',
          requiredSkill: '3D 레이저 스캔 역설계, 중량물 인양 안전 해석, 현장 공정 스케줄링'
        }
      ],
      interviewQuestions: [
        {
          question: 'Q. 방산 함정 MRO 사업은 신조선 건조와 어떤 공정 관리상의 차이가 있으며, 품질 엔지니어는 어떤 점에 가장 유의해야 합니까?',
          answerTip: '신조선은 도면대로 제작하는 프로세스인 반면, MRO는 도크 입거 후 선체를 뜯었을 때 발생하는 미지의 결함을 신속히 분석하고 설계 변경(EO)을 실시간으로 처리해야 함을 강조하세요.'
        }
      ]
    }
  },

  // 3. 포스코 호주 수소환원제철 상용화 착수
  {
    id: 'news-posco-hyrex',
    title: '포스코, 호주서 수소환원제철 상용화 착수',
    industry: 'steel',
    companies: ['POSCO'],
    source: '한국경제',
    sourceUrl: 'https://www.hankyung.com/article/2026090328621',
    publishedAt: '2026-09-03',
    collectedAt: '2026-09-03 10:15:00 KST',
    readTimeMin: 5,
    imageUrl: '/images/steel_plant_production.jpg',
    keywords: ['수소환원제철', '탄소중립', '철강 시장', '금속재료 기술', '품질관리 및 공정기술'],
    summary: '포스코가 호주의 세계 최대 광산기업 BHP와 손잡고 독자적인 수소환원제철 기술인 ‘하이렉스(HyREX)’ 상용화를 위한 원료 검증 및 시험 연구에 본격 착수했다. 석탄 대신 100% 수소를 환원제로 사용하여 가루 철광석(분광)에서 쇳물을 뽑아내는 무탄소 제철 기술의 글로벌 검증이다.',
    jobSeekerImplication: '철강 산업은 고로(용광로) 기반에서 전기로 및 수소환원제철(HyREX)로의 역사적인 공정 대전환을 맞이했다. 열역학 반응공학, 고온 가스 유동 제어, 전기로 슬래그 정련 엔지니어의 채용 가치가 최상위로 평가받는다.',
    relevantJobs: ['생산기술', 'R&D / 설계', '품질관리 / 보증', '구매 / SCM'],
    hasAnalysis: true,
    analysis: {
      coreSummary: '기존 고로 방식과 달리 다단 유동환원로에서 분철광석을 수소로 환원한 뒤 전기용융로(ESF)에서 용선으로 액화하는 포스코 고유의 기술이다. 고가의 펠릿 가공 없이 저급 분광을 직접 사용할 수 있어 막강한 원가 경쟁력을 지닌다.',
      industryImpact: 'EU 탄소국경조정제도(CBAM) 등 글로벌 기후 규제가 본격화됨에 따라 저탄소 제철 기술은 철강사의 수출 경쟁력과 직결된다. 포스코의 기술 실증은 한국 제조업 전체의 탄소중립 실현을 좌우할 시험대다.',
      companyImpact: '호주 BHP와의 원료 공동 연구를 통해 수소환원제철에 최적화된 광석 조건을 선점하고, 2030년까지 상용 기술을 완성하여 친환경 철강사로의 체질 개선을 확정 짓는다.',
      technicalTerms: [
        {
          term: 'HyREX (Hydrogen Reduction Ironmaking)',
          definition: '포스코의 고유 FINEX 유동환원로 기술을 바탕으로 분광석과 수소를 사용하여 환원철(DRI)을 제조하는 한국형 수소환원제철 공법.',
          practicalNote: '석탄 환원과 달리 강한 흡열반응이 일어나므로 유동로 내부 온도 균일도 유지와 수소 가스 안전 통제가 관건이다.'
        },
        {
          term: 'ESF (Electric Smelting Furnace, 전기용융로)',
          definition: '수소환원된 고체 환원철을 전기에너지로 녹여 고순도 용선(쇳물)과 슬래그를 분리하는 신개념 전기로.',
          practicalNote: '내화물 수명 관리와 슬래그 포밍 제어 알고리즘이 핵심 조업 역량이다.'
        }
      ],
      jobConnections: [
        {
          role: '생산기술',
          connection: '유동환원로 내 미분광 유동화 속도 제어 및 ESF 전력 원단위 최적화 조업 패턴 수립.',
          requiredSkill: '반응공학/열역학 해석, 공정제어(DCS) 루프 분석, 고온 가스 취련 기술'
        },
        {
          role: 'R&D / 설계',
          connection: '수소환원철 투입에 따른 쇳물 내 잔류 원소 거동 평가 및 자동차용 초고장력강 판재 물성 동등성 검증.',
          requiredSkill: '금속조직학(SEM/OM), 상변태 해석(Thermo-Calc), 인장/피로 물성 평가'
        }
      ],
      interviewQuestions: [
        {
          question: 'Q. 기존 고로 제철과 수소환원제철(HyREX)의 가장 큰 공학적 차이점과 극복해야 할 기술적 난제는 무엇입니까?',
          answerTip: '석탄 환원은 발열반응이라 열 공급이 자연스럽지만, 수소 환원은 열을 흡수하는 흡열반응이어서 유동로 내부 온도를 일정하게 유지하기 위한 열풍 및 전력 공급 기술이 핵심이라는 점을 짚어내세요.'
        }
      ]
    }
  },

  // 4. HD한국조선해양 암모니아 운반선 VLAC 수주
  {
    id: 'news-hd-vlac',
    title: 'HD한국조선해양, 유럽서 암모니아 운반선 3척 수주…5456억 규모',
    industry: 'heavy',
    companies: ['HD현대중공업', 'HD현대미포'],
    source: '한국경제',
    sourceUrl: 'https://www.hankyung.com/article/202607132347i',
    publishedAt: '2026-07-13',
    collectedAt: '2026-07-13 14:20:00 KST',
    readTimeMin: 4,
    imageUrl: '/images/shipyard_heavy_industry.jpg',
    keywords: ['친환경 선박', '조선업', 'LNG 운반선', '생산기술 및 품질관리'],
    summary: 'HD한국조선해양이 유럽 소재 선주와 총 5,456억 원 규모의 초대형 암모니아 운반선(VLAC) 3척 건조 계약을 체결했다. 암모니아는 연소 시 탄소를 배출하지 않아 차세대 친환경 무탄소 연료이자 수소 운반체로 각광받고 있으며, HD현대는 글로벌 가스선 시장 점유율 1위를 굳건히 지키고 있다.',
    jobSeekerImplication: 'LNG선에 이어 차세대 친환경 선박인 암모니아/메탄올 운반선 선별 수주가 이어지면서, 극저온 화물창 소재 설계와 독자 이중연료(HiMSEN) 엔진 생산기술 인재 채용이 지속 확대되고 있다.',
    relevantJobs: ['R&D / 설계', '생산기술', '품질관리 / 보증', '사업기획 / 영업'],
    hasAnalysis: true,
    analysis: {
      coreSummary: '울산 야드의 고선가 선종 중심 선별 수주 기조가 지속되고 있다. 암모니아는 영하 33도에서 액화되며 강한 부식성과 독성을 지니므로, 안전한 화물창(CHS) 설계와 특수 배관 의장 기술이 집약된 선박이다.',
      industryImpact: '국제해사기구(IMO) 탄소 규제 강화로 친환경 가스 운반선 수요가 폭발하고 있으며, 중국 조선소가 모방하기 힘든 고난도 가스선 분야에서 한국 조선사의 기술적 초격차가 유지되고 있다.',
      companyImpact: '3년 치 이상의 안정적인 일감을 채워 넣은 상태에서 선가를 지속 인상하며 영업이익률을 극대화하고 있다.',
      technicalTerms: [
        {
          term: 'VLAC (Very Large Ammonia Carrier)',
          definition: '8만 8천 세제곱미터 이상의 대용량 액화 암모니아를 가압·냉각하여 수송하는 초대형 가스 운반선.',
          practicalNote: '암모니아의 독성과 부식성을 방어하기 위한 이중 격벽 안전 벤트 마스트 설계와 특수 저온 니켈강 용접이 핵심이다.'
        }
      ],
      jobConnections: [
        {
          role: 'R&D / 설계',
          connection: '화물창 내부 암모니아 가스 누출 감지 센서 배치 및 선체 3D CAD 의장 모델링.',
          requiredSkill: 'Tribon/AM 3D 모델링, 선급 규격(DNV, KR) 도면 해독, 유체 열해석'
        },
        {
          role: '생산기술',
          connection: '도크 내 선박 블록 탑재 공기를 단축하기 위한 대형 메가블록(Mega-Block) 공법 및 용접 자동화.',
          requiredSkill: 'FCAW/TIG 용접 시공법(WPS), 선체 정도 관리, 야드 크레인 리프팅 배차'
        }
      ],
      interviewQuestions: [
        {
          question: 'Q. 친환경 추진 선박에서 암모니아는 수소보다 운송이 유리하지만 독성 문제가 있습니다. 설계와 건조 시 어떤 안전 엔지니어링 대책이 필요합니까?',
          answerTip: '연료공급실(FGSR)의 부압(Negative Pressure) 환기 시스템, 질소 퍼징(Purging) 절차, 비상 벤트 마스트 위치 설계를 구체적으로 언급하세요.'
        }
      ]
    }
  },

  // 5. 현대제철 전기로 기반 저탄소 자동차강판 미국 생산 추진
  {
    id: 'news-hyundai-steel-hpls',
    title: '현대제철, 美서 전기로 기반 저탄소 자동차강판’ 생산 추진',
    industry: 'steel',
    companies: ['현대제철', '현대자동차'],
    source: '한국경제',
    sourceUrl: 'https://www.hankyung.com/article/202609179844G',
    publishedAt: '2026-09-17',
    collectedAt: '2026-09-17 11:20:00 KST',
    readTimeMin: 4,
    imageUrl: '/images/steel_plant_production.jpg',
    keywords: ['자동차강판', '전기로', '탄소중립', '고부가가치 강재', '금속재료 기술'],
    summary: '현대제철이 미국 루이지애나주에 직접환원철(DRI)과 전기로 공정을 결합한 대규모 전기로 제철소를 추진한다. 기존 고로 방식 대비 탄소 배출량을 최대 70% 줄이면서 연간 180만 톤의 고부가가치 저탄소 자동차강판을 현지에서 생산해 현대차·기아 및 북미 완성차에 공급할 계획이다.',
    jobSeekerImplication: '전기로 쇳물은 불순물(트램프 엘리먼트) 제어가 어려워 자동차 외판재로 쓰기 어렵다는 한계를 극복하는 정련 및 압연 기술이 핵심 채용 포인트다.',
    relevantJobs: ['생산기술', 'R&D / 설계', '품질관리 / 보증'],
    hasAnalysis: true,
    analysis: {
      coreSummary: '고로 용선 없이 전기로에서 고청정 정련(LF/RH) 기술을 고도화하여 전기차 차체용 초고장력 판재류를 생산하는 친환경 제철 프로세스다. 글로벌 탄소 국경세와 완성차 OEM의 Scope 3 배출량 저감 요구를 정면 돌파한다.',
      industryImpact: '글로벌 철강사들이 탄소 배출량이 많은 고로를 폐쇄하고 전기로로 전환하는 거대한 기술적 변곡점에 진입했음을 보여준다.',
      companyImpact: '미국 현지 생산을 통해 북미 무역 규제와 관세 장벽을 원천 차단하고 현대차그룹의 북미 전동화 공급망을 완벽히 수직계열화한다.',
      technicalTerms: [
        {
          term: '전기로 (Electric Arc Furnace)',
          definition: '전기에너지를 아크 방전시켜 고철이나 직접환원철을 녹여 쇳물을 제조하는 친환경 제강 설비.',
          practicalNote: '석탄 연소가 없어 탄소 배출이 적으나 구리(Cu), 주석(Sn) 등 불순물 제거가 고난도 기술이다.'
        }
      ],
      jobConnections: [
        {
          role: '생산기술',
          connection: '전기로 용융 후 진공 탈가스(RH) 공정에서 가스 성분 ppm 단위 제어 및 슬래그 포밍 최적화.',
          requiredSkill: '제강 용해 반응 속도론, 전력 원단위 모니터링, 슬래그 제어 기술'
        }
      ],
      interviewQuestions: [
        {
          question: 'Q. 전기로 기반 강판이 고로 강판에 비해 품질 편차가 발생하기 쉬운 근본 원인과 엔지니어로서의 해결책은?',
          answerTip: '원료인 고철의 미량 원소 제어가 어렵기 때문임을 짚고, 고순도 직접환원철(DRI) 배합 비율 제어와 고청정 진공 정련 기술을 대안으로 제시하세요.'
        }
      ]
    }
  },

  // 6. 삼성중공업 FLNG 초대형 4.3조 수주
  {
    id: 'news-samsung-flng',
    title: '삼성중공업, 4조3300억원 규모 FLNG 1기 수주',
    industry: 'heavy',
    companies: ['삼성중공업'],
    source: '한국경제',
    sourceUrl: 'https://www.hankyung.com/article/2026060228707',
    publishedAt: '2026-06-02',
    collectedAt: '2026-06-02 09:30:00 KST',
    readTimeMin: 4,
    imageUrl: '/images/shipyard_heavy_industry.jpg',
    keywords: ['해양플랜트', 'LNG 운반선', '조선업', '생산기술 및 품질관리'],
    summary: '삼성중공업이 북미 지역 선주로부터 총 4조 3,301억 원 규모의 대형 부유식 액화천연가스 생산설비(FLNG) 1기 건조 계약을 체결했다. 설계부터 시운전까지 전 공정을 표준화하여 글로벌 해양플랜트 시장에서 독보적인 1위 경쟁력을 입증했다.',
    jobSeekerImplication: '해양플랜트 상부구조물(Topside) 복합 배관 설계, 극저온 액화 공정 제어, 대형 구조물 비파괴검사(NDT) 역량을 갖춘 플랜트 엔지니어의 수요가 견고하다.',
    relevantJobs: ['R&D / 설계', '생산기술', '품질관리 / 보증'],
    hasAnalysis: true,
    analysis: {
      coreSummary: '바다 위에서 천연가스를 채굴, 정제, 액화, 저장할 수 있는 바다 위의 복합 화학공장인 FLNG 분야에서 삼성중공업이 전 세계 최다 건조 실적을 기반으로 대규모 고수익 일감을 추가 확보했다.',
      industryImpact: '육상 LNG 터미널 건설 대비 인허가 기간이 짧고 투자비가 적게 드는 해상 FLNG에 대한 글로벌 오일 메이저의 선호도가 급증하고 있다.',
      companyImpact: '일반 상선 수십 척에 맞먹는 초대형 프로젝트를 수주하여 야드의 도크 슬롯 효율과 마진율을 획기적으로 끌어올린다.',
      technicalTerms: [
        {
          term: 'FLNG (Floating Liquefied Natural Gas)',
          definition: '해상 가스전 상부에서 천연가스를 정제하고 영하 162도로 액화하여 선체 탱크에 저장 및 하역할 수 있는 부유식 설비.',
          practicalNote: '해상의 거친 파도와 흔들림(Sloshing) 속에서도 액화 플랜트가 안정적으로 작동해야 하는 최고 난도의 해양 공학 기술이다.'
        }
      ],
      jobConnections: [
        {
          role: 'R&D / 설계',
          connection: '해양 가스전 환경에 맞춘 Topside 공정 배관 배치 및 동적 구조 해석(Sloshing Analysis).',
          requiredSkill: '해양 배관 3D 모델링, ANSYS 구조 해석, 극한 해양 환경 선급 규격 해독'
        }
      ],
      interviewQuestions: [
        {
          question: 'Q. FLNG가 일반 육상 LNG 터미널과 비교해 갖는 경쟁 우위와, 건조 시 설계 엔지니어가 가장 주의해야 할 공학적 특성은?',
          answerTip: '육상 토지 보상과 환경 인허가 부담이 없고 해상 이동이 가능하다는 점을 언급하고, 해상 파도 요동에 의한 화물창 내부 슬로싱(Sloshing) 충격 방지와 콤팩트한 톱사이드 안전 설계를 설명하세요.'
        }
      ]
    }
  },

  // 7. 현대모비스 폭스바겐 배터리시스템 대규모 수주
  {
    id: 'news-mobis-vw',
    title: '현대모비스, 폭스바겐에 전기차 핵심부품 첫 공급',
    industry: 'automotive',
    companies: ['현대모비스'],
    source: '한국경제',
    sourceUrl: 'https://www.hankyung.com/article/2023080983121',
    publishedAt: '2023-08-09',
    collectedAt: '2023-08-09 17:15:30 KST',
    readTimeMin: 4,
    imageUrl: '/images/auto_manufacturing_line.jpg',
    keywords: ['배터리', '전기차(EV)', '글로벌 생산거점', '생산기술과 품질관리'],
    summary: '현대모비스가 독일 폭스바겐으로부터 수조 원 규모의 전기차 핵심 부품인 배터리시스템(BSA)을 사상 최초로 수주했다. 스페인 현지에 전동화 신규 거점을 구축하고 글로벌 비계열(Non-Captive) 완성차 공급망에 본격 진입했다.',
    jobSeekerImplication: '현대차그룹 캡티브 매출 의존도를 낮추고 유럽 글로벌 메이저 OEM을 상대로 한 전동화 생산기술, 배터리 관리 시스템(BMS) R&D, 기능안전(ISO 26262) 엔지니어 채용이 대규모로 진행된다.',
    relevantJobs: ['R&D / 설계', '생산기술', '품질관리 / 보증', '구매 / SCM'],
    hasAnalysis: true,
    analysis: {
      coreSummary: '폭스바겐의 차세대 전기차 전용 플랫폼에 탑재될 배터리시스템(BSA) 공급 계약으로, 스페인 나바라주 생산기지에서 조립되어 유럽 전역으로 공급된다.',
      industryImpact: '국내 자동차 부품사가 보쉬, 콘티넨탈, 덴소 등 글로벌 전통 티어1의 텃밭인 유럽 완성차의 핵심 전동화 수주를 따냈다는 상징적인 사건이다.',
      companyImpact: '해외 수주 물량이 본격 매출로 인식되며 전동화 사업부의 턴어라운드와 수익성 개선이 가속화된다.',
      technicalTerms: [
        {
          term: 'BSA (Battery System Assembly)',
          definition: '배터리 셀을 묶은 모듈에 배터리 관리 시스템(BMS), 냉각 시스템, 전원 차단 장치를 일체화한 고전압 배터리 팩 어셈블리.',
          practicalNote: '충돌 시 배터리 발화 방지를 위한 기구적 보호 구조와 고전압 절연 품질 검증이 최우선이다.'
        }
      ],
      jobConnections: [
        {
          role: '생산기술',
          connection: '고전압 배터리 모듈 조립 라인의 열화상 검사 자동화 및 레이저 용접 수율 최적화.',
          requiredSkill: '배터리 팩 조립 설비 제어, 레이저 용접 파라미터 최적화, 정전기 방지(ESD) 공정 설계'
        }
      ],
      interviewQuestions: [
        {
          question: 'Q. 전기차 배터리시스템(BSA)의 열관리(Thermal Management)가 차량 안전성과 수명에 미치는 영향과 설계 시 고려사항은?',
          answerTip: '급속 충전 및 고출력 주행 시 발생하는 셀 발열이 열폭주(Thermal Runaway)로 번지지 않도록 하는 갭필러(Gap Filler) 도포 품질과 수냉식 냉각 채널의 압력 강하 최소화 설계를 설명하세요.'
        }
      ]
    }
  },

  // 8. 두산에너빌리티 체코 원전 기자재 공급계약 정상 유지
  {
    id: 'news-doosan-czech',
    title: '두산에너빌리티 체코 원전 기자재 공급계약은 정상 유지',
    industry: 'heavy',
    companies: ['두산에너빌리티'],
    source: '한경비즈니스',
    sourceUrl: 'https://magazine.hankyung.com/business/article/202610293371b',
    publishedAt: '2026-10-29',
    collectedAt: '2026-10-29 16:40:00 KST',
    readTimeMin: 4,
    imageUrl: '/images/shipyard_heavy_industry.jpg',
    keywords: ['원자력', '발전설비', '전력기기', '생산기술 및 품질관리'],
    summary: '두산에너빌리티가 체코 두코바니 신규 원전 사업과 관련해 원자로 설비 및 터빈발전기설비 공급계약(주기기 제작)을 변경이나 해지 없이 정상 진행하고 있다. 북미 SMR(소형 모듈 원자로) 설계사들과의 기자재 공급 협력과 AI 전력 수요에 따른 원전 르네상스를 주도하고 있다.',
    jobSeekerImplication: '원자력 주기기 초대형 단조 공정기술과 ASME Section III 최고 수준의 품질보증 체계를 이해하는 엔지니어가 원전 및 플랜트 분야 채용에서 압도적인 차별성을 가진다.',
    relevantJobs: ['생산기술', '품질관리 / 보증', 'R&D / 설계'],
    hasAnalysis: true,
    analysis: {
      coreSummary: '창원 단조 공장의 세계 최대급 1만7000톤 프레스를 기반으로 원자로 압력용기와 증기발생기를 일괄 제작할 수 있는 글로벌 독점적 파운드리 입지를 굳히고 있다.',
      industryImpact: '글로벌 빅테크의 AI 데이터센터 가동으로 인해 무탄소 기저부하 전력인 원자력 및 SMR 수요가 전 세계적으로 폭증하고 있다.',
      companyImpact: '대형 원전 주기기뿐만 아니라 미국 뉴스케일파워 등 SMR 기자재 수주 파이프라인이 장기화되며 안정적인 수익 구조를 완성했다.',
      technicalTerms: [
        {
          term: 'SMR (Small Modular Reactor)',
          definition: '출력 300MWe 이하로 원자로와 증기발생기, 냉각재 펌프를 하나의 압력용기에 일체화하여 공장에서 모듈로 제작하는 소형 원자로.',
          practicalNote: '현장 콘크리트 타설을 최소화하고 트럭과 선박으로 수송 가능한 차세대 원전 모델이다.'
        }
      ],
      jobConnections: [
        {
          role: '품질관리 / 보증',
          connection: '방사선 조사 환경에서 결함이 허용되지 않는 원자로 압력용기의 ASME 규격 비파괴 초음파(PAUT) 전수검사.',
          requiredSkill: 'ASME Section III/XI 품질 요건, 위상배열 초음파(PAUT) 탐상, 샤르피 충격인성 시험'
        }
      ],
      interviewQuestions: [
        {
          question: 'Q. 원전 주기기 제작에서 대형 단조품의 일체형 제작(Integral Forging)이 용접 구조물보다 우수한 공학적 이유는?',
          answerTip: '용접부는 열영향부(HAZ)로 인해 결정립 조대화 및 잔류 응력이 생겨 중성자 조사 환경에서 취성 파괴 위험이 높지만, 일체형 단조는 결함 요인을 원천 차단하고 가동 중 비파괴검사 비용을 줄일 수 있다는 점을 설명하세요.'
        }
      ]
    }
  },

  // 9. 동국제강 인천제철소 친환경 에코아크 전기로 르포
  {
    id: 'news-dongkuk-ecoarc',
    title: "비싼 전기료 늪에 빠진 '친환경 전기로'",
    industry: 'steel',
    companies: ['동국제강'],
    source: '한국경제',
    sourceUrl: 'https://www.hankyung.com/article/2024062355021',
    publishedAt: '2024-06-23',
    collectedAt: '2024-06-23 09:10:00 KST',
    readTimeMin: 4,
    imageUrl: '/images/steel_plant_production.jpg',
    keywords: ['전기로', '탄소중립', '원자재 가격', '품질관리 및 공정기술'],
    summary: '동국제강 인천제철소의 국내 1호 친환경 ‘에코아크(Eco-Arc) 전기로’ 르포 기사. 고온의 배기가스로 고철을 사전 예열해 투입함으로써 에너지를 30% 절감하는 세계적 기술을 갖췄으나, 치솟는 산업용 전기요금으로 인한 원가 부담과 수익성 확보 과제를 현장 조명했다.',
    jobSeekerImplication: '전기로 철강사에서는 탄소 감축 기술과 더불어 "전력 원단위 절감 및 피크 전력 분산 조업 최적화" 능력을 갖춘 생산기술·설비 엔지니어의 실무 기여도가 매우 중요하다.',
    relevantJobs: ['생산기술', '품질관리 / 보증'],
    hasAnalysis: true,
    analysis: {
      coreSummary: '전기로에서 발생하는 배기가스 열을 버리지 않고 철스크랩 예열 챔버로 유도해 연속 장입함으로써 전력 소비를 30% 이상 줄인다. 일본 등 해외 제철소에서도 벤치마킹하는 대표적인 저탄소 설비다.',
      industryImpact: '고로 대비 탄소 배출이 적은 전기로가 탄소중립 브릿지 공정으로 주목받지만, 전기요금 상승이 철강사 실적에 미치는 영향이 커지고 있다.',
      companyImpact: '동국제강은 차세대 하이퍼 전기로 기술 개발과 함께 심야 전력 활용 극대화 및 프리미엄 컬러강판(럭스틸) 고수익 제품 확대로 원가 상승분을 흡수하고 있다.',
      technicalTerms: [
        {
          term: '에코아크(Eco-Arc) 전기로',
          definition: '전기로 배기가스의 폐열을 활용해 철스크랩을 섭씨 800도 이상으로 사전 예열한 뒤 연속으로 전기로에 장입하는 고효율 전기로.',
          practicalNote: '예열 샤프트 내 스크랩 브릿지 현상 방지와 배기가스 집진 다이옥신 저감 제어가 핵심이다.'
        }
      ],
      jobConnections: [
        {
          role: '생산기술',
          connection: '전기로 전극봉 아크 방전 시간 최적화 및 산소/탄소 취련을 통한 용락 시간 단축.',
          requiredSkill: '전기로 제강 조업학, 열정산 계산, 슬래그 포밍 제어'
        }
      ],
      interviewQuestions: [
        {
          question: 'Q. 산업용 전기요금이 상승하는 환경에서 전기로 철강사의 원가 경쟁력을 높이기 위해 생산기술 엔지니어로서 어떤 개선 방안을 제안하시겠습니까?',
          answerTip: '스크랩 예열 시스템을 통한 용락 시간 단축, 변전 설비의 무효전력 보상(SVC)을 통한 역률 개선, 계시별 요금제(TOU)에 맞춘 심야 시간대 용해 집중 조업 편성을 제안하세요.'
        }
      ]
    }
  },

  // 10. 기아 화성 PBV 전용공장 EVO 플랜트 2.2조 투자
  {
    id: 'news-kia-evo-plant',
    title: '2.2조 기아 전기차 공장 들어선다 환호…들썩인 동네',
    industry: 'automotive',
    companies: ['기아'],
    source: '한국경제',
    sourceUrl: 'https://www.hankyung.com/article/202503066889i',
    publishedAt: '2025-03-06',
    collectedAt: '2025-03-06 14:10:00 KST',
    readTimeMin: 3,
    imageUrl: '/images/auto_manufacturing_line.jpg',
    keywords: ['스마트팩토리', '로보틱스', '전기차(EV)', '생산기술과 품질관리'],
    summary: '기아가 오토랜드 화성에 총 2조 2,000억 원을 투자해 목적기반모빌리티(PBV) 전용 ‘화성 EVO 플랜트’를 구축하고 차세대 중형 PBV인 PV5 양산에 나섰다. 전통적인 컨베이어 벨트를 탈피해 셀 생산과 물류 로봇을 결합한 미래형 공장이다.',
    jobSeekerImplication: '공정 유연성과 특장 차량 맞춤 제작(컨버전)을 가능하게 하는 AGV 자율주행 물류 및 셀(Cell) 생산 기술 역량을 보유한 산업공학·기계 엔지니어 선호도가 높다.',
    relevantJobs: ['생산기술', '품질관리 / 보증'],
    hasAnalysis: true,
    analysis: {
      coreSummary: '승용, 화물, 이동식 점포 등 고객 맞춤형으로 차체 형태를 유연하게 바꿀 수 있는 차세대 모빌리티 생산기지다. 건식 도장 부스와 스마트 태그를 통한 부품 자동 식별 시스템이 적용되었다.',
      industryImpact: '단순 자가용 자동차 판매를 넘어 B2B 물류 및 모빌리티 서비스 기업을 겨냥한 목적 기반 맞춤형 차량 생태계가 본격 개막했다.',
      companyImpact: '기아는 글로벌 PBV 시장의 선점 효과를 누리며 글로벌 완성차 대비 독자적인 신시장 영역을 개척하게 된다.',
      technicalTerms: [
        {
          term: 'PBV (Purpose Built Vehicle, 목적기반모빌리티)',
          definition: '스케이트보드 플랫폼 위에 고객의 비즈니스 목적(물류, 승차공유, 레저 등)에 맞춘 특수 차체를 조립하는 맞춤형 차량.',
          practicalNote: '차체 상부 라이프 모듈을 기계적·전자적으로 손쉽게 결합하고 분리하는 이지스왑(Easy Swap) 기술이 핵심이다.'
        }
      ],
      jobConnections: [
        {
          role: '생산기술',
          connection: '컨베이어 벨트가 없는 유연 셀(Cell) 조립 라인에서의 작업자 동선 최적화 및 AGV 경로 제어.',
          requiredSkill: '스마트 물류 시뮬레이션, AGV 관제 시스템, 무선 통신 공정 데이터 관리'
        }
      ],
      interviewQuestions: [
        {
          question: 'Q. 기아 화성 EVO 플랜트에 적용된 셀 생산 방식이 전통적인 컨베이어 대량생산 방식 대비 갖는 장점과 현장 관리 시 주의점은?',
          answerTip: '다양한 차종 사양을 유연하게 생산할 수 있어 다품종 소량 맞춤 생산에 유리하다는 점을 짚고, 셀 간의 작업 시간 편차로 인한 물류 정체를 막기 위한 실시간 모니터링이 핵심임을 설명하세요.'
        }
      ]
    }
  },

  // 11. HL만도 자율주행 투자
  {
    id: 'news-mando-autonomous',
    title: 'HL만도, 자율주행 투자로 수익성 둔화 이어질 것…투자의견·목표가↓-삼성',
    industry: 'automotive',
    companies: ['HL만도'],
    source: '한국경제',
    sourceUrl: 'https://www.hankyung.com/article/2026110290626',
    publishedAt: '2026-11-02',
    collectedAt: '2026-11-02 08:30:00 KST',
    readTimeMin: 4,
    imageUrl: '/images/auto_manufacturing_line.jpg',
    keywords: ['자율주행', '소프트웨어 중심 자동차(SDV)', '생산기술과 품질관리'],
    summary: 'HL만도가 레벨 3 자율주행 및 SDV 전환을 위한 조향(SbW), 제동(IDB), 능동 현가 등 섀시 바이와이어 선행 연구개발 투자를 대폭 강화하고 있다. 단기 연구개발비 증가로 인한 수익성 둔화 우려에도 불구하고 미래차 핵심 안전 부품 시장 선점을 위한 필수적인 투자로 평가된다.',
    jobSeekerImplication: '섀시 메카트로닉스 하드웨어뿐만 아니라 차량용 실시간 통신 및 기능안전(ISO 26262 ASIL-D) 소프트웨어 검증 엔지니어에 대한 채용 문풍이 열려 있다.',
    relevantJobs: ['R&D / 설계', '품질관리 / 보증'],
    hasAnalysis: true,
    analysis: {
      coreSummary: '물리적 기계축을 없애고 전기 신호로 조향과 제동을 통제하는 바이와이어(By-Wire) 기술의 양산 수주를 북미 EV 및 글로벌 완성차로 다변화하고 있다.',
      industryImpact: '자율주행 고도화에 따라 운전대가 대시보드 안으로 수납되는 오토 스토우와 실내 공간 혁신이 가능해지며 섀시 바이와이어는 필수 부품으로 자리 잡는다.',
      companyImpact: '단기 실적 부담을 지나 글로벌 수주가 양산 매출로 전환되는 시점부터 고수익 섀시 전장 티어1으로의 도약이 기대된다.',
      technicalTerms: [
        {
          term: 'SbW (Steer-by-Wire, 전자식 조향)',
          definition: '스티어링 휠과 조향 바퀴 사이의 물리적 기계 연결축을 제거하고 센서와 모터 신호로만 바퀴를 회전시키는 조향 기술.',
          practicalNote: '고장 시 조향 불가 위험을 막기 위한 2중·3중 백업(Redundancy) 제어 시스템이 핵심이다.'
        }
      ],
      jobConnections: [
        {
          role: 'R&D / 설계',
          connection: '조향 핸들을 돌렸을 때 노면 감각을 모터 진동으로 재현하는 햅틱 피드백 알고리즘 개발.',
          requiredSkill: 'C/C++, 임베디드 RTOS, 차량용 CAN-FD 통신, 제어공학'
        }
      ],
      interviewQuestions: [
        {
          question: 'Q. 기계적 연결이 끊긴 바이와이어 시스템에서 운전자가 안전성을 신뢰할 수 있도록 하기 위한 이중화(Redundancy) 아키텍처 설계 방안은?',
          answerTip: '듀얼 코어 ECU의 상호 모니터링(Lockstep), 독립 전원 배터리 라인 분리, 이종 측정 원리의 듀얼 센서 배치를 구체적으로 답변하세요.'
        }
      ]
    }
  },

  // 12. 세아제강 카타르 대규모 LNG 프로젝트 강관 공급
  {
    id: 'news-seah-qatar',
    title: '세아제강, 카타르 대규모 LNG 프로젝트 강관 공급',
    industry: 'steel',
    companies: ['세아제강'],
    source: '한국경제',
    sourceUrl: 'https://www.hankyung.com/article/202204250516i',
    publishedAt: '2022-04-25',
    collectedAt: '2022-04-25 15:30:00 KST',
    readTimeMin: 4,
    imageUrl: '/images/steel_plant_production.jpg',
    keywords: ['철강 수출입', '고부가가치 강재', '품질관리 및 공정기술'],
    summary: '세아제강이 삼성물산이 수행하는 카타르 LNG 북부 가스전 프로젝트에 단일 프로젝트 기준 세계 최대 규모인 약 1,720억 원 규모의 스테인리스(STS) 용접강관 공급 계약을 체결했다. 영하 162도의 극저온과 고압 환경을 견뎌야 하는 고부가가치 특수 강관이다.',
    jobSeekerImplication: '일반 배관재를 넘어 극저온 LNG 터미널 및 해상풍력 하부구조물 특수 강관으로 포트폴리오를 전환한 세아제강의 SAW 후육강관 용접 및 비파괴 품질관리 엔지니어 수요가 높다.',
    relevantJobs: ['생산기술', '품질관리 / 보증', '구매 / SCM'],
    hasAnalysis: true,
    analysis: {
      coreSummary: '카타르 국영 에너지 기업 발주 프로젝트로 LNG 저장탱크와 하역 터미널 배관에 투입되는 대구경 극저온 스테인리스 용접강관을 전량 국산화 공급했다.',
      industryImpact: '글로벌 에너지 위기와 LNG 수송 인프라 확대에 따라 극저온 환경을 견디는 고합금 특수강관 시장이 안정적인 호황을 누리고 있다.',
      companyImpact: '순천공장의 대구경 후육 강관 설비를 활용해 글로벌 LNG 인프라 프로젝트에서 최상위 벤더 지위를 확고히 굳혔다.',
      technicalTerms: [
        {
          term: 'STS 극저온 용접강관',
          definition: '액화천연가스 수송을 위해 영하 162도의 극저온에서도 취성 파괴가 일어나지 않도록 오스테나이트계 스테인리스강으로 제작된 특수 배관.',
          practicalNote: '용접부의 결함이 가스 누출 대형 사고로 이어지므로 100% 방사선 및 초음파 비파괴검사를 통과해야 한다.'
        }
      ],
      jobConnections: [
        {
          role: '품질관리 / 보증',
          connection: '극저온 샤르피 충격시험 및 용접선 자동 초음파 탐상(AUT) 데이터 분석.',
          requiredSkill: '비파괴검사 자격(NDT), 금속 충격시험 규격(ASTM A312/A358), 품질 인증 성적서 관리'
        }
      ],
      interviewQuestions: [
        {
          question: 'Q. 극저온 배관재 용접 시 발생하기 쉬운 결함과 이를 사전에 차단하기 위한 품질 관리 방안은?',
          answerTip: '입열량 과다에 의한 용접부 결정립 조대화 및 입계 부식을 막기 위한 층간 온도 제어와 차폐 가스 순도 관리의 중요성을 설명하세요.'
        }
      ]
    }
  },

  // 13. 현대차 조지아 공장 하이브리드 가동 연합뉴스 보도
  {
    id: 'news-hyundai-hmgma-yna',
    title: '美조지아주 현대車공장, 하이브리드 차량 생산 곧 시작',
    industry: 'automotive',
    companies: ['현대자동차', '기아'],
    source: '한국경제 (연합뉴스 송고)',
    sourceUrl: 'https://www.hankyung.com/article/202605095296Y',
    publishedAt: '2026-05-09',
    collectedAt: '2026-05-09 08:45:00 KST',
    readTimeMin: 3,
    imageUrl: '/images/auto_manufacturing_line.jpg',
    keywords: ['글로벌 생산거점', '전기차(EV)', '하이브리드', '스마트팩토리'],
    summary: '현대자동차가 미국 조지아주 메타플랜트 아메리카(HMGMA)에서 순수 전기차뿐만 아니라 하이브리드 차량을 함께 생산하는 시설 개조 작업을 마치고 곧 양산에 들어간다는 현지 보도가 나왔다.',
    jobSeekerImplication: '북미 공장의 양산 개시(SOP)와 공급망 안정화에 직무 관심이 높은 취업 준비생에게 실질적인 현지 생산 전략을 파악할 수 있는 핵심 기사다.',
    relevantJobs: ['생산기술', '구매 / SCM'],
    hasAnalysis: false // 기사 본문 요약만 존재하며 심층 직무 분석 미등록 상태 (규정 준수)
  }
];
