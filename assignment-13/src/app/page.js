import Link from "next/link";

export default function Home() {
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="Flex justify-center items-center">
        <h1 className="text-white">Welcome to My Blog</h1>
        <p className="text-white">I am Md. Zahidul Islam, Currently I am working as a software engineer in BrandCloud Inc.</p>
        
      <div className="p-10 justify-center">
      <div><Link href="/read" className="text-white">read</Link></div>
       
        <button  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-10" onClick={"/api/cookie/set"}> Set cookie</button>
        </div>
      </div>
    </main>
  )
}