import premiumIcon1 from "../../assets/Main/section3-img1.png";
import premiumIcon2 from "../../assets/Main/section3-img2.png";
import premiumIcon3 from "../../assets/Main/section3-img3.png";
import premiumIcon4 from "../../assets/Main/section3-img4.png";

export const premiumData = {
  eyebrow: "GREAT PREMIUM",

  title: ["한화포레나 지제역", "프리미엄"],

  description:
    "한화포레나 지제역은 경기도 평택시 세교동 725번지 일원에 조성되는 총 1,098세대 규모의 브랜드 대단지입니다. 평택지제역 광역교통망과 풍부한 생활 인프라, 한화포레나의 차별화된 상품성을 모두 누리는 새로운 주거 가치를 만나보세요.",

  items: [
    {
      id: "premium-location",
      number: "01",
      icon: premiumIcon1,
      title: "평택지제역 광역교통 프리미엄",
      subtitle: "수도권과 전국을 연결하는 편리한 교통환경",

      description:
        "수도권 전철 1호선과 KTX를 이용할 수 있는 평택지제역 생활권에 자리하며, 수원발 KTX 직결사업과 GTX-A·C 연장사업 등이 예정 또는 계획되어 있습니다.",

      link: "/BusinessGuide/intro",
      linkText: "사업안내 보기",
    },

    {
      id: "premium-reservation",
      number: "02",
      icon: premiumIcon2,
      title: "총 1,098세대 브랜드 대단지",
      subtitle: "쾌적함과 여유를 갖춘 대단지 주거환경",

      description:
        "총 12개 동, 1,098세대 규모로 조성되며 남향 위주의 단지 배치와 여유로운 동간거리, 세대당 약 1.43대의 넉넉한 주차공간을 제공합니다.",

      link: "/Promotion/Customer",
      linkText: "방문예약 보기",
    },

    {
      id: "premium-infra",
      number: "03",
      icon: premiumIcon3,
      title: "실용적인 평면 구성",
      subtitle: "84㎡A·B·C·D · 116㎡A",

      description:
        "실수요자 선호도가 높은 전용 84㎡부터 여유로운 전용 116㎡까지 구성되며, 전 타입 순환형 구조와 주력 타입인 84㎡A의 4Bay 판상형 설계로 공간 활용도를 높였습니다.",

      link: "/LocationEnvironment/intro",
      linkText: "입지환경 보기",
    },

    {
      id: "premium-brand",
      number: "04",
      icon: premiumIcon4,
      title: "한화포레나 브랜드 프리미엄",
      subtitle: "㈜한화 건설부문이 완성하는 주거 가치",

      description:
        "한화포레나의 브랜드 경쟁력과 설계 노하우를 바탕으로 EV에어스테이션, 포레나 코지커브 엘리베이터, 포레나 엣지룩 등 차별화된 상품과 주거환경을 제공합니다.",

      link: "/LocationEnvironment/primium",
      linkText: "프리미엄 보기",
    },
  ],
};