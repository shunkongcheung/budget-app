import type { AppProps } from "next/app";
import Layout from "../containers/Layout";

import "../index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
