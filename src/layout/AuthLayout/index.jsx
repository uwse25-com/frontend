import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles.scss";

const AuthLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { loginWithRedirect, getAccessTokenSilently } = useAuth0();

  const checkTokenRedirect = async () => {
    try {
      let token = await getAccessTokenSilently({
        audience: "https://www.uwse25.com",
      });
      if (token) {
        localStorage.setItem("token", token);
        setLoading(false);
      } else {
        loginWithRedirect();
      }
    } catch (e) {
      console.error(e);
      loginWithRedirect();
    }
  };

  useEffect(() => {
    checkTokenRedirect();
  }, []);
  return loading ? <CircularProgress /> : children;
};

export default AuthLayout;
