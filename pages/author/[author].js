import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";

export default function Author({ allPosts, author }) {
  const filteredPosts = allPosts.filter((post) => post.author === author);

  return (
    <>
      <Layout>
        <Head>
          <title>{`${author} | STC Zpěvníček`}</title>
        </Head>
        <Container>
          <Header />
          {allPosts.length > 0 && (
            <MoreStories author={author} posts={filteredPosts} />
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const author = params.author;
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: {
      author,
      allPosts,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => {
      return {
        params: {
          author: post.author,
        },
      };
    }),
    fallback: false,
  };
}
