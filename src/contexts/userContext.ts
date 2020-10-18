import { createContext, useCallback, useState } from "react";
import { useCookies } from "react-cookie";

import { JWT_TOKEN_COOKIE_NAME } from "../constants";

export interface User {
  clearToken: () => any;
  storeToken: (token: string, username: string) => any;
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

  const storeToken = useCallback((token: string, username) => {
    setCookie(JWT_TOKEN_COOKIE_NAME, token, { expires: null });
    setUsername(username);
  }, []);

  const clearToken = () => {
    removeCookie(JWT_TOKEN_COOKIE_NAME);
  };

  return { token, storeToken, username, clearToken };
};
