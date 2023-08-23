import Link from "next/link";
export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="Flex justify-center items-center">
        <h1 className="text-white">About</h1>
        <p className="text-white">I am Md. Zahidul Islam, Currently I am working as a software engineer in BrandCloud Inc.</p>
        
      <div className="p-10 justify-center">
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-10"> <Link href="/">Return</Link></button>
        </div>
      </div>
    </main>
  )
}