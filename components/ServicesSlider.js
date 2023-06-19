import { Swiper, SwiperSlide } from "swiper/react";
import { servicesData } from "@/utils/data";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import className from "../styles/Home.module.css";

function ServicesSlider({ swiperRef, setActiveIndex = () => {} }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 10,
        marginBottom: 30,
      }}
      className={className.sliderContainer}
    >
      <Swiper
        ref={swiperRef}
        slidesPerView={5}
        centeredSlides={true}
        slideToClickedSlide={true}
        spaceBetween={20}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        onRealIndexChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 5,
          },
          600: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 5,
          },
        }}
        style={{
          padding: "20px 20px",
          "--swiper-navigation-color": "#000",
          "--swiper-navigation-size": "18px",
        }}
      >
        {Object.keys(servicesData).map((service, idx) => {
          return (
            <SwiperSlide
              style={{
                backgroundColor: "transparent",
              }}
              key={idx}
              onClick={() => setActiveIndex(idx)}
            >
              {({ isActive }) => (
                <div
                  style={{
                    textTransform: "capitalize",
                    fontSize: 16,
                    marginTop: 8,
                    fontWeight: "bold",
                    backgroundColor: isActive ? "#E6F5FC" : null,
                    fontWeight: isActive ? 700 : 500,
                    padding: "8px 0px",
                    color: isActive ? "#0360D9" : "gray",
                    cursor: "pointer",
                  }}
                >
                  {service}
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ServicesSlider;
