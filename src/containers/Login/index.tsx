import React, { memo, useCallback } from "react";

import { useUserContext } from "../../contexts";

import classNames from "./Login.module.css";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const { storeToken } = useUserContext();

  const handleLogin = useCallback(() => {
    // TODO: finish this function
    // storeToken()
  }, [storeToken]);

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