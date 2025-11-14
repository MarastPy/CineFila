import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { News } from "@/components/News";
import { Mission } from "@/components/Mission";
import { Services } from "@/components/Services";
import { Catalogue } from "@/components/Catalogue";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <News />
      <Mission />
      <Services />
      <Catalogue />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
