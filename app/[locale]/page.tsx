import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "../../src/components/Hero";
import { Services } from "../../src/components/Services";
import { Works } from "../../src/components/Works";
import { JsonLd, generateWebPageJsonLd } from "../../src/lib/seo";
// Lazy load components below the fold for better performance
const TechMarquee = dynamic(() => import("../../src/components/TechMarquee").then(m => ({ default: m.TechMarquee })), {
  ssr: true,
});
const Products = dynamic(() => import("../../src/components/Products").then(m => ({ default: m.Products })), {
  ssr: true,
});
const Process = dynamic(() => import("../../src/components/Process").then(m => ({ default: m.Process })), {
  ssr: true,
});
const WhyUs = dynamic(() => import("../../src/components/WhyUs").then(m => ({ default: m.WhyUs })), {
  ssr: true,
});
const About = dynamic(() => import("../../src/components/About").then(m => ({ default: m.About })), {
  ssr: true,
});
const Testimonials = dynamic(() => import("../../src/components/Testimonials").then(m => ({ default: m.Testimonials })), {
  ssr: true,
});
const CTA = dynamic(() => import("../../src/components/CTABanner").then(m => ({ default: m.CTA })), {
  ssr: true,
});
const Footer = dynamic(() => import("../../src/components/Footer").then(m => ({ default: m.Footer })), {
  ssr: true,
});

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
