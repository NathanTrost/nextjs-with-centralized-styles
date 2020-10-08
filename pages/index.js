import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
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
          <p>All work and no play makes Jack a dull boy.</p>
          <p>
            <Link href="/categories/first-post">
              <a>First Post!</a>
            </Link>
            <br />
            <Link href="/categories/second-post">
              <a>Second Post!</a>
            </Link>
          </p>
        </section>
      </main>

      <footer>
        <a
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
