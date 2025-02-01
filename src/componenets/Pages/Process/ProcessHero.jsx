import React, { useEffect } from "react";
import FormDialog from "../Form/RequestAQuoteForm";
import AOS from "aos";
import "aos/dist/aos.css";
const ProcessHero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main>
        <div className="bg-[url('/assets/APSSBg.png')] bg-cover bg-center">
          <div className="container grid grid-cols-1 md:grid-cols-3  md:py-16 md:gap-12">
            <div className=" text-center md:text-start pt-10">
              <div
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                {" "}
                <h1 className="text-3xl pb-3  text-stone-300 font-varela  animate-pulse">
                  Get Your Tailored Quote Today!
                </h1>
                <p className="pb-3  text-sm/7 text-stone-300 ">
                  At APSS, we are your one-stop shop for all things mechanical.
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
              className="md:pt-52 pb-10  text-center md:text-start order-2 md:order-3"
              data-aos="flip-right"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              {" "}
              <p className="pb-3  text-sm/7 text-stone-300 ">
                Whether you need industrial machinery parts, general mechanical
                spares, or automotive components, we have got you covered.
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

export default ProcessHero;
