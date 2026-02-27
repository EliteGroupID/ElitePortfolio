"use client";

import dynamic from "next/dynamic";
import {
  companyDomainText,
  companyNameText,
  devIconList,
  devIconURL,
  labelWCountData,
  servicesList,
  sloganDescriptionText,
  sloganText,
} from "../src/constants";
import Footer from "../src/components/Footer";
import ContactUs from "../src/components/ContactUs";
import Navbar from "../src/components/Navbar";
import AboutUs from "../src/components/AboutUs";
import WhyChooseUs from "../src/components/WhyChooseUs";
import OurTeam from "../src/components/OurTeam";
import Testimonials from "../src/components/Testimonials";
import CTABanner from "../src/components/CTABanner";

const EGIcon = "/assets/eg-icon.png";
const MainBg = "/assets/mainbg.jpg";

const LabelWithCount = dynamic(
  () => import("../src/components/LabelWithCount"),
  { ssr: false }
);

const OurProductSection = dynamic(
  () => import("../src/components/OurProductSection"),
  { ssr: false }
);

const App = () => {
  const handleScroll = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section
        id="hero"
        style={{
          backgroundImage: `url(${MainBg})`,
          backgroundSize: "cover",
        }}
        className="h-[100dvh] relative w-full font-popin flex items-center z-0"
      >
        <div className="absolute inset-0 z-[-10] backdrop-filter backdrop-blur-[6px] bg-opacity-[0.7] bg-black"></div>
        <div className="w-full text-center px-6 lg:px-12 xl:px-28 flex flex-col justify-center items-center">
          <img src={EGIcon} className="w-28" />
          <div className="mt-4 mb-12 font-semibold text-xl tracking-wider flex">
            <p>{companyNameText}</p>
            <span className="px-1 text-black bg-neutral-100 rounded-sm">
              {companyDomainText}
            </span>
          </div>
          <h1 className="font-semibold text-3xl lg:text-5xl xl:text-7xl tracking-widest">
            {sloganText}
          </h1>
          <p className="mt-4 text-neutral-300 sm:w-2/3 lg:text-xl xl:text-2xl xl:w-1/2 tracking-wider">
            {sloganDescriptionText}
          </p>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <button
            onClick={handleScroll}
            className="animate-bounce hover:bg-neutral-800 active:bg-neutral-900 transition-all duration-200 px-4 py-2 rounded-full border border-neutral-200"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* About Us */}
      <AboutUs />

      {/* Stats */}
      <section id="stats" className="w-full bg-neutral-800 font-popin">
        <div className="w-full text-center py-8 gap-y-6 lg:px-16 xl:px-28 flex flex-col sm:flex-row sm:gap-x-10 lg:gap-x-32 justify-center items-center">
          {labelWCountData.map((val, idx) => (
            <LabelWithCount key={idx} label={val.label} value={val.value} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="w-full py-20 font-popin">
        <div className="text-center mb-10 px-4">
          <div className="text-xl lg:text-2xl font-semibold">
            Software Development Services
          </div>
          <p>
            Empower your team&apos;s potential or craft your project anew, EG
            Tech stands as a premier software development ally with boundless
            expertise.
          </p>
        </div>
        <div className="w-full mb-20 grid sm:grid-cols-2 gap-y-8 xl:grid-cols-4 gap-x-8 lg:gap-x-16 px-8 xl:px-20">
          {servicesList.map((val, idx) => (
            <div
              key={idx}
              className="bg-neutral-700 p-8 hover:-translate-y-2 duration-200 transition-all flex flex-col items-center rounded shadow shadow-slate-400"
            >
              <div className="h-32 w-1/3 mb-8">
                <img src={`${devIconURL}${val.icon}`} />
              </div>
              <h1 className="font-semibold tracking-wide text-center text-xl">
                {val.title}
              </h1>
              <p className="text-center">{val.stack}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section
        id="tech-stack"
        className="bg-neutral-800 bg-opacity-75 font-popin"
      >
        <div className="flex px-4 flex-wrap gap-y-8 gap-x-8 xl:gap-x-16 justify-center py-8">
          {devIconList.map((url, idx) => (
            <img key={idx} src={`${devIconURL}${url}`} className="w-14" />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Our Products */}
      <div id="products">
        <OurProductSection />
      </div>

      {/* Our Team */}
      <OurTeam />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <CTABanner />

      {/* Contact Us */}
      <section id="contact">
        <ContactUs />
      </section>

      <Footer />
    </div>
  );
};

export default App;
