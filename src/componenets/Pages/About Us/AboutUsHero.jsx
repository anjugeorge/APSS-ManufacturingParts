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
        <div>
          <div className="container grid grid-cols-1 md:grid-cols-3 bg-[#020202] md:py-16">
            <div className="flex flex-col col-span-2 py-10 md:py-10 text-center md:text-start ">
              <h1 className="lg:text-5xl  md:text-4xl sm:text-3xl pb-3  text-white">
                Your Trusted Partner in Mechanical Parts
              </h1>
              <p className="pb-3 md:w-5/6 text-sm/7 text-stone-300">
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

export default AboutUsHero;
