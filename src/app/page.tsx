import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mesh from "./utils/Mesh";
import OurProcess from "@/components/OurProcess";
import TrustedPartners from "@/components/TrustedPartners";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import RequestDemo from "@/components/RequestDemo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full h-full bg-gradient-to-b from-[#e3ebf5] to-[#fff8fa] min-h-screen flex flex-col items-center justify-start text-center">
      {/* Mesh-like background */}
      <Mesh />
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* Our Process */}
      <OurProcess />
      {/* Trusted Partners */}
      <TrustedPartners />
      {/* Features */}
      <Features />
      {/* Benefits */}
      <Benefits />
      {/* Faq */}
      <FAQ />
      {/* Testimonials */}
      <Testimonials />
      {/* Request Demo */}
      <RequestDemo />
      {/* Footer */}
      <Footer />
    </main>
  );
}
