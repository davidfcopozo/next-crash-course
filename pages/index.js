import { server } from "../config/index";
import ArticleList from "../components/ArticleList";
import Meta from "../components/Meta";

export default function Home({ articles }) {
  return (
    <div>
      {/* Next head component allows you to use meta tags, description, page title, etc */}
      <Meta title="Home" />
      <ArticleList articles={articles} />
    </div>
  );
}

/* This function allows you to render the page at build time from the server, means that is server side rendered but at build time instead of request time. It fetches the data from an API and returns an object with the fetched data*/

export const getStaticProps = async () => {
  /* We just had to change the API path from https://jsonplaceholder.typicode.com/posts?_limit=6 to show all of the articles*/
  const res = await fetch(`${server}/api/articles/`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
