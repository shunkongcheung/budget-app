import React, { memo } from "react";

import classNames from "./Header.module.css";

interface HeaderProps {
  isLogin?: boolean;
  handleLogout: () => any;
}

const Header: React.FC<HeaderProps> = ({ isLogin = false, handleLogout }) => {
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
      {!isLogin && (
        <li className={`${classNames.listItem} ${classNames.right}`}>
          <a className={classNames.link} href="#" onClick={handleLogout}>
            LOGOUT
          </a>
        </li>
      )}
    </ul>
  );
};

export default memo(Header);
