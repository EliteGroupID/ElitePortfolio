"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { Link } from "../../src/i18n/navigation";
import {
  companyDomainText,
  companyNameText,
  labelWCountData,
  servicesList,
} from "../../src/constants";

const techStack = [
  { icon: "php", label: "PHP" },
  { icon: "js", label: "JavaScript" },
  { icon: "java", label: "Java" },
  { icon: "html", label: "HTML5" },
  { icon: "css", label: "CSS3" },
  { icon: "tailwind", label: "Tailwind CSS" },
  { icon: "react", label: "React" },
  { icon: "vue", label: "Vue.js" },
  { icon: "androidstudio", label: "Android" },
  { icon: "electron", label: "Electron" },
  { icon: "arduino", label: "Arduino" },
];
import Footer from "../../src/components/Footer";
import ContactUs from "../../src/components/ContactUs";
import Navbar from "../../src/components/Navbar";
import AboutUs from "../../src/components/AboutUs";
import WhyChooseUs from "../../src/components/WhyChooseUs";
import OurTeam from "../../src/components/OurTeam";
import Testimonials from "../../src/components/Testimonials";
import CTABanner from "../../src/components/CTABanner";

const EGIcon = "/assets/eg-icon.png";
const MainBg = "/assets/mainbg.jpg";

const LabelWithCount = dynamic(
  () => import("../../src/components/LabelWithCount"),
  { ssr: false }
);

const OurProductSection = dynamic(
  () => import("../../src/components/OurProductSection"),
  { ssr: false }
);

const App = () => {
  const t = useTranslations();

  const handleScroll = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const statLabels = [
    t("stats.clients"),
    t("stats.countries"),
    t("stats.products"),
    t("stats.talents"),
  ];

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
            {t("hero.slogan")}
          </h1>
          <p className="mt-4 text-neutral-300 sm:w-2/3 lg:text-xl xl:text-2xl xl:w-1/2 tracking-wider">
            {t("hero.description")}
          </p>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <button
            onClick={handleScroll}
            className="animate-bounce hover:bg-neutral-800 active:bg-neutral-900 transition-all duration-200 px-4 py-2 rounded-full border border-neutral-200"
          >
            {t("hero.cta")}
          </button>
        </div>
      </section>

      {/* About Us */}
      <AboutUs />

      {/* Stats */}
      <section id="stats" className="w-full bg-gray-100 dark:bg-neutral-800 font-popin">
        <div className="w-full text-center py-8 gap-y-6 lg:px-16 xl:px-28 flex flex-col sm:flex-row sm:gap-x-10 lg:gap-x-32 justify-center items-center">
          {labelWCountData.map((val, idx) => (
            <LabelWithCount key={idx} label={statLabels[idx]} value={val.value} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="w-full py-20 font-popin bg-white dark:bg-neutral-900">
        <div className="text-center mb-10 px-4">
          <div className="text-xl lg:text-2xl font-semibold text-neutral-900 dark:text-white">
            {t("services.title")}
          </div>
          <p className="text-neutral-600 dark:text-neutral-300">
            {t("services.subtitle")}
          </p>
        </div>
        <div className="w-full mb-20 grid sm:grid-cols-2 gap-y-8 xl:grid-cols-4 gap-x-8 lg:gap-x-16 px-8 xl:px-20">
          {servicesList.map((val, idx) => (
            <Link
              key={idx}
              href={`/services/${val.slug}`}
              className="bg-gray-50 dark:bg-neutral-700 border border-gray-200 dark:border-neutral-600 p-8 hover:-translate-y-2 duration-200 transition-all flex flex-col items-center rounded shadow shadow-slate-200 dark:shadow-slate-400"
            >
              <div className="h-20 w-20 mb-8 flex items-center justify-center">
                <img
                  src={`https://skillicons.dev/icons?i=${val.skillIcon}&theme=dark`}
                  alt={val.title}
                  className="w-16 h-16"
                />
              </div>
              <h1 className="font-semibold tracking-wide text-center text-xl text-neutral-900 dark:text-white">
                {val.title}
              </h1>
              <p className="text-center text-neutral-600 dark:text-neutral-300">{val.stack}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section
        id="tech-stack"
        className="bg-gray-100 dark:bg-neutral-900 font-popin py-14"
      >
        <div className="text-center mb-8 px-4">
          <h2 className="text-xl lg:text-2xl font-semibold text-neutral-900 dark:text-white">
            {t("techStack.title")}
          </h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-11 gap-4 px-8 xl:px-20 py-10">
          {techStack.map(({ icon, label }) => (
            <div
              key={icon}
              className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-700 hover:scale-105 transition-all duration-200 cursor-default w-24"
            >
              <img
                src={`https://skillicons.dev/icons?i=${icon}&theme=dark`}
                className="w-12 h-12"
                alt={label}
              />
              <span className="text-xs text-neutral-600 dark:text-neutral-300 font-medium">{label}</span>
            </div>
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
