import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import BrandStory from "@/components/BrandStory";
import ColorCollection from "@/components/ColorCollection";
import Testimonials from "@/components/Testimonials";
import LifestyleGallery from "@/components/LifestyleGallery";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <BrandStory />
      <ColorCollection />
      <Testimonials />
      <LifestyleGallery />
      <Newsletter />
      <Footer />
    </main>
  );
}
