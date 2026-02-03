import HomeContent from "../components/homecompo/HomeContent";
import AboutContent from "../components/aboutcompo/AboutContent"
import ServiceContent from "../components/servicecompo/ServiceContent";
import ProcessingContent from "../components/processingcompo/ProcessingContent"
import PricingSection from "../components/pricingcompo/PricingContent";
import OrderContent from "../components/Ordercompo/OrderContent"
import ContactSection from "../components/contactcompo/ContactContent";


export default function Home() {
  return (
    <>
      <HomeContent />
      <AboutContent />
      <ServiceContent />
      <ProcessingContent />
      <PricingSection />
      <OrderContent />
      <ContactSection />

    </>
  );
}
