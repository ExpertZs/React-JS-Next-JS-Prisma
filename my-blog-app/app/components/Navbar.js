import Link from "next/link";

export default function Navbar(){
  return(
    <nav className="flex space-x-6">
      <div className="p-10"><Link href="/">Home</Link></div>
      <div className="p-10"><Link href="/blog">Blog</Link></div>
    </nav>

  );
}