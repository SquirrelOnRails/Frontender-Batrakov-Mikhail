import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { mainActions } from "../../store/main-slice";
import Alert from "../UI/Alert";

import styles from "./Header.module.css";

const Header = () => {
  const navlinkClass = ({ isActive, isPending }) =>
    isActive ? styles.active : isPending ? styles.pending : "";

  return (
    <header>
      <ul className={styles.nav}>
        <li>
          <NavLink to="/" className={navlinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/to-do" className={navlinkClass}>
            To-Do
          </NavLink>
        </li>
        <li>
          <NavLink to="/hang-man" className={navlinkClass}>
            Hang Man
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
