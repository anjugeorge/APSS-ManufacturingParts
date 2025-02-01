import React, { useEffect } from "react";
import FormDialog from "../Form/RequestAQuoteForm";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main>
        <div>
          <div className="container grid grid-cols-1 md:grid-cols-3 bg-[url('/assets/APSSBg.png')] bg-cover bg-center md:py-16 md:gap-12">
            <div className=" text-center md:text-start pt-10">
              <div
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                {" "}
                <h1 className="text-3xl pb-3  text-white font-varela  animate-pulse">
                  Powering Industries, Driving Innovation
                </h1>
                <p className="pb-3  text-sm/7 text-stone-300 ">
                  Welcome to{" "}
                  <strong className=" animate-pulse">
                    APSS, Your One-Stop Shop for Premium Mechanical Parts
                  </strong>
                  , where quality meets efficiency in the world of mechanical
                  parts.
                </p>
              </div>
            </div>

            <div
              className="mx-auto order-3 md:order-2 md:py-10"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <img
                className="h-auto rounded-lg w-full max-w-lg  animate-pulse  md:order-2"
                src="/assets/b.png"
                alt="image description"
              />
            </div>
            <div
              className="md:pt-48 pb-10  text-center md:text-start order-2 md:order-3"
              data-aos="flip-right"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              {" "}
              <p className="pb-3  text-sm/7 text-stone-300 ">
                As industry leaders in supplying industrial machinery components
                and automotive parts, we are not just selling products, we are
                fueling the engines of progress.
              </p>
              <div className="pb-5">
                {" "}
                <FormDialog />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
