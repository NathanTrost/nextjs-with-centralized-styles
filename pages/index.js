import Head from "next/head";
import Link from "@chakra-ui/core/dist/Link";
import Text from "@chakra-ui/core/dist/Text";
import Heading from "@chakra-ui/core/dist/Heading";

import Layout from "../layouts/layout";

import Container from "../styled/Container";
import Footer from "../styled/Footer";
import Hero from "../styled/Hero";
import Main from "../styled/Main";

import styles from "./index.module.scss";

export default function Home() {
  const name = "Jack Torrence";
  const siteTitle = "Next.js Sample Website";
  return (
    <Layout data-testid="index_layout" home={true} {...{ name, siteTitle }}>
      <Head data-testid="index_head">
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div data-testid="index_container">
        <Heading as="h1" p="20px">
          Welcome to <Link href="https://nextjs.org">Next.js!</Link>
        </Heading>

        <Main data-testid="index_main">
          <p>All work and no play makes Jack a dull boy.</p>
          <p>
            <Link href="/categories/grid">Grid Example</Link>
            <br />
            <Link href="/categories/form">Form Example</Link>
          </p>
        </Main>
      </div>
      <Footer data-testid="index_footer">
        <Text>
          <Link
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            isExternal={true}
          >
            Powered by
            <img
              src="/images/profile.jpg"
              alt="Maniac Jack"
              className={styles.logo}
            />
          </Link>
        </Text>
      </Footer>
    </Layout>
  );
}
