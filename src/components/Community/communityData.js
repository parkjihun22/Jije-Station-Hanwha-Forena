import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",

  title: "품격 있는 일상을 완성하는 프리미엄 단지",

  description:
    "한화포레나 지제역은 남향 위주의 단지 배치와 여유로운 동간거리, 풍부한 조경시설과 입주민의 다양한 생활 방식을 고려한 커뮤니티 공간을 통해 쾌적하고 편리한 주거 환경을 제공합니다.",

  backgroundImage: bgImage,

  banner: {
    image: bannerImage,
    alt: "한화포레나 지제역 프리미엄 단지 전경",
  },

  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",

      title: "채광과 통풍을 고려한 쾌적한 단지 배치",

      description:
        "한화포레나 지제역은 전 세대를 남향 위주로 배치하고 넓은 동간거리를 확보하여 세대 간 간섭을 줄였습니다. 채광과 통풍, 조망과 입주민의 보행 동선을 고려한 단지 설계로 더욱 쾌적한 생활환경을 제공합니다.",

      image: layoutImage,
      alt: "한화포레나 지제역 단지 배치도",
    },

    {
      id: "complex-design",
      label: "단지 특화설계",

      title: "한화포레나의 차별화된 특화설계",

      description:
        "중앙광장과 펫파크, 어린이놀이터, 주민운동시설 등 다양한 조경공간을 마련하고 EV에어스테이션과 포레나 코지커브 엘리베이터 등 한화포레나의 특화 시스템을 적용해 편리하고 품격 있는 주거 환경을 완성합니다.",

      image: designImage,
      alt: "한화포레나 지제역 단지 특화설계",
    },

    {
      id: "community-space",
      label: "커뮤니티",

      title: "일상의 가치를 높이는 커뮤니티 공간",

      description:
        "피트니스와 GX룸, 필라테스룸, 골프연습장, 스크린골프를 비롯해 어린이집, 돌봄센터, 키즈그라운드, 작은도서관, 독서실과 맘스테이션 등 입주민의 건강과 여가, 교육과 소통을 위한 다양한 커뮤니티 시설이 계획되어 있습니다.",

      image: communityImage,
      alt: "한화포레나 지제역 입주민 커뮤니티 시설",
    },
  ],
};