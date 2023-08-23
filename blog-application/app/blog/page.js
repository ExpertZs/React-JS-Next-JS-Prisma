import getAllBlogs from "@/lib/getAllBlog";
import Image from "next/image";
import Link from "next/link";

export default async function Blog(){
  const blogs = await getAllBlogs();
  
  return(
    <div>
      <section className="justify-center items-center">Welcome to my blog</section>
      <div className="mt-5 grid grid-cols-4 gap-4 p-5">
        {blogs.map((blog) => {
          return(
            <Link href={`/blog/${blog.id}`}>
            <section className="pb-5" key={blog}>      
              <Image 
              src={blog.img} 
              alt="Next.js Logo"
              width={300}
              height={300}/>
              <h1 className="font-bold text-lg">{blog.title}</h1>
              <p>{blog.short}</p>
            </section></Link>
          );
        }
        )
        }
        
      </div>
    </div>

  );
}