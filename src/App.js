import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Header from "./components/Layout/Header";
import Alert from "./components/UI/Alert";
import useAlert from "./hooks/use-alert";
import { userActions } from "./store/user-slice";
import { mainActions } from "./store/main-slice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userCredential = useSelector((state) => state.user);

  useEffect(() => {
    if (!(userCredential.googleCredential || userCredential.basicCredential)) {
      const localCredential = JSON.parse(localStorage.getItem("credential"));
      if (!localCredential) {
        // navigate("/login");
        dispatch(
          mainActions.alert({
            title: "You are not logged in!",
            message: "Some features may not be awailable",
            type: "error",
          })
        );
        return;
      }

      if (localCredential.provider === "GOOGLE") {
        dispatch(userActions.setGoogleCredential(localCredential));
      }
    }
  }, [userCredential, navigate, dispatch]);

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
