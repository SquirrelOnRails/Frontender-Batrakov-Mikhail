import { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useLocation, useNavigation } from "react-router-dom";

import styles from "./Header.module.scss";
import HeaderButton from "../UI/HeaderButton";
import { mainActions } from "../../store/main-slice";
import scriptToggleDarkMode from "../../code/dark-theme";

const Header = () => {
  const [username, setUsername] = useState("Anonymous user");
  const userInfo = useSelector((state) => state.user);
  const isUserLoggedIn = userInfo && userInfo.googleCredential;
  const isHeaderActive = useSelector((state) => state.main.isHeaderActive);
  const stateIsDarkMode = useSelector((state) => state.main.isDarkMode);
  const currentUrl = useLocation().pathname;
  const dispatch = useDispatch();

  const darkModeClickHandler = () => {
    dispatch(mainActions.toggleDarkMode(!stateIsDarkMode));
  };

  // credentials
  useEffect(() => {
    if (isUserLoggedIn) {
      setUsername(
        userInfo.googleCredential.name ?? userInfo.googleCredential.email
      );
    }
  }, [userInfo, isUserLoggedIn]);

  // show header
  useEffect(() => {
    dispatch(mainActions.toggleHeader(false));
  }, [currentUrl]);

  // display theme
  useEffect(() => {
    scriptToggleDarkMode();
  }, [stateIsDarkMode]);

  // save theme state
  useEffect(() => {
    const lsIsDarkMode = localStorage.getItem("isDarkMode") === "true";
    if (lsIsDarkMode !== stateIsDarkMode) {
      dispatch(mainActions.toggleDarkMode(lsIsDarkMode));
    }
    scriptToggleDarkMode();
  }, []);

  const navlinkClass = ({ isActive, isPending }) =>
    isActive ? styles.active : isPending ? styles.pending : "";

  const headerClass = `${styles.header} ${isHeaderActive && styles.active}`;

  const darkModeBtnClass = `${styles["dark-mode-btn"]} ${
    stateIsDarkMode && styles["dark-mode-active"]
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
          <button
            className={darkModeBtnClass}
            id="dark-mode-btn"
            data-theme={stateIsDarkMode ? "dark" : "light"}
            onClick={darkModeClickHandler}
          ></button>
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
