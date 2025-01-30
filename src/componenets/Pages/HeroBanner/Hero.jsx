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
        <div className=" relative overflow-hidden">
          <div className="container grid grid-cols-1 md:grid-cols-2  pt-10">
            <div className=" text-black text-center md:text-start">
              {" "}
              <h1 className="lg:text-4xl md:text-2xl text-lg pb-3  font-bold">
                Your One-Stop Shop for Premium Mechanical Parts
              </h1>
              <p className="pb-3  text-sm/7">
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

export default Hero;
