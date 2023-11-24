import { useRef } from "react";
import EGIcon from "./eg-icon.png";
import MainBg from "./mainbg.jpg";
import { autoScroll } from "./utils/useScroll";
import {
  companyDomainText,
  companyNameText,
  devIconList,
  devIconURL,
  labelWCountData,
  servicesList,
  sloganDescriptionText,
  sloganText,
} from "./constants";
import AnimatedNumbers from "react-animated-numbers";
import OurProductSection from "./components/OurProductSection";

const LabelWithCount = ({ label, value }: { label: string; value: number }) => {
  return (
    <div className="font-semibold flex flex-col items-center tracking-wider">
      <AnimatedNumbers
        transitions={(index) => ({
          type: "spring",
          duration: index + 1,
        })}
        animateToNumber={value}
        fontStyle={{
          fontSize: 40,
          textAlign: "center",
        }}
      />
      <h1 className="uppercase">{label}</h1>
    </div>
  );
};

const App = () => {
  const nextSectionRef = useRef<HTMLElement | null>(null);

  const handleScroll = () => {
    if (nextSectionRef.current) {
      autoScroll(nextSectionRef);
    }
  };

  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${MainBg})`,
          backgroundSize: "cover",
        }}
        className="h-screen relative w-full font-popin flex items-center z-0"
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
      <section
        ref={nextSectionRef}
        className="w-full flex flex-col font-popin min-h-screen"
      >
        <div className="w-full mb-20 bg-neutral-800 text-center py-8 gap-y-6 lg:px-16 xl:px-28 flex flex-col sm:flex-row sm:gap-x-10 lg:gap-x-32 justify-center items-center">
          {labelWCountData.map((val, idx) => (
            <LabelWithCount key={idx} label={val.label} value={val.value} />
          ))}
        </div>
        <div className="flex-1">
          <div className="text-center mb-10 px-4">
            <div className=" text-xl lg:text-2xl font-semibold ">
              Software Development Services
            </div>
            <p>
              Empower your team's potential or craft your project anew, EG Tech
              stands as a premier software development ally with boundless
              expertise.
            </p>
          </div>
          <div className="w-full mb-20 grid sm:grid-cols-2 gap-y-8 xl:grid-cols-4 gap-x-8 lg:gap-x-16 px-8 xl:px-20">
            {servicesList.map((val) => (
              <div className="bg-neutral-700 p-8 hover:-translate-y-2 duration-200 transition-all flex flex-col items-center rounded shadow shadow-slate-400">
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
          <div className="bg-neutral-800 bg-opacity-75 flex px-4 flex-wrap gap-y-8 gap-x-8 xl:gap-x-16 justify-center py-4">
            {devIconList.map((url) => (
              <img src={`${devIconURL}${url}`} className="w-14" />
            ))}
          </div>
        </div>
      </section>
      <OurProductSection />
    </div>
  );
};

export default App;
