import { Hero } from "../../src/components/Hero";
import { TechMarquee } from "../../src/components/TechMarquee";
import { Services } from "../../src/components/Services";
import { Works } from "../../src/components/Works";
import { Products } from "../../src/components/Products";
import { Process } from "../../src/components/Process";
import { WhyUs } from "../../src/components/WhyUs";
import { About } from "../../src/components/About";
import { Testimonials } from "../../src/components/Testimonials";
import { CTA } from "../../src/components/CTABanner";
import { Footer } from "../../src/components/Footer";

const App = () => {
  return (
    <main>
      <Hero />
      <Services />
      <TechMarquee />
      <Works />
      <Products />
      <Process />
      <WhyUs />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default App;
