import React, { useEffect } from "react";
import FormDialog from "../Form/RequestAQuoteForm";
import AOS from "aos";
import "aos/dist/aos.css";
import RequestAQuoteForm from "../Form/RequestAQuoteForm";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main>
        <div className="">
          <div className=" grid grid-cols-1 md:grid-cols-2  ">
            <div
              className="mx-auto  "
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <img
                className="h-auto  w-auto"
                src="/assets/MainBg.png"
                alt="image description"
              />
            </div>
            <div className=" text-center md:text-start px-8 my-auto">
              <div
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
                className="py-10"
              >
                {" "}
                <h1 className="text-3xl pb-3   font-varela  ">
                  Powering Industries, Driving Innovation
                </h1>
                <p className="pb-3  text-sm/7 ">
                  Welcome to APSS, where quality meets efficiency in the world
                  of mechanical parts. As industry leaders in supplying
                  industrial machinery components and automotive parts, we are
                  not just selling products, we are fueling the engines of
                  progress.
                </p>
                <div className="pb-5">
                  {" "}
                  <FormDialog />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
