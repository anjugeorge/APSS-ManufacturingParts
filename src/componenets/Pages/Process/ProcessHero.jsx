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
        <div className="">
          <div className=" grid grid-cols-1 md:grid-cols-2  ">
            <div
              className="mx-auto  "
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <img
                className="h-auto  w-auto"
                src="/assets/MainBg3.png"
                alt="image description"
              />
            </div>
            <div className=" text-center md:text-start px-8 my-auto ">
              <div
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
                className="py-10"
              >
                {" "}
                <h1 className="text-3xl pb-3   font-varela  ">
                  Get Your Tailored Quote Today!
                </h1>
                <p className="pb-3  text-sm/7 ">
                  At APSS, we are your one-stop shop for all things mechanical.
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

export default ProcessHero;
