import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import classNames from "../styles/navbar.module.css";
import { NavLinks } from "@/common/constants";

const Navbar = ({ style = {} }) => {
  const [navActive, setNavActive] = useState(null);
  const [navTop, setNavTop] = useState(0);
  let navActiveRef = useRef();
  navActiveRef.current = navActive;

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setNavTop(0);
      } else if (!navActiveRef.current) {
        setNavTop(-110);
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <div className={classNames.header} style={{ top: navTop, ...style }}>
      <div className={classNames.nav}>
        <Link href={"/"}>
          <div>
            <img
              src={"/assets/imgs/logo.png"}
              className={classNames.logo}
              style={{
                height: 80,
                width: 80,
                objectFit: "cover",
                cursor: "pointer",
              }}
              alt="logo"
            />
          </div>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={classNames.navMenuBar}
        >
          {navActive ? (
            <CloseOutlined style={{ fontSize: "30px", color: "#000" }} />
          ) : (
            <MenuOutlined style={{ fontSize: "30px", color: "#000" }} />
          )}
        </div>
        <div
          className={`${navActive ? classNames.activeMenu : ""} ${
            classNames.navMenuList
          }`}
        >
          {NavLinks.map((menu, idx) => (
            <div key={idx}>
              <NavItem menu={menu} setNavActive={setNavActive} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
