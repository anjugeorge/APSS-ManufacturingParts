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
        <div className=" relative overflow-hidden">
          <div className="container   grid grid-cols-1 md:grid-cols-2  pt-10">
            <div className=" text-black  text-center md:text-start  ">
              {" "}
              <h1 className="lg:text-4xl md:text-2xl text-lg pb-3 font-bold">
                Get Your Tailored Quote Today!
              </h1>
              <p className="pb-3  text-sm/7 ">
                At APSS, we are your one-stop shop for all things mechanical.
                Whether you need industrial machinery parts, general mechanical
                spares, or automotive components, we have got you covered.
              </p>
              <div className="pb-5">
                <FormDialog />
              </div>
            </div>
            <div
              className="mx-auto  md:pt-28"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <img
                className="h-auto rounded-lg w-full max-w-xs  md:pt-20"
                src="/assets/header.png"
                alt="image description"
              />
            </div>
            <div class="bg-black w-[2500px] h-[2500px]  rounded-3xl absolute top-[15%] left-[-10%] md:top-[30%] md:left-[10%] rotate-[77deg] -z-10"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProcessHero;
