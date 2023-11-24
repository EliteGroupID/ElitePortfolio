import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Epos from "../epos.png";
import Evot from "../evot.png";

const OurProductSection = () => {
  return (
    <section className="w-full relative h-screen flex flex-col bg-neutral-800 font-popin pt-16">
      <div className="text-center mb-10 px-4">
        <div className=" text-xl lg:text-2xl font-semibold ">
          Software Products
        </div>
        <p>Elevate Your Business Growth with Our Exceptional Products!</p>
      </div>
      <div className="flex-1 slider px-4 md:px-10 lg:px-32">
        <Slide indicators>
          <div>
            <div className="flex flex-col-reverse gap-y-4 xl:flex-row justify-center items-center">
              <div className="flex-1 w-full md:w-2/3 xl:w-1/2 xl:h-[40rem]">
                <img
                  className="object-contain h-full w-full"
                  src={Epos}
                  alt=""
                />
              </div>
              <div className="w-full text-center xl:w-2/5 xl:pr-24">
                <h1 className="font-semibold tracking-wide text-center text-xl">
                  Elite POS
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  delectus similique, corporis minus et odit, praesentium atque
                  ratione doloremque, eligendi ab. Illo vel quibusdam cum
                  explicabo quis numquam amet aut?
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col-reverse gap-y-4 xl:flex-row justify-center items-center">
              <div className="flex-1 w-full md:w-2/3 xl:w-1/2 xl:h-[40rem]">
                <img
                  className="object-contain h-full w-full"
                  src={Evot}
                  alt=""
                />
              </div>
              <div className="w-full text-center xl:w-2/5 xl:pr-24">
                <h1 className="font-semibold tracking-wide text-center text-xl">
                  Elite Vote
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  delectus similique, corporis minus et odit, praesentium atque
                  ratione doloremque, eligendi ab. Illo vel quibusdam cum
                  explicabo quis numquam amet aut?
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default OurProductSection;
