export default async function getBlog(id){
  const res = await fetch(
    `https://basic-blog.teamrabbil.com/api/post-details/${id}`
    );
  if(!res.ok){
    throw new Error("Error featching Blog");
  }
  return res.json();
}