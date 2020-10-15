import Head from "next/head";
import Layout from "../layouts/layout";
import Link from "@chakra-ui/core/dist/Link";
import styles from "./index.module.scss";
import utilStyles from "../styles/utils.module.scss";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import theme from "../theme";

export default function Home() {
  const name = "Jack Torrence";
  const siteTitle = "Next.js Sample Website";
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Layout home={true} {...{ name, siteTitle }}>
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
              <Link href="/categories/grid">Grid Example</Link>
              <br />
              <Link href="/categories/form">Form Example</Link>
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
    </ThemeProvider>
  );
}
