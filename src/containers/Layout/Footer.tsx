import React, { memo } from "react";

import classNames from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={classNames.container}>
      <div className={classNames.quote}>
        Man is born free and everywhere he is in chains. -- Jean-Jacques
        Rousseau
      </div>
      <span>Budget App &#169;</span>
    </footer>
  );
};

export default memo(Footer);
