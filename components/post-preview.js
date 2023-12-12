import Link from "next/link";

export default function PostPreview({ name, author, slug }) {
  return (
    <div className="">
      <Link
        as={`/song/${slug}`}
        href="/song/[slug]"
        className="text-3xl hover:underline text-[#0078d7]"
      >
        {name} - {author}
      </Link>
    </div>
  );
}
