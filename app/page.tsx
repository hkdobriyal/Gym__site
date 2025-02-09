// import AboutSidebar from "./components/AboutSidebar";
import Bmi from "./components/Bmi";
import Cta from "./components/Cta";
// import FeaturedClass from "./components/FeaturedClass";
import Footer from "./components/Footer";
// import GymTrainers from "./components/GymTrainers";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import MobileNavbar from "./components/MobileNavbar";
// import PricingChart from "./components/PricingChart";
import Sponsors from "./components/Sponsors";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseUs from "./components/WhyChooseUs";
import  ProteinProducts from "./components/ProteinProducts" 
export default function Home() {
  return (
    <main>
      <Header />
      <MobileNavbar /> 
      <Hero />  
      <Cards />
      <WhyChooseUs />
      <ProteinProducts />
      <Sponsors />
      <Cta />
      <Footer />
    </main>
  );
}
