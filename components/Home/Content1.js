import classNames from "../../styles/Home.module.css";

function Content1() {
  return (
    <div
      style={{
        marginRight: "auto",
        marginLeft: "auto",
      }}
      className={classNames.content1}
    >
      <div
        style={{ minHeight: "100vh", display: "flex" }}
        className={classNames.content1Container}
      >
        <div
          style={{
            paddingTop: 70,
            display: "flex",
            flexDirection: "column",
            gap: 15,
          }}
          className={classNames.content1Left}
        >
          <div
            style={{
              textTransform: "uppercase",
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Cherish Health
          </div>
          <div style={{ fontSize: 34, fontWeight: 500 }}>
            <span style={{ color: "#0360D9", textDecoration: "underline" }}>
              Homeopathy
            </span>{" "}
            for all We care for Your{" "}
            <span style={{ color: "#0360D9", textDecoration: "underline" }}>
              Cure
            </span>
          </div>
          <div style={{ width: "80%", fontSize: 15, color: "#0009" }}>
            Experience the Gentle Magic of Homeopathy: Empowering Your Body's
            Inner Healing! and Unleash the power of nature's remedies with
            homeopathy, a gentle and holistic approach to wellness.
          </div>
        </div>
        <div className={classNames.contentRight}>
          <div
            style={{ position: "relative" }}
            className={classNames.content1Img}
          >
            <img
              src="/assets/imgs/home.png"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "172px 172px 0px 0px",
              }}
            />
            <div className={classNames.content1btm}>
              <img
                src="/assets/imgs/homebtm.png"
                className={classNames.content1SmallImg}
              />
            </div>
            <div style={{}} className={classNames.content1Top}>
              <img
                src="/assets/imgs/hometop.png"
                className={classNames.content1SmallImg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content1;
