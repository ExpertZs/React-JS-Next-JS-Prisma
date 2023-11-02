import AboutInfo from "@/components/AboutInfo";
import Action from "@/components/Action";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Subscribe from "@/components/Subscribe";
// import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      {/* Header Section */}
      <Header />

      {/* About Info */}
      <AboutInfo />

      {/* Action */}
      <Action />

      {/* News Letter */}
      <Subscribe />

      <Contact />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
