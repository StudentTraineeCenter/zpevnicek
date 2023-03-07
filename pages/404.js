import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";

export default function Page404() {
  return (
    <>
      <Layout>
        <Head>
          <title>ERROR 404</title>
          <p class= "text-center">Page not found</p>
        </Head>
        <div>ERROR 404</div> 
        <Container>
        
        </Container>
      </Layout>
      </>
  );
}
