import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food ordering App</title>
        <meta name="description" content="Best ordering app in Sri Lanka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      home page
    </div>
  );
}
