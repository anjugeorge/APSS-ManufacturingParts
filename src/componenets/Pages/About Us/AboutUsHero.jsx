import React, { useEffect } from "react";
import FormDialog from "../Form/RequestAQuoteForm";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutUsHero = () => {
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
                  Your Trusted Partner in Mechanical Parts
                </h1>
                <p className="pb-3  text-sm/7 text-stone-300 ">
                  At APSS Solutions, we are not just a mechanical parts reseller
                  – we are your dedicated partner in powering innovation and
                  efficiency.
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
                Our journey began with a simple vision: to provide top-quality
                mechanical components with unparalleled service and expertise.
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

export default AboutUsHero;
