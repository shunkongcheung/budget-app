import React, { ReactElement, useCallback, useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import classNames from "./Layout.module.css";

interface AppProps {
  children: ReactElement;
}

function App({ children }: AppProps) {
  const [isLogined, setIsLogined] = useState(false);

  const handleLoginSuccess = useCallback(() => {
    setIsLogined(true);
  }, []);
  const handleLogout = useCallback(() => {
    setIsLogined(false);
  }, []);

  return (
    <>
      <Header handleLogout={handleLogout} />
      <div className={classNames.container}>{children}</div>
      <div className={classNames.quote}>
        Man is born free and everywhere he is in chains. -- Jean-Jacques
        Rousseau
      </div>
      <Footer />
    </>
  );
}

export default App;
