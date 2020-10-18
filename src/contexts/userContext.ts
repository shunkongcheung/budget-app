import { createContext, useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { JWT_TOKEN_COOKIE_NAME } from "../constants";

export interface User {
  clearToken: () => any;
  storeToken: (token: string, rmbMe: boolean) => any;
  username: string;
  token: string;
}

export const UserContext = createContext<User>({
  storeToken: () => {},
  username: "",
  token: "",
  clearToken: () => null,
});

export const useUserProvider = () => {
  const [username, setUsername] = useState<string>("");
  const [cookies, setCookie, removeCookie] = useCookies([
    JWT_TOKEN_COOKIE_NAME,
  ]);

  const token = cookies[JWT_TOKEN_COOKIE_NAME];

  const getDataFromToken = useCallback((token: string) => {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }, []);

  const storeToken = useCallback((token: string) => {
    const { exp, username } = getDataFromToken(token);

    // if not remember me, pass undefined to make it a session cookie
    setCookie(JWT_TOKEN_COOKIE_NAME, token, { expires: exp });
    setUsername(username);
  }, []);

  const clearToken = () => {
    removeCookie(JWT_TOKEN_COOKIE_NAME);
  };

  useEffect(() => {
    if (token) {
      const { username } = getDataFromToken(token);
      setUsername(username || "");
    }
  }, [token]);

  return { token, storeToken, username, clearToken };
};
