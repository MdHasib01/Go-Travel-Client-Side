import { getAuth, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory, useLocation } from "react-router";
import initializeAuthentication from "../../Firebase/firebase.init";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { user } = useFirebase();
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const handleLogin = () => {
    console.log("clicked");
    signInUsingGoogle()
      .then((res) => history.push(redirect_uri))
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <button onClick={handleLogin}>
        <FontAwesomeIcon icon={faSignInAlt} /> Login with{" "}
        <span className="primary-color">Google</span>
      </button>
    </div>
  );
};

export default Login;
