import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import Card from "../components/UI/Card";
import { OAUTH } from "../settings";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user-slice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);

  const onGoogleSuccess = (credentialResponse) => {
    setIsError(false);

    const userInfo = jwt_decode(credentialResponse.credential);

    dispatch(userActions.setGoogleCredential(userInfo));
    localStorage.setItem("credential", credentialResponse.credential);
    navigate("/");
  };

  const onGoogleError = () => {
    setIsError(true);
  };

  return (
    <GoogleOAuthProvider clientId={OAUTH.google.clientId}>
      <Card>
        {isError && <p className="error">An error occured trying to log in</p>}
        <GoogleLogin
          onSuccess={onGoogleSuccess}
          onError={onGoogleError}
          useOneTap
          auto_select
        />
      </Card>
    </GoogleOAuthProvider>
  );
};

export default Login;
