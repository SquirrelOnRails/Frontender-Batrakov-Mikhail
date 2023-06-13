import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

import Card from "../components/UI/Card";
import { OAUTH } from "../settings";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user-slice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isGoogleError, setIsGoogleError] = useState(false);

  const googleSuccessHandler = (credentialResponse) => {
    setIsGoogleError(false);

    const userInfo = jwt_decode(credentialResponse.credential);

    dispatch(userActions.setGoogleCredential(userInfo));
    navigate("/");
  };
  const googleErrorHandler = () => {
    setIsGoogleError(true);
  };

  return (
    <GoogleOAuthProvider clientId={OAUTH.google.clientId}>
      <Card>
        <GoogleLogin
          onSuccess={googleSuccessHandler}
          onError={googleErrorHandler}
          useOneTap
        />
        {isGoogleError && (
          <p className="error">An error occured trying to log in</p>
        )}
        <Link to="/">Continue as anonymous</Link>
      </Card>
    </GoogleOAuthProvider>
  );
};

export default Login;
