import { Outlet } from "react-router-dom";

import Header from "./components/Layout/Header";
import Alert from "./components/UI/Alert";
import useAlert from "./hooks/use-alert";

function App() {
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
