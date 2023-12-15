
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
export default function Protected() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Protected page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to a protected page.</h1>
        <p className={styles.description}>Here are your details</p>
      </main>
    </div>
  );
}