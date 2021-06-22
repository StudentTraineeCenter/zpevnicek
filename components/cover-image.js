import Link from 'next/link'

export default function CoverImage({ title, slug }) {
  return (
    <div className="sm:mx-0">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{title}</a>
        </Link>
    </div>
  )
}
