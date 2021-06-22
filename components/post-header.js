import PostTitle from '../components/post-title'

export default function PostHeader({ name, author }) {
  return (
    <>
      <PostTitle>Písnička {name}</PostTitle>
      <div className="max-w-2xl mx-auto">
      </div>
    </>
  )
}
