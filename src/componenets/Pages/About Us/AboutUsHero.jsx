import React from "react";

const AboutUsHero = () => {
  return (
    <>
      <main>
        <div
          className="md:bg-[url(/assets/bg.png)]  bg-[url(/assets/bgMobile.png)] w-full h-[650px] bg-center
         bg-no-repeat  bg-cover md:h-[750px]"
        >
          <div className="container md:py-28 py-20 grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="text-black  text-start">
              {" "}
              <h1 className="lg:text-3xl md:text-2xl text-lg pb-3 md:pl-10 font-bold">
                Your Trusted Partner in Mechanical Parts
              </h1>
              <p className="pb-3 md:text-lg/7 text-sm/7 md:pl-10">
                At MechPro Solutions, we&#39;re not just a mechanical parts
                reseller – we&#39;re your dedicated partner in powering
                innovation and efficiency. Our journey began with a simple
                vision: to provide top-quality mechanical components with
                unparalleled service and expertise.
              </p>
              <div className="pb-5 pl-10">
                {" "}
                <button
                  type="button"
                  className="px-5 py-2.5 text-sm font-medium text-white bg-buttonColor rounded-lg hover:bg-buttonHoverColor"
                >
                  Request Your Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUsHero;
