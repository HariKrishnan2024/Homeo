import { servicesData } from "@/utils/data";
import "swiper/css";
import { useState } from "react";
import classNames from "../styles/Home.module.css";
import { Typography } from "antd";

function ServiceDescSlider({ activeIndex }) {
  const [ellipsis, setEllipsis] = useState(true);
  return (
    <div
      style={{ position: "relative" }}
      className={classNames.sliderDescContainer}
    >
      <img
        src={Object.values(servicesData)[activeIndex].src}
        style={{ height: "100%", width: "100%" }}
      />
      <div
        style={{
          padding: 20,
          backgroundColor: "#165399",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          backdropFilter: "blur(8.5px)",
          gap: 10,
        }}
        className={classNames.sliderDesc}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            textTransform: "uppercase",
            textAlign: "start",
          }}
        >
          {`Homoeopathy Approach to treat ${
            Object.keys(servicesData)[activeIndex]
          }`}
        </div>
        <Typography.Paragraph
          ellipsis={
            ellipsis
              ? {
                  rows: 4,
                  symbol: "...",
                }
              : false
          }
          style={{
            fontSize: 13,
            color: "#fff",
            textAlign: "start",
          }}
        >
          {Object.values(servicesData)[activeIndex]?.description}
        </Typography.Paragraph>
      </div>
    </div>
  );
}

export default ServiceDescSlider;
