// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>현장명</strong>
          <span>한화포레나 지제역</span>
        </li>

        <li>
          <strong>대지위치</strong>
          <span>경기도 평택시 세교동 725번지 일원</span>
        </li>

        <li>
          <strong>단지규모</strong>
          <span>
            총 1,098세대 / 지하 1~2층 ~ 지상 22~27층 / 총 12개 동
          </span>
        </li>

        <li>
          <strong>사업면적</strong>
          <span>
            대지면적 64,557.00㎡ / 건축면적 9,052.6371㎡ / 연면적
            192,933.7144㎡
          </span>
        </li>

        <li>
          <strong>주차대수</strong>
          <span>총 1,576대 / 세대당 약 1.43대</span>
        </li>

        <li>
          <strong>주택형</strong>
          <span>전용 84㎡A · 84㎡B · 84㎡C · 84㎡D · 116㎡A</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="한화포레나 지제역 입지환경 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="한화포레나 지제역 평택지제역 생활권 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            평택지제역 생활권의 프리미엄을 담은
            <br />
            한화포레나 지제역 라이프
          </p>
        </div>
  
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
  ];

  function PremiumSlider() {
    const slides = [
      {
        img: slide1,
        title: "평택지제역 생활권의 중심 입지",
        desc:
          "경기도 평택시 세교동 725번지 일원<br/>고덕국제신도시와 브레인시티, 평택 도심을 잇는 입지<br/>삼성전자 평택캠퍼스를 가까이 누리는 직주근접 생활권",
      },
      {
        img: slide2,
        title: "84㎡A·B·C·D · 116㎡A 구성",
        desc:
          "실수요자 선호도가 높은 전용 84㎡ 중심 구성<br/>전 타입 순환형 구조와 효율적인 수납설계<br/>84㎡A 4Bay 판상형과 순환형 팬트리 적용",
      },
      {
        img: slide3,
        title: "총 1,098세대 브랜드 대단지",
        desc:
          "총 12개 동, 1,098세대 규모의 한화포레나<br/>남향 위주의 배치와 여유로운 동간거리<br/>세대당 약 1.43대의 넉넉한 주차공간",
      },
      {
        img: slide4,
        title: "광역교통망을 가까이 누리다",
        desc:
          "수도권 전철 1호선과 KTX를 이용하는 평택지제역<br/>수원발 KTX 직결사업과 GTX-A·C 연장 추진<br/>경부고속도로와 평택제천고속도로의 편리한 접근성",
      },
      {
        img: slide5,
        title: "한화포레나 브랜드 프리미엄",
        desc:
          "한화포레나의 브랜드 노하우를 담은 주거공간<br/>EV에어스테이션과 포레나 코지커브 엘리베이터<br/>포레나 엣지룩을 적용한 차별화된 상품설계",
      },
      {
        img: slide6,
        title: "생활의 가치를 높이는 주거환경",
        desc:
          "쇼핑과 의료, 교육시설을 가까이 누리는 생활권<br/>중앙광장과 펫파크, 어린이놀이터 등 풍부한 조경<br/>건강과 여가, 교육을 위한 다양한 커뮤니티 시설",
      },
    ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY + targetItem.getBoundingClientRect().top - fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
      <div className={styles.preTitle}>HANWHA FORENA JIJE STATION</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      <img src={heroImage} className={styles.heroImage} alt="지제역 한화포레나 히어로 메인사진" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
