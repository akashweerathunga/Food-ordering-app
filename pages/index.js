import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Tables from '../components/Tables';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food ordering App</title>
        <meta name="description" content="Best ordering app in Sri Lanka" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
    </div>
  );
}
