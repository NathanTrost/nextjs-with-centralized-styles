import Head from "next/head";
import Link from "next/link";
import Layout from "../../layouts/layout";
import Content from "../../components/content";

const GridExample = () => {
  return (
    <Layout>
      <Head>
        <title>Grid Examples</title>
      </Head>
      <h1>Grid Example</h1> <Content />
    </Layout>
  );
};

export default GridExample;
