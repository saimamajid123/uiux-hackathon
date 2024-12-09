import Header from "./component/navbar";
import HeroSection from "./component/Hero";
import LogoStrip from "./component/apple";
import FeaturedProducts from "./component/hi";
import Hero from "./component/gyrori";
import TopCategories from "./component/New";
import ProductCard from "./component/img";
import ProductGrid from "./component/cat";
import Footer from "./component/footer";
import Featuredproducts from "./component/hi";
import Cart from "./component/jojo";
import ContactForm from "./component/doo";
import FAQSection from "./component/box";
import FAQPage from "./component/Bob";
import HomePage from "./component/Boc";



export default function Home() {
  return (
<div>
  <Header/>
 <HeroSection/>
 < LogoStrip />
 <FeaturedProducts/>
 <LogoStrip/>
 <Hero/>
 <TopCategories/>
 <Header/>
 < ProductCard image={undefined} name={undefined} price={undefined}/>
 <ProductGrid/>
 <Footer/>
 <Home/>
 <Header/>
 <Hero/>
 <Featuredproducts/>
 <Footer/>
 <Home/>
 < Cart/>
 <Footer/>
 <Home/>
 <ContactForm/>
 <Home/>
 <ContactForm/>
 <Home/>
 <FAQSection/>
 <Footer/>
 <FAQPage/>
 < HomePage/>
 <Header/>
 
 
  
</div>
  );
}
