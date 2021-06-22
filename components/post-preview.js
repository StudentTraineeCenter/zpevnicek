import Link from "next/link";

export default function PostPreview({ name, author, slug }) {
  return (
    <li>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="text-3xl hover:underline">
          - Píseň {name} - {author}
        </a>
      </Link>
    </li>
  );
}
