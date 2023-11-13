import Head from 'next/head';
import { Nunito } from 'next/font/google';

import styles from '@/styles/Home.module.scss';
import ThemeSwitch from '@/components/ThemeSwitch';
import Logo from '@/public/bw-logo.svg';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>busywork</title>
        <meta name="description" content="Track the progress of work." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${nunito.variable} font-sans`}>
        <ThemeSwitch />
        <br />
        <Logo className="h-32 w-auto" alt="busywork" />
        <br />
        <h1>in progress</h1>
      </main>

      <footer className={styles.footer}>
        <div>&copy; {new Date().getFullYear()} busywork</div>
      </footer>
    </div>
  );
}
