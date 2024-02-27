import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Testimonial from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import ReachFeatures from "@/components/home/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ReachFeatures />
      <Testimonial />
      <CallToAction />
      <Footer />
    </>
  );
}
