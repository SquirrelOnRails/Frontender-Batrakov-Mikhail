import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "../store/main-slice";
import { useEffect } from "react";

const useAlert = () => {
  const dispatch = useDispatch();
  const alertState = useSelector((state) => state.main.alert);
  const isAlertShown = alertState.isShown;

  const alertCloseHandler = () => {
    dispatch(mainActions.dismissAlert());
  };

  useEffect(() => {
    if (!isAlertShown) return;

    const alertTimeout = setTimeout(() => {
      dispatch(mainActions.dismissAlert());
    }, 3000);

    return () => {
      clearTimeout(alertTimeout);
    };
  }, [isAlertShown, dispatch]);

  return {
    ...alertState,
    closeHandler: alertCloseHandler,
  };
};

export default useAlert;
