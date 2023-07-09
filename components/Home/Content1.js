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
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={classNames.content1Container}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 15,
          }}
          className={classNames.content1Left}
        >
          <div
            style={{
              textTransform: "uppercase",
              fontSize: 18,
              fontWeight: 500,
              fontFamily: "Volkhov",
            }}
          >
            Cherish Health
          </div>
          <div style={{ fontSize: 34, fontWeight: 500, fontFamily: "Volkhov" }}>
            <span style={{ color: "#0360D9", textDecoration: "underline" }}>
              Homoeopathy
            </span>{" "}
            for all We care for Your{" "}
            <span style={{ color: "#0360D9", textDecoration: "underline" }}>
              Cure
            </span>
          </div>
          <div
            style={{
              width: "90%",
              fontSize: 13,
              color: "#000",
              fontFamily: "Poppins",
            }}
          >
            Experience the Gentle Magic of homoeopathy: Empowering Your
            Body&apos;s Inner Healing! and Unleash the power of nature&apos;s
            remedies with homoeopathy, a gentle and holistic approach to
            wellness.
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
              alt="home"
            />
            <div className={classNames.content1btm}>
              <img
                src="/assets/imgs/homebtm.png"
                className={classNames.content1SmallImg}
                alt="homebtn"
              />
            </div>
            <div style={{}} className={classNames.content1Top}>
              <img
                src="/assets/imgs/hometop.png"
                className={classNames.content1SmallImg}
                alt="hometop"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content1;
