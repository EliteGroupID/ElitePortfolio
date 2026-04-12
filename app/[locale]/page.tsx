import type { Metadata } from "next";
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
import { JsonLd, generateWebPageJsonLd } from "../../src/lib/seo";

export const metadata: Metadata = {
  title: "Home",
  description: "Transform your ideas into exceptional digital experiences. ELITECH ID delivers premium web development, UI/UX design, and IoT solutions for businesses worldwide.",
  openGraph: {
    title: "ELITECH ID. - Premium Digital Product Studio",
    description: "Transform your ideas into exceptional digital experiences. We deliver premium web development, UI/UX design, and IoT solutions.",
  },
};

const App = () => {
  return (
    <>
      <JsonLd
        data={generateWebPageJsonLd({
          name: "ELITECH ID. - Home",
          description: "Transform your ideas into exceptional digital experiences. ELITECH ID delivers premium web development, UI/UX design, and IoT solutions.",
          url: "https://elitetech.dev",
        })}
      />
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
    </>
  );
};

export default App;
