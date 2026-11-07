import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Strip from "@/components/site/Strip";
import Services from "@/components/site/Services";
import CarCare from "@/components/site/CarCare";
import Lounge from "@/components/site/Lounge";
import WhyUs from "@/components/site/WhyUs";
import Steps from "@/components/site/Steps";
import Contacts from "@/components/site/Contacts";
import Footer from "@/components/site/Footer";
import CallButton from "@/components/site/CallButton";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main>
      <Hero />
      <Strip />
      <Services />
      <CarCare />
      <Lounge />
      <WhyUs />
      <Steps />
      <Contacts />
    </main>
    <Footer />
    <CallButton />
  </div>
);

export default Index;