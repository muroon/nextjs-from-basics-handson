import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js ハンズオン</title>
        <meta name="description" content="Next.jsのハンズオンプロジェクト" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ようこそ！<br />
          Next.js ハンズオンへ
        </h1>

        <p className={styles.description}>
          このプロジェクトでは、Next.jsの基本を学びます。
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Vercel
        </a>
      </footer>
    </div>
  )
}