export default function PostBody({ content, note }) {
  return (
    <div className="max-w-2xl mx-auto">
      {note && (
        <div className="bg-gray-200 text-2xl mb-12">📝 Poznámka: {note}</div>
      )}
      <div className="text-xl">{content}</div>
    </div>
  );
}
