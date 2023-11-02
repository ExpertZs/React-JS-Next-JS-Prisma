import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Service from "@/components/Service";
import {PrismaClient} from "@prisma/client";

async function getData() {
  const prisma=new PrismaClient();
  let blogs= await prisma.service.findMany({
      orderBy: {id: 'desc'}
  })
  return blogs
}


export default async function Home() {
  const data=await getData()
  return (
    <main>
      {/* Header Section */}
      <Header />

      {/* Service */}
      <Service data={data}/>
      {/* Footer Section */}
      <Footer />
    </main>
  );
}
