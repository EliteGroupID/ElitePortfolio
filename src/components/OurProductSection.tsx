"use client";

import Link from "next/link";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Epos = "/assets/epos.png";
const Evot = "/assets/evot.png";

const slides = [
  {
    image: Epos,
    name: "Elite POS",
    slug: "elite-pos",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus similique, corporis minus et odit, praesentium atque ratione doloremque, eligendi ab. Illo vel quibusdam cum explicabo quis numquam amet aut?",
  },
  {
    image: Evot,
    name: "Elite Vote",
    slug: "elite-vote",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus similique, corporis minus et odit, praesentium atque ratione doloremque, eligendi ab. Illo vel quibusdam cum explicabo quis numquam amet aut?",
  },
];

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
          {slides.map((slide) => (
            <div key={slide.slug}>
              <div className="flex flex-col-reverse gap-y-4 xl:flex-row justify-center items-center">
                <div className="flex-1 w-full md:w-2/3 xl:w-1/2 xl:h-[40rem]">
                  <img
                    className="object-contain h-full w-full"
                    src={slide.image}
                    alt={slide.name}
                  />
                </div>
                <div className="w-full text-center xl:w-2/5 xl:pr-24">
                  <h1 className="font-semibold tracking-wide text-center text-xl mb-3">
                    {slide.name}
                  </h1>
                  <p className="mb-6">{slide.desc}</p>
                  <Link
                    href={`/products/${slide.slug}`}
                    className="inline-block bg-white text-neutral-900 font-semibold text-sm px-5 py-2 rounded hover:bg-neutral-200 transition-colors duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
};

export default OurProductSection;
