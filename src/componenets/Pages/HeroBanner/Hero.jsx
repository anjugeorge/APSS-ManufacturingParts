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
          <div className="container grid grid-cols-1 md:grid-cols-3 bg-[#020202] md:py-16">
            <div className="flex flex-col col-span-2 py-10 md:py-10 text-center md:text-start">
              <h1 className="text-3xl md:text-5xl pb-3  font-bold font-poppins text-white">
                Your One-Stop Shop for Premium Mechanical Parts
              </h1>
              <p className="pb-3 md:w-5/6 text-sm/7 text-stone-300">
                Welcome to APSS, where quality meets efficiency in the world of
                mechanical parts. As industry leaders in supplying industrial
                machinery components and automotive parts, we are not just
                selling products – we are fueling the engines of progress.
              </p>
              <div className="pb-5">
                {" "}
                <FormDialog />
              </div>
            </div>
            <div
              className="mx-auto"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <img
                className="h-auto rounded-lg w-full max-w-lg"
                src="/assets/679babb450e29.png"
                alt="image description"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
