import classNames from "./../styles/navbar.module.css";
import { Link } from "react-scroll";

const NavItem = ({ menu, setNavActive = () => {} }) => {
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
