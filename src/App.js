import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

import Header from "./components/Layout/Header";
import Alert from "./components/UI/Alert";
import useAlert from "./hooks/use-alert";
import { userActions } from "./store/user-slice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const googleCredential = useSelector((state) => state.user.googleCredential);

  useEffect(() => {
    if (!googleCredential) {
      const localCredential = localStorage.getItem("credential");
      if (!localCredential) {
        navigate("/login");
      } else {
        const userInfo = jwt_decode(localCredential);
        dispatch(userActions.setGoogleCredential(userInfo));
      }
    }
  }, [googleCredential, navigate, dispatch]);

  const {
    title: alertTitle,
    message: alertMessage,
    type: alertType,
    isShown: isAlertShown,
    closeHandler: alertCloseHandler,
  } = useAlert();

  return (
    <div className="App">
      {isAlertShown && (
        <Alert
          title={alertTitle}
          message={alertMessage}
          type={alertType}
          onClose={alertCloseHandler}
        />
      )}
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
