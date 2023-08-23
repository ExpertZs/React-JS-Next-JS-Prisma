import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="Flex justify-center items-center">
        <h1 className="text-white">Welcome to My Blog</h1>
        <p className="text-white">I am Md. Zahidul Islam, Currently I am working as a software engineer in BrandCloud Inc.</p>
        
      <div className="p-10 justify-center">
        <div><Link href="/blog" className="text-white">Blog</Link></div>
        <div><Link href="/about" className="text-white">About</Link></div>
        <div><Link href="/contact" className="text-white">Contact</Link></div>
        </div>
      </div>
    </main>
  )
}