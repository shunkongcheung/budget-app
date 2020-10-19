import type { AppProps } from "next/app";

import Layout from "../containers/Layout";

import { UserContext, useUserProvider } from "../contexts/userContext";

import "../index.css";

function MyApp({ Component, pageProps }: AppProps) {
  const userProvider = useUserProvider();

  return (
    <UserContext.Provider value={userProvider}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  );
}

export default MyApp;
