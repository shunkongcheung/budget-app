import React, { memo, useCallback } from "react";
import { useRouter } from "next/router";

import { useUserContext } from "../../contexts";

import classNames from "./Header.module.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const { clearToken } = useUserContext();
  const router = useRouter();

  const handleLogout = useCallback(() => {
    clearToken();
    router.push("/login");
  }, [clearToken, router]);

  return (
    <div className={classNames.container}>
      <ul className={classNames.content}>
        <li className={classNames.listItem}>
          <a className={classNames.brand} href="/">
            BUDGET APP
          </a>
        </li>
        <li className={classNames.listItem}>
          <a className={classNames.link} href="/budgets">
            Budgets
          </a>
        </li>
        <li className={`${classNames.listItem} ${classNames.right}`}>
          <a className={classNames.logout} href="#" onClick={handleLogout}>
            LOGOUT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default memo(Header);
