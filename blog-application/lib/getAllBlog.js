export default async function getAllBlogs(){
  const res = await fetch(
    "https://basic-blog.teamrabbil.com/api/post-newest"
    );
  if(!res.ok){
    throw new Error("Error featching Blogs");
  }
  return res.json();
}