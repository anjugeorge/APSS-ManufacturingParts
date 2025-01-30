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
        <div className=" relative overflow-hidden ">
          <div className="container grid grid-cols-1 md:grid-cols-2  pt-10">
            <div className=" text-black  text-center md:text-start ">
              {" "}
              <h1 className="lg:text-4xl md:text-2xl text-lg pb-3 font-bold">
                Your Trusted Partner in Mechanical Parts
              </h1>
              <p className="pb-3  text-sm/7 ">
                At APSS Solutions, we are not just a mechanical parts reseller –
                we are your dedicated partner in powering innovation and
                efficiency. Our journey began with a simple vision: to provide
                top-quality mechanical components with unparalleled service and
                expertise.
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

export default AboutUsHero;
