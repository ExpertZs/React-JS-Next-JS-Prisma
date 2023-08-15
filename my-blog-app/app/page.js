import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <Link href="blog">Go to blog</Link>
      {/* <Link href="/blog">
        <a>Go to Blog</a>
      </Link> */}
    </div>
  )
}
