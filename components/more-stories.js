import PostPreview from "../components/post-preview";
import Link from "next/link";
import ReactSearchBox from 'react-search-box'
import Router from 'next/router';

export default function MoreStories({ posts, author = null }) {
  return (
    <section>
      <div className="flex flex-wrap text-center justify-between">
        <h2 className="mb-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
          Seznam písniček {author && `od autora ${author}`}:
        </h2>
        <div className="w-screen md:w-1/3 searchBox">
          <ReactSearchBox
            placeholder={`Prohledávej ${author ? "autora" : "zpěvníček"}`}
            data={posts.map((post) => {
              let value = `${post.name} - ${post.author}`;
              if (author) value = post.name;
              return { value, key: post.slug }
            })}
            onSelect={record => {
              Router.push(`/song/${record.key}/`)
            }
            }
          />
        </div>
      </div>
      {!author && (
        <div className="flex mt-4 text-2xl justify-center md:justify-end">
          <Link href="/form/">
            <a className="flex items-center">
              <span className="md:hidden">Přidat</span>
              <svg
                className="w-10 h-10"
                fill="#0078D4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </div>

      )}
      <div className="flex flex-col justify-center items-center">
        <div>
          {posts.map((post) => {
            let doCapital = true;
            if (posts.indexOf(post) > 0) {
              doCapital = !(
                post.name[0] === posts[posts.indexOf(post) - 1].name[0]
              );
            }

            return (
              <div className={doCapital && "mt-4"} key={post.slug}>
                {doCapital && (
                  <span className="text-4xl">{post.name[0]}</span>
                )}

                <PostPreview
                  name={post.name}
                  author={post.author}
                  slug={post.slug}
                  text={post.text}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
