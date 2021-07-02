import Link from "next/link";

export default function PostBody({ content, note, author }) {
  content = content.split("[").join('<em class="chord">');
  content = content.split("]").join("</em>");
  return (
    <div className="max-w-2xl mx-auto">
      <div className="dark:bg-gray-700 bg-gray-200 text-3xl px-4 py-6">
        {author && (
          <Link href={`/author/${author}`} passHref>
            <div className="mb-3 cursor-pointer">
              <span title="Autor">👤:</span> {author}
            </div>
          </Link>
        )}
        {note && (
          <div className="mt-2">
            <span title="Poznámka">📝:</span> {note}
          </div>
        )}
      </div>
      <div
        className="text-xl mt-12 song-text"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </div>
  );
}
