import Brand from "@/components/Brand";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroList from "@/components/HeroList";
import StatList from "@/components/StatList";
import Subscribe from "@/components/Subscribe";
import WorkList from "@/components/WorkList";

const Page = () => {
  return (
    <>
      <Header/>
      <HeroList />
      <Brand />
      <WorkList />
      <StatList />
      <FeaturedProject />
      <Subscribe />
      <Footer/>
    </>
  );
};

export default Page;
