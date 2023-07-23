import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "../../store/main-slice";

import styles from "./HeaderButton.module.scss";

const HeaderButton = () => {
  const isHeaderActive = useSelector((state) => state.main.isHeaderActive);
  const dispatch = useDispatch();

  const classes = `${styles["header-btn"]} ${isHeaderActive && styles.active}`;

  const headerBtnClickHandler = () => {
    dispatch(mainActions.toggleHeader());
  };

  return (
    <div onClick={headerBtnClickHandler} className={classes}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HeaderButton;
