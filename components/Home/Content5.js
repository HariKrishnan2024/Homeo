import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { diseases } from "@/utils/data";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import classNames from "../../styles/Home.module.css";
import { useRef } from "react";

function Content5() {
  const swiperRef = useRef(null);
  return (
    <div style={{ height: "100%", width: "100%", marginTop: 60 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className={classNames.content5Container}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          <div
            style={{ fontWeight: 600, color: "#000" }}
            className={classNames.content5Header}
          >
            Disease We Cured
          </div>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <div
            style={{
              color: "#0360D9",
              width: 45,
              height: 45,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              cursor: "pointer",
              border: "1px solid #0360D9",
            }}
            onClick={() => {
              swiperRef.current.swiper.slidePrev();
            }}
          >
            <ArrowLeftOutlined style={{ fontSize: 20 }} />
          </div>
          <div
            style={{
              color: "#0360D9",
              width: 45,
              height: 45,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              borderRadius: "50%",
              border: "1px solid #0360D9",
            }}
            onClick={() => {
              swiperRef.current.swiper.slideNext();
            }}
          >
            <ArrowRightOutlined style={{ fontSize: 20 }} />
          </div>
        </div>
      </div>
      <div
        style={{ fontSize: 15, color: "gray" }}
        className={classNames.content5Desc}
      >
        From once incurable to triumphantly cured, we&apos;ve shattered the
        chains of [disease] and paved the way for a healthier tomorrow!
      </div>
      <div>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          centeredSlides={true}
          slideToClickedSlide={true}
          spaceBetween={20}
          loop={true}
          style={{
            padding: "20px 20px",
            "--swiper-navigation-color": "#000",
            "--swiper-navigation-size": "18px",
          }}
        >
          {diseases.map((disease, idx) => {
            return (
              <SwiperSlide key={idx} style={{}}>
                <div
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 30,
                  }}
                  className={classNames.imgSwiper}
                >
                  <img
                    src={disease.img}
                    alt={idx}
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
export default Content5;
