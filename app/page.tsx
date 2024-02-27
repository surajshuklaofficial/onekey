import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Testimonial from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <>
      <div className="gradient-1">
        <Navbar />
        <Hero />
      </div>
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
    </>
  );
}
