import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";

export default function Offline() {
  return (
    <>
      <Layout>
        <Head>
          <title>STC Zpěvníček</title>
        </Head>
        <Container>
          <Intro />
          <div className="text-2xl">
            Vypadá to, že nejsi připojen k internetu, (a možná) se ti tato
            písnička ještě nezapsala do paměti zařízení. Zkus to prosím znovu,
            později.
          </div>
        </Container>
      </Layout>
    </>
  );
}
