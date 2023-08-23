import Link from "next/link";

export default function Header(){
  return(
    <nav className="flex space-x-6 bg-green-600 px-10 py-5">
      <div><Link href="/" className="text-white">Home</Link></div>
      <div><Link href="/blog" className="text-white">Blog</Link></div>
      <div><Link href="/about" className="text-white">About</Link></div>
      <div><Link href="/contact" className="text-white">Contact</Link></div>
    </nav>

  );
}