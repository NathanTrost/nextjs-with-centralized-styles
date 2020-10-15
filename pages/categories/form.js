import Head from "next/head";
import Layout from "../../layouts/layout";
import FormExample from "../../components/FormExample";

const FormPage = () => {
  return (
    <Layout>
      <Head>
        <title>Second Post</title>
      </Head>
      <h1>Second Post</h1>
      <FormExample />
    </Layout>
  );
};

export default FormPage;
