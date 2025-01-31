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
        <div>
          <div className="container grid grid-cols-1 md:grid-cols-3 bg-[#020202] md:py-16">
            <div className="flex flex-col col-span-2 py-10 md:py-10 text-center md:text-start ">
              <h1 className="lg:text-5xl  md:text-4xl sm:text-3xl pb-3  text-white">
                Get Your Tailored Quote Today!
              </h1>
              <p className="pb-3 md:w-5/6 text-sm/7 text-stone-300">
                At APSS, we are your one-stop shop for all things mechanical.
                Whether you need industrial machinery parts, general mechanical
                spares, or automotive components, we have got you covered.
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

export default ProcessHero;
