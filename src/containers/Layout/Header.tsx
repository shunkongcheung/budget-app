import React, { memo, useCallback } from "react";
import { useRouter } from "next/router";

import { useUserContext } from "../../contexts";

import classNames from "./Header.module.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const { token, clearToken } = useUserContext();
  const router = useRouter();

  const handleLogout = useCallback(() => {
    clearToken();
    router.push("/login");
  }, [clearToken, router]);

  const isLogin = !!token;

  return (
    <ul className={classNames.container}>
      <li className={classNames.listItem}>
        <a className={classNames.link} href="/">
          Home
        </a>
      </li>
      <li className={classNames.listItem}>
        <a className={classNames.link} href="/budgets">
          Budgets
        </a>
      </li>
      <li className={`${classNames.listItem} ${classNames.right}`}>
        <a className={classNames.link} href="#" onClick={handleLogout}>
          LOGOUT
        </a>
      </li>
    </ul>
  );
};

export default memo(Header);
