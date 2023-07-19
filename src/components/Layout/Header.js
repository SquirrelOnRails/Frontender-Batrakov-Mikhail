import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

import styles from "./Header.module.scss";
import HeaderButton from "../UI/HeaderButton";

const Header = () => {
  const [username, setUsername] = useState("Anonymous user");
  const userInfo = useSelector((state) => state.user);
  const isUserLoggedIn = userInfo && userInfo.googleCredential;
  const isHeaderActive = useSelector((state) => state.main.isHeaderActive);

  useEffect(() => {
    if (isUserLoggedIn) {
      setUsername(
        userInfo.googleCredential.name ?? userInfo.googleCredential.email
      );
    }
  }, [userInfo, isUserLoggedIn]);

  const navlinkClass = ({ isActive, isPending }) =>
    isActive ? "active" : isPending ? "pending" : "";

  const headerClass = `${styles["header"]} ${
    isHeaderActive && styles["active"]
  }`;

  return (
    <Fragment>
      <HeaderButton />
      <header className={headerClass}>
        <div className={styles["header__nav"]}>
          <NavLink to="/" className={navlinkClass}>
            Home
          </NavLink>
          <NavLink to="/to-do" className={navlinkClass}>
            To-Do
          </NavLink>
          <NavLink to="/hang-man" className={navlinkClass}>
            Hang Man
          </NavLink>
        </div>
        <div className={styles["header__user-info"]}>
          <span>{username}</span>
          {isUserLoggedIn && <Link to="/logout">Log Out</Link>}
          {!isUserLoggedIn && <Link to="/login">Log In</Link>}
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
