import classNames from "../styles/navbar.module.css";

function Footer() {
  return (
    <div
      style={{
        haeigh: 200,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#D4EAFA",
        color: "#0009",
        padding: 20,
      }}
    >
      <div className={classNames.footerLogo}>
        <img src="/assets/imgs/logo.png" style={{ height: 80 }} alt="footer" />
      </div>
      <div style={{ fontSize: 13, textAlignLast: "center" }}>
        © Copyright 2023 JM Homeo Clinic - All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
