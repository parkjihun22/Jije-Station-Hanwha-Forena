const SITE_URL = "https://www.hg-prugioriverfront.co.kr";

export const siteSeo = {
  siteName: "지제역 한화포레나",
  siteUrl: SITE_URL,
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",
  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,

  defaultDescription:
    "지제역 한화포레나 분양 안내 홈페이지입니다. 경기도 평택시 세교동 725번지 일원에 조성되는 총 12개 동, 1,098세대 규모의 한화포레나 브랜드 대단지로, 전용 84㎡A·84㎡B·84㎡C·84㎡D·116㎡A 평면, 입지환경, 공급정보, 분양일정과 모델하우스 방문예약 정보를 확인하세요.",

  project: {
    addressCountry: "KR",
    addressRegion: "경기도",
    addressLocality: "평택시",
    streetAddress: "세교동 725번지 일원",
    block: "평택지제역 생활권",
    households: "총 1,098세대",
    scale: "총 12개 동 · 1,098세대",
    unitTypes: ["84㎡A", "84㎡B", "84㎡C", "84㎡D", "116㎡A"],
    brand: "FORENA",
    brands: [
      "지제역 한화포레나",
      "한화포레나",
      "㈜한화 건설부문",
    ],
    developer: "아이제이디앤씨㈜",
    contractor: "㈜한화 건설부문",
    navigationSchemaName: "지제역 한화포레나 주요 메뉴",
  },

  keywords: [
    "지제역 한화포레나",
    "지제역 한화포레나 분양",
    "지제역 한화포레나 모델하우스",
    "지제역 한화포레나 견본주택",
    "지제역 한화포레나 방문예약",
    "지제역 한화포레나 공급정보",
    "지제역 한화포레나 청약",
    "지제역 한화포레나 분양가",
    "지제역 한화포레나 평면도",
    "지제역 한화포레나 입지환경",
    "지제역 한화포레나 커뮤니티",
    "지제역 한화포레나 1098세대",
    "지제역 한화포레나 84A",
    "지제역 한화포레나 84B",
    "지제역 한화포레나 84C",
    "지제역 한화포레나 84D",
    "지제역 한화포레나 116A",
    "지제역 한화포레나 언론보도",
    "지제역 한화포레나 보도자료",
    "지제역 한화포레나 뉴스",
    "한화포레나 지제역",
    "평택 세교동 아파트",
    "평택지제역 아파트",
    "모델하우스 방문예약",
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      { name: "브랜드소개", path: "/Brand/intro" },
    ],
  },
  {
    name: "사업안내",
    path: "/BusinessGuide/intro",
    children: [
      { name: "사업안내", path: "/BusinessGuide/intro" },
      { name: "분양일정", path: "/BusinessGuide/plan" },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      { name: "입지안내", path: "/LocationEnvironment/intro" },
      { name: "프리미엄", path: "/LocationEnvironment/primium" },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      { name: "단지배치도", path: "/ComplexGuide/intro" },
      { name: "호수배치도", path: "/ComplexGuide/detailintro" },
      { name: "커뮤니티", path: "/ComplexGuide/community" },
    ],
  },
  {
    name: "분양안내",
    path: "/BusinessGuide/documents",
    children: [
      { name: "공급안내", path: "/BusinessGuide/documents" },
      { name: "입주자 모집공고", path: "/SalesInfo/announcement" },
      { name: "계약서류안내", path: "/SalesInfo/guide" },
    ],
  },
  {
    name: "타입안내",
    path: "/FloorPlan/59A",
    children: [
      { name: "84A㎡", path: "/FloorPlan/59A" },
      { name: "84B㎡", path: "/FloorPlan/59B" },
      { name: "84C㎡", path: "/FloorPlan/84A" },
      { name: "84D㎡", path: "/FloorPlan/84B" },
      { name: "116㎡", path: "/FloorPlan/114A" },
      { name: "E-모델하우스", path: "/FloorPlan/Emodel" },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Press",
    children: [
      { name: "언론보도", path: "/Promotion/Press" },
      { name: "관심고객등록", path: "/Promotion/Customer" },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "지제역 한화포레나 | 평택 세교동 1,098세대 모델하우스",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),

  brandIntro: page({
    path: "/Brand/intro",
    title: "브랜드소개 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 브랜드소개 페이지입니다. ㈜한화 건설부문의 주거 브랜드 한화포레나가 제안하는 주거 철학과 브랜드 가치, 평택지제역 생활권에서 선보이는 차별화된 주거 가치를 확인하세요.",
    menu: "브랜드소개",
  }),

  brandVideo: page({
    path: "/Brand/video",
    title: "홍보영상 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 홍보영상 페이지입니다. 평택지제역 생활권의 입지와 총 1,098세대 브랜드 대단지, 한화포레나의 차별화된 상품 가치를 영상으로 확인하세요.",
    menu: "브랜드소개",
    robots: "noindex, follow",
  }),

  businessIntro: page({
    path: "/BusinessGuide/intro",
    title: "사업안내 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 사업안내 페이지입니다. 경기도 평택시 세교동 725번지 일원에 지하 1~2층부터 지상 22~27층, 총 12개 동, 1,098세대로 조성되는 사업개요를 확인하세요.",
    menu: "사업안내",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),

  businessPlan: page({
    path: "/BusinessGuide/plan",
    title: "분양일정 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 분양일정 안내입니다. 특별공급과 일반공급, 당첨자 발표, 서류접수 및 계약 일정 등 공식 입주자모집공고에 따라 공개되는 주요 공급 일정을 확인하세요.",
    menu: "사업안내",
  }),

  salesGuide: page({
    path: "/BusinessGuide/documents",
    title: "공급안내 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 공급안내 페이지입니다. 총 1,098세대의 공급 규모와 전용 84㎡A·84㎡B·84㎡C·84㎡D·116㎡A 주택형, 타입별 세대수 및 주요 공급정보를 확인하세요.",
    menu: "분양안내",
  }),

  announcement: page({
    path: "/SalesInfo/announcement",
    title: "입주자 모집공고 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 입주자모집공고 안내 페이지입니다. 공식 공고 공개 후 공급 대상과 청약 자격, 공급 일정, 주택형, 공급금액, 계약 조건 및 유의사항을 확인하세요.",
    menu: "분양안내",
  }),

  salesInfoGuide: page({
    path: "/SalesInfo/guide",
    title: "계약서류안내 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 계약서류안내 페이지입니다. 당첨자 자격 확인과 계약 체결, 제출서류, 준비사항 및 모델하우스 방문 전 확인해야 할 내용을 안내합니다.",
    menu: "분양안내",
  }),

  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title: "입지환경 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 입지환경 안내입니다. 수도권 전철 1호선과 KTX를 이용하는 평택지제역 생활권, 고덕국제신도시와 브레인시티, 평택 도심을 잇는 교통·생활 인프라를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title: "프리미엄 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 프리미엄 안내입니다. 평택지제역 광역교통망과 총 1,098세대 브랜드 대단지, 전 타입 순환형 구조 및 한화포레나의 차별화된 상품성을 소개합니다.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),

  complexIntro: page({
    path: "/ComplexGuide/intro",
    title: "단지배치도 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 단지배치도 안내입니다. 총 12개 동의 남향 위주 배치와 여유로운 동간거리, 보행 동선, 채광, 통풍, 조경 및 단지 내 생활 편의를 고려한 공간 구성을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),

  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title: "호수배치도 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 호수배치도 안내입니다. 총 12개 동의 동·호수 구성과 향, 84㎡A·84㎡B·84㎡C·84㎡D·116㎡A 타입별 배치 및 세대 위치 정보를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  complexCommunity: page({
    path: "/ComplexGuide/community",
    title: "커뮤니티 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 커뮤니티 안내입니다. 피트니스, GX룸, 필라테스룸, 골프연습장, 어린이집, 작은도서관 등 건강과 여가, 교육을 위한 입주민 편의시설을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  floorPlan84: page({
    path: "/FloorPlan/59A",
    title: "84㎡A 평면도 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 전용 84㎡A 평면도 안내입니다. 총 452세대로 구성되는 주력 타입의 4Bay 판상형 설계와 드레스룸, 순환형 팬트리 및 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan94: page({
    path: "/FloorPlan/59B",
    title: "84㎡B 평면도 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 전용 84㎡B 평면도 안내입니다. 총 208세대로 구성되는 타입의 효율적인 공간 구성과 생활 동선, 수납 및 특화설계를 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan101: page({
    path: "/FloorPlan/84A",
    title: "84㎡C 평면도 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 전용 84㎡C 평면도 안내입니다. 총 168세대로 구성되는 타입의 실용적인 수납공간과 효율적인 생활 동선, 공간 설계를 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan111: page({
    path: "/FloorPlan/84B",
    title: "84㎡D 평면도 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 전용 84㎡D 평면도 안내입니다. 총 122세대로 구성되는 타입의 가족 중심 생활 동선과 실용적인 공간 및 수납설계를 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan116: page({
    path: "/FloorPlan/114A",
    title: "116㎡A 평면도 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 전용 116㎡A 평면도 안내입니다. 총 148세대로 구성되는 중대형 타입의 넓고 여유로운 공간과 차별화된 생활 동선 및 수납설계를 확인하세요.",
    menu: "타입안내",
  }),

  emodel: page({
    path: "/FloorPlan/Emodel",
    title: "E-모델하우스 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 E-모델하우스입니다. 전용 84㎡A·84㎡B·84㎡C·84㎡D·116㎡A 타입의 실내 구조와 공간 구성, 수납 및 생활 동선을 온라인으로 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),

  customer: page({
    path: "/Promotion/Customer",
    title: "관심고객등록 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 관심고객등록 페이지입니다. 분양 일정과 공급정보, 분양가 상담, 모델하우스 위치 및 방문예약 등 주요 안내를 빠르게 받아보세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  press: page({
    path: "/Promotion/Press",
    title: "언론보도 | 지제역 한화포레나",
    description:
      "지제역 한화포레나 언론보도 페이지입니다. 평택지제역 생활권과 총 1,098세대 공급정보, 청약, 입지환경, 상품설계 및 모델하우스 방문예약 관련 보도자료와 분양 소식을 확인하세요.",
    menu: "홍보센터",
    image: "/img/og/main.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  notFound: page({
    path: "/404",
    title: "페이지를 찾을 수 없습니다 | 지제역 한화포레나",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 지제역 한화포레나 홈페이지의 사업안내, 입지환경, 단지안내, 평면도, E-모델하우스, 언론보도 및 관심고객등록 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

const normalizeSeoPath = (pathname = "/") => {
  let cleanPath = pathname || "/";

  try {
    if (/^https?:\/\//.test(cleanPath)) {
      cleanPath = new URL(cleanPath).pathname;
    }
  } catch {
    cleanPath = "/";
  }

  cleanPath = decodeURI(cleanPath)
    .split("?")[0]
    .split("#")[0]
    .replace(/\/$/, "");

  return cleanPath.toLowerCase() || "/";
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [
    normalizeSeoPath(value.path),
    key,
  ])
);

export const seoPageList = Object.values(seoPages).filter(
  (item) => item.robots !== "noindex, follow"
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${siteSeo.siteUrl}${normalizedPath}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const normalizedPath = normalizeSeoPath(pathname);
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/press")) return seoPages.press;
  if (normalizedPath.includes("/promotion/press")) return seoPages.press;
  if (normalizedPath.endsWith("/customer")) return seoPages.customer;
  if (normalizedPath.includes("/promotion/customer")) return seoPages.customer;

  return seoPages.notFound;
};