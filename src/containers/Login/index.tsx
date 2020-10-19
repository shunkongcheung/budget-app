import React, { memo, useCallback } from "react";
import { useRouter } from "next/router";
import firebase from "firebase";

import { useUserContext } from "../../contexts";

import classNames from "./Login.module.css";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const { storeToken } = useUserContext();
  const router = useRouter();

  const handleLogin = useCallback(async () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    const {
      user: { displayName },
    } = await firebase.auth().signInWithPopup(googleAuthProvider);

    const accessToken = await firebase.auth().currentUser.getIdToken(true);

    const { goTo } = router.query;

    storeToken(accessToken, displayName);
    router.push((goTo as string) || "/");
  }, [storeToken, router]);

  return (
    <>
      <h1>Login with Social Media Account</h1>
      <div>
        <button className={classNames.loginBtn} onClick={handleLogin}>
          <img src="/google.jpg" alt="google icon" height="50" />
          <span className={classNames.loginTxt}>LOGIN WITH GOOGLE</span>
        </button>
      </div>
    </>
  );
};

export default memo(Login);
