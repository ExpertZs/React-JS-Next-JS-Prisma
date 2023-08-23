import getBlog from "@/lib/getBlog";
import Link from "next/link";

export default async function SingleBlog({params}){
  const id = params.id;
  const blog = await getBlog(id);
  return(
    <div>
       <h1 className="font-bold text-lg">{blog.title}</h1>          
              {/* <Image 
              src={blog.img} 
              alt="Next.js Logo"
              width={300}
              height={300}/> */}  
             {/* As there is no details available from give api, I have commented the image to reduce errors */}
              <p>{blog.short}</p>

              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-10"> <Link href="/blog">Return</Link></button>
    </div>

  );
}