import React from "react";
import { server } from "../../../config/index";
import { useRouter } from "next/router";
import Link from "next/Link";
import Meta from "../../../components/Meta";

/* This page is located in a dynamic folder (article/[id]) that will dinamically render every any cliked post or article */
const article = ({ article }) => {
  /*   const router = useRouter();
  const { id } = router.query; */

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <Link href="/">
        <a>Go Back</a>
      </Link>
    </>
  );
};

/* In this page we are using the getServerSideProps function so that we get the article or post page at request time (if requested only) */

/* export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
}; */

/* Using a combination of getStaticProps and getStaticPaths help us to dinamically generate the paths with the data, which will be faster since it's being generated at build time */

/* Adding the "next export" command to our package.json file and running it will dinamically generate a static site into a folder called "out", including the paths and data generated from the API server*/

/* export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}; */

/* Dinamically generate posts pages using our API instead of the JSON placeholder. */

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles/`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
