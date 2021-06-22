import PostTitle from '../components/post-title'

export default function PostHeader({ title, author }) {
  return (
    <>
      <PostTitle>Písnička {title}</PostTitle>
      <div className="max-w-2xl mx-auto">
      </div>
    </>
  )
}
