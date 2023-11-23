import { useRef } from "react";
import EGIcon from "./eg-icon.png";
import { autoScroll } from "./utils/useScroll";

const App = () => {
  const nextSectionRef = useRef<HTMLElement | null>(null);

  const handleScroll = () => {
    if (nextSectionRef.current) {
      autoScroll(nextSectionRef);
    }
  };

  return (
    <div>
      <section className="h-screen relative w-full font-popin flex items-center">
        <div className="w-full text-center px-6 lg:px-12 xl:px-28 flex flex-col justify-center items-center">
          <img src={EGIcon} className="w-28" />
          <div className="mt-4 mb-12 font-semibold text-xl tracking-wider flex">
            <p>ELiteGroup</p>
            <span className="px-1 text-black bg-neutral-100 rounded-sm">
              Tech
            </span>
          </div>
          <h1 className="font-semibold text-3xl lg:text-5xl xl:text-7xl tracking-widest">
            Your Vision, Our Expertise
          </h1>
          <p className="mt-4 text-neutral-300 sm:w-2/3 lg:text-xl xl:text-2xl xl:w-1/2 tracking-wider">
            High-Quality App Creation and Software Product Development Services
            for Your Business
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
        className="h-screen w-full font-popin bg-neutral-900 flex items-center"
      >
        <div className="w-full text-center px-28 flex flex-col justify-center items-center">
          <h1 className="font-semibold tracking-widest">Section 2</h1>
        </div>
      </section>
    </div>
  );
};

export default App;
