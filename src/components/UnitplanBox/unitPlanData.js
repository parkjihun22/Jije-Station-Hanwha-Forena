import unit01 from "../../assets/UnitplanBox/unit01.jpg";
import unit02 from "../../assets/UnitplanBox/unit02.jpg";
import unit03 from "../../assets/UnitplanBox/unit03.jpg";
import unit04 from "../../assets/UnitplanBox/unit04.jpg";
import unit05 from "../../assets/FloorPlan/FloorPlan5/unit05.jpg";
import unit06 from "../../assets/FloorPlan/FloorPlan6/unit06.jpg";

export const unitPlanData = {
  eyebrow: "UNIT PLAN",

  title: "한화포레나 지제역 타입안내",

  description:
    "한화포레나 지제역의 전용 84㎡A·84㎡B·84㎡C·84㎡D 및 116㎡A 타입별 평면을 확인할 수 있습니다. 타입별 공간 구성과 생활 동선, 수납설계를 비교하며 라이프스타일에 맞는 주거공간을 살펴보세요.",

  plans: [
    {
      id: "84A",
      type: "84㎡A",
      name: "84㎡A",
      summary:
        "총 452세대로 구성되는 주력 타입으로, 4Bay 판상형 설계와 드레스룸, 순환형 팬트리를 적용한 공간 구성을 확인해 보세요.",

      image: unit01,
      alt: "한화포레나 지제역 84㎡A 평면도",

      link: "/FloorPlan/59A",
    },

    {
      id: "84B",
      type: "84㎡B",
      name: "84㎡B",
      summary:
        "총 208세대로 구성되는 84㎡B 타입의 효율적인 평면 구성과 편리한 생활 동선을 확인해 보세요.",

      image: unit02,
      alt: "한화포레나 지제역 84㎡B 평면도",

      link: "/FloorPlan/59B",
    },

    {
      id: "84C",
      type: "84㎡C",
      name: "84㎡C",
      summary:
        "총 168세대로 구성되는 84㎡C 타입의 실용적인 수납공간과 여유로운 주거 구성을 확인해 보세요.",

      image: unit03,
      alt: "한화포레나 지제역 84㎡C 평면도",

      link: "/FloorPlan/84A",
    },

    {
      id: "84D",
      type: "84㎡D",
      name: "84㎡D",
      summary:
        "총 122세대로 구성되는 84㎡D 타입의 공간 구성과 가족 중심의 편리한 생활 동선을 확인해 보세요.",

      image: unit04,
      alt: "한화포레나 지제역 84㎡D 평면도",

      link: "/FloorPlan/84B",
    },

    {
      id: "116A",
      type: "116㎡A",
      name: "116㎡A",
      summary:
        "총 148세대로 구성되는 116㎡A 타입의 넓고 여유로운 공간 구성과 차별화된 주거설계를 확인해 보세요.",

      image: unit04,
      alt: "한화포레나 지제역 116㎡A 평면도",

      link: "/FloorPlan/114A",
    },
  ],
};