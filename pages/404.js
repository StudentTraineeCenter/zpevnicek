import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";

export default function Page404() {
  return (
    <>
      <Layout>
        <Head>
          <title>ERROR 404</title>
          
        </Head>
        
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-800 py-6 sm:py-12">
  <div class="relative bg-blue-500 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
 <h1 class="box-decoration-clone bg-red-600 text-white font-bold text-2xl text-center sm:rounded-lg ">
  Error</h1>
   <h1 class="font-bold text-center text-2xl">404</h1>
  <p> ------------------------------------------------</p>
   <p class= "text-center text-xl">Page not foud </p>
  </div>
</div>

        <Container>
        
        </Container>
      </Layout>
      </>
  );
}
