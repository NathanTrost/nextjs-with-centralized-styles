import Head from "next/head";
import Layout from "../../layouts/layout";
import FormExample from "../../components/FormExample";

const FormPage = () => {
  return (
    <Layout>
      <Head>
        <title>Form Example</title>
      </Head>
      <h1>Form Example</h1>
      <FormExample />
    </Layout>
  );
};

export default FormPage;
