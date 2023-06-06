import { useRef, useState } from "react";
import ServiceDescSlider from "../ServiceDescSlider";
import ServicesSlider from "../ServicesSlider";
import classNames from "../../styles/Home.module.css";

function Content3() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section id="Treatments">
      <div style={{ minHeight: "100vh" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div style={{ fontSize: 34, fontWeight: 600, color: "#0360D9" }}>
            Our Treatments
            <div
              style={{
                borderBottom: "3.5px solid #0360D9",
                width: 100,
              }}
            ></div>
          </div>
          <div
            style={{
              fontSize: 16,
              color: "gray",

              textAlignLast: "center",
            }}
            className={classNames.content3Desc}
          >
            Discover our wide range of effective treatments designed to promote
            healing, improve well-being, and enhance overall health.
          </div>
          <ServicesSlider
            swiperRef={swiperRef}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
          <ServiceDescSlider activeIndex={activeIndex} />
        </div>
      </div>
    </section>
  );
}

export default Content3;
