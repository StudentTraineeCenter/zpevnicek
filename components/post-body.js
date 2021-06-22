export default function PostBody({ content, note, author }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gray-200 text-3xl mb-12">
        {author && (
          <div className="mb-3">
            <span title="Autor">👤:</span> {author}
          </div>
        )}
        {note && (
          <div>
            <span title="Poznámka">📝:</span> {note}
          </div>
        )}
      </div>
      <div className="text-xl">{content}</div>
    </div>
  );
}
