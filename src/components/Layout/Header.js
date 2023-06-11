import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  const userInfo = useSelector((state) => state.user.googleCredential);
  const [username, setUsername] = useState("Private user");

  useEffect(() => {
    if (userInfo) {
      setUsername(userInfo.name ?? userInfo.email);
    }
  }, [userInfo]);

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
      <div className={styles["user-info"]}>
        <span>{username}</span>
        <Link to="/login">Logout</Link>
      </div>
    </header>
  );
};

export default Header;
