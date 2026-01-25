import Header from "@/components/Header";

import Hero from "@/components/Hero";
import Pledge from "@/components/Pledge";
import Doctors from "@/components/Doctors";
import ClinicalExcellence from "@/components/ClinicalExcellence";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import EventPopup from "@/components/EventPopup";

export default function Home() {
  return (
    <main className="min-h-screen">
      <EventPopup />
      <Header />

      <Hero />
      <Pledge />
      <Doctors />
      <ClinicalExcellence />
      <Reviews />
      <Footer />
    </main>
  );
}
