import { googleLogout } from "@react-oauth/google";
import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    googleLogout();
  }, [googleLogout]);
};

export default Logout;
