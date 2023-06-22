// import Link from "next/link";
import { CaretDownOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useRouter } from "next/router";
import classNames from "./../styles/navbar.module.css";
import { Link } from "react-scroll";

const NavItem = ({ menu, setNavActive = () => {} }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  let splitPath = router.route.split("/");
  let active = splitPath[1] === menu.path;

  return (
    <div className={classNames.dropdown}>
      <Link
        activeClass="active"
        smooth
        spy
        to={menu.name}
        className={classNames.navItem}
        onClick={() => {
          setNavActive(false);
        }}
      >
        {menu.name}
      </Link>
    </div>
  );
};

export default NavItem;
