import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        Seznam písniček:
      </h2>
      <div className="flex flex-col justify-center items-center">
        <ul className="">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              name={post.name}
              author={post.author}
              slug={post.slug}
              text={post.text}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
