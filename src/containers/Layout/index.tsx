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
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <meta
          name="keywords"
          content="nextjs, reactjs, firebase, firestore, authentication"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={classNames.main}>
        <div className={classNames.container}>{children}</div>
      </main>
      <Footer />
    </>
  );
}

export default App;
