import React, { ReactElement } from "react";
import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";
import classNames from "./Layout.module.css";

interface AppProps {
  children: ReactElement;
}

function App({ children }: AppProps) {
  return (
    <>
      <Head>
        <title>Budget App</title>
        <meta
          name="description"
          content="An example of using nextjs, reactjs, firebase, firestore, authentication to build a budget app"
        />
        <meta
          name="keywords"
          content="nextjs, reactjs, firebase, firestore, authentication"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
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
