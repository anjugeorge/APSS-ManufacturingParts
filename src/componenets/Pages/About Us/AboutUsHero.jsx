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
      {" "}
      <main className="bg-[url('/assets/HeroBg.png')] bg-center bg-cover">
        {" "}
        <div className="grid grid-cols-1 gap-4  mx-auto px-10 lg:px-72 place-items-center py-20 lg:py-28 backdrop-blur-sm">
          <div className="text-center md:text-start my-auto text-white relative z-10 ">
            <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 ">
              Your Trusted Partner in Mechanical Parts
            </h1>
            <p className="pb-3  text-sm/7 text-center">
              At APSS Solutions, we are not just a mechanical parts reseller –
              we are your dedicated partner in powering innovation and
              efficiency. Our deep industry partnerships with leading
              manufacturers have allowed us to stay at the forefront of
              technological advancements, ensuring you always have access to the
              latest and most reliable parts.
            </p>
          </div>
        </div>
      </main>
      {/*<main>
        <div className="">
          <div className=" grid grid-cols-1 md:grid-cols-2  ">
            <div
              className="mx-auto  "
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <img
                className="h-auto  w-auto"
                src="/assets/MainBg2.png"
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
                  Your Trusted Partner in Mechanical Parts
                </h1>
                <p className="pb-3  text-sm/7 ">
                  At APSS Solutions, we are not just a mechanical parts reseller
                  – we are your dedicated partner in powering innovation and
                  efficiency.
                </p>
                <div className="pb-5">
                  {" "}
                  <FormDialog />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>*/}
    </>
  );
};

export default AboutUsHero;
