import Head from "next/head";
import Layout from "../../layouts/layout";
import GridExample from "../../components/GridExample.js";

const GridPage = () => {
  return (
    <Layout>
      <Head>
        <title>Grid Page</title>
      </Head>
      <h1>Grid Page</h1> <GridExample />
    </Layout>
  );
};

export default GridPage;
