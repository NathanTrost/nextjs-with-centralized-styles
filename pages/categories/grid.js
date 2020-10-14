import Head from "next/head";
import Link from "next/link";
import Layout from "../../layouts/layout";
import GridExample from "../../components/GridExample";

const GridPage = () => {
  return (
    <Layout>
      <Head>
        <title>Grid Examples</title>
      </Head>
      <h1>Grid Example</h1> <GridExample />
    </Layout>
  );
};

export default GridPage;
