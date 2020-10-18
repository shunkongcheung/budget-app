import React, { memo } from "react";

import classNames from "./Footer.module.css";

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={classNames.container}>
      <span>Budget App &#169;</span>
    </footer>
  );
};

export default memo(Footer);
