import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
