import ReactSearchBox from "react-search-box";
import Router from "next/router";
export default function SearchBox({ author, posts }) {
  return (
    <ReactSearchBox
      placeholder={`Prohledávej ${author ? "autora" : "zpěvníček"}`}
      data={posts.map((post) => {
        let value = `${post.name} - ${post.author}`;
        if (author) value = post.name;
        return { value, key: post.slug };
      })}
      onSelect={(record) => {
        Router.push(`/song/${record.key}/`);
      }}
    />
  );
}
