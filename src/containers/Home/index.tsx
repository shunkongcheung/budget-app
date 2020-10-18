import Head from "next/head";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hello World</h1>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

export default Home;
