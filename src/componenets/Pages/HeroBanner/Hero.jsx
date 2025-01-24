import React from "react";

const Hero = () => {
  return (
    <>
      <main>
        <div className="bg-black">
          <div className="container lg:px-64 py-10 flex flex-col items-center">
            <div className="text-white lg:py-12 text-center">
              {" "}
              <h1 className="lg:text-3xl md:text-2xl text-lg pb-3 text-center font-bold">
                Your One-Stop Shop for Premium Mechanical Parts
              </h1>
              <p className="pb-3 md:text-lg/7 text-sm/7">
                Welcome to APSS, where quality meets efficiency in the world of
                mechanical parts. As industry leaders in supplying industrial
                machinery components and automotive parts, we are not just
                selling products – we are fueling the engines of progress.
              </p>
              <div className="pb-5">
                {" "}
                <button
                  type="button"
                  className="px-5 py-2.5 text-sm font-medium text-white bg-buttonColor rounded-lg hover:bg-buttonHoverColor"
                >
                  Request Your Quote
                </button>
              </div>
            </div>
            <div className="mx-auto">
              <img
                className="w-full max-w-sm"
                src="/assets/HeaderImage.png"
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
