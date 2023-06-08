import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  const homeHandler = () => {
    navigate("/");
  };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={homeHandler}>Go to root page</button>
    </div>
  );
};

export default ErrorPage;
