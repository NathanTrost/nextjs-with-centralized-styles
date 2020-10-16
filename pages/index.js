import Head from "next/head";
import Layout, { siteTitle } from "../layouts/layout";
import Link from "next/link";
import styles from "./index.module.scss";
import utilStyles from "../styles/utils.module.scss";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <section className={utilStyles.headingMd}>
          <p className="content">All work and no play makes Jack a dull boy.</p>
          <p className="content">
            <Link href="/categories/grid">
              <a>Grid Example</a>
            </Link>
            <br />
            <Link href="/categories/form">
              <a>Form Example</a>
            </Link>
          </p>
        </section>
      </main>

      <footer>
        <a
          className="content"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img
            src="/images/profile.jpg"
            alt="Maniac Jack"
            className={styles.logo}
          />
        </a>
      </footer>
    </Layout>
  );
}
