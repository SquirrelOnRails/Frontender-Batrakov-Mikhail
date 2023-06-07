import { NavLink } from "react-router-dom";

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
          <NavLink to="/guess-game" className={navlinkClass}>
            GuessGame!
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
