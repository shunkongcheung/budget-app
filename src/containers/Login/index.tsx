import React, { memo, useCallback } from "react";
import { useRouter } from "next/router";

import { useUserContext } from "../../contexts";

import classNames from "./Login.module.css";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const { storeToken } = useUserContext();
  const router = useRouter();

  const handleLogin = useCallback(async () => {
    // TODO
    // edit here to implement login function

    const [accessToken, displayName] = ["accessToken", "displayName"];
    const { goTo } = router.query;

    storeToken(accessToken, displayName);
    router.push((goTo as string) || "/");
  }, [storeToken, router]);

  return (
    <div className={classNames.container}>
      <img
        className={classNames.background}
        alt="desktop-background"
        src="/login-background.jpg"
      />
      <div className={classNames.content}>
        <div className={classNames.card}>
          <h1 className={classNames.title}>畢積</h1>
          <p className={classNames.description}>
            Welcome to Budget App. <br />
            <br />
            Getting started with your Google Account.
          </p>
          <button className={classNames.loginBtn} onClick={handleLogin}>
            <img src="/google.jpg" alt="google icon" height="50" />
            <span className={classNames.loginTxt}>LOGIN</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Login);
