import React, { useEffect } from "react";
import FormDialog from "../Form/RequestAQuoteForm";
import AOS from "aos";
import "aos/dist/aos.css";
import RequestAQuoteForm from "../Form/RequestAQuoteForm";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="relative">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover "
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/BgVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-12 relative z-10 px-5 md:px-20 py-20 lg:py-32 ">
          <div className="text-center md:text-start my-auto text-white">
            <h1 className="lg:text-4xl md:text-4xl text-3xl text-center md:text-start font-bold leading-8">
              Powering Industries, Driving Innovation
            </h1>
            <p className="pb-3  text-sm/7 leading-8">
              Welcome to{" "}
              <span className="font-bold text-md">
                APSS, Your One-Stop Shop for Premium Mechanical Parts
              </span>
              , where quality meets efficiency in the world of mechanical parts.
              As industry leaders in supplying industrial machinery components
              and automotive parts, we are not just selling products, we are
              fueling the engines of progress.
            </p>
            <div className="col-span-1 my-auto text-center  md:text-start gap-4">
              {" "}
              <div className="pb-5">
                {" "}
                <FormDialog />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<main>
        <div className="">
          <div className=" grid grid-cols-1 md:grid-cols-2  ">
            <video className=" w-full h-full  " autoPlay loop muted playsInline>
              <source src="/assets/ball.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className=" text-center md:text-start px-8 my-auto">
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
                className="py-10"
              >
                {" "}
                <h1 className="text-3xl pb-3   font-varela  ">
                  Powering Industries, Driving Innovation
                </h1>
                <p className="pb-3  text-sm/7 ">
                  Welcome to{" "}
                  <span className="animate-pulse font-bold text-md">
                    APSS, Your One-Stop Shop for Premium Mechanical Parts
                  </span>
                  , where quality meets efficiency in the world of mechanical
                  parts. As industry leaders in supplying industrial machinery
                  components and automotive parts, we are not just selling
                  products, we are fueling the engines of progress.
                </p>
                <div className="pb-5">
                  {" "}
                  <FormDialog />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>{" "}
      */}
      {/*<main>
        <div className="bg-[url('/assets/BannerImg.png')]">
          <div className=" grid grid-cols-1 text-black  bg-black/15">
            <div className=" text-center md:text-start mx-auto my-auto ">
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
                className="py-10 "
              >
                <h1 className="text-3xl lg:text-6xl pb-3   font-varela  ">
                  Powering Industries, Driving Innovation
                </h1>
              </div>
            </div>
          </div>
          <div className="grid">
            <img src="/assets/BannerImg.png" />
          </div>
        </div>
        <div className="bg-black">
          <div className=" grid grid-cols-1  ">
            <div className=" text-center px-10 lg:px-72 my-auto   text-white">
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
                className="py-10"
              >
                <p className="pb-3  text-sm/7 ">
                  Welcome to{" "}
                  <span className="animate-pulse font-bold text-md">
                    APSS, Your One-Stop Shop for Premium Mechanical Parts
                  </span>
                  , where quality meets efficiency in the world of mechanical
                  parts. As industry leaders in supplying industrial machinery
                  components and automotive parts, we are not just selling
                  products, we are fueling the engines of progress.
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

      {/*<main>
        <div className="lg:px-32">
          <div className=" grid grid-cols-1 py-28 lg:py-10 ">
            <div className=" text-center md:text-start  my-auto  text-black">
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
                className="py-10"
              >
                {" "}
                <h1 className="text-6xl pb-3   font-varela  ">
                  Powering Industries, Driving Innovation
                </h1>
                <div className="grid lg:grid-cols-2">
                  {" "}
                  <p className="pb-3  text-sm/7 ">
                    Welcome to{" "}
                    <span className="animate-pulse font-bold text-md">
                      APSS, Your One-Stop Shop for Premium Mechanical Parts
                    </span>
                    , where quality meets efficiency in the world of mechanical
                    parts. As industry leaders in supplying industrial machinery
                    components and automotive parts, we are not just selling
                    products, we are fueling the engines of progress.
                  </p>
                </div>
                <div className="pb-5">
                  {" "}
                  <FormDialog />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>*/}

      {/*<main>
        <div className="container">
          <div className=" grid lg:grid-cols-3 py-28 lg:py-10 ">
            <div className=" text-center  my-auto  text-black ">
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
                className="py-10"
              >
                {" "}
                <h1 className="text-5xl    font-varela  ">
                  Powering Industries, Driving Innovation
                </h1>
              </div>
            </div>
            <video
              className="w-full h-full object-cover "
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/Bg6.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
              className="py-10"
            >
              <p className="pb-3  text-sm/7">
                Welcome to{" "}
                <span className="animate-pulse font-bold text-md">
                  APSS, Your One-Stop Shop for Premium Mechanical Parts
                </span>
                , where quality meets efficiency in the world of mechanical
                parts. As industry leaders in supplying industrial machinery
                components and automotive parts, we are not just selling
                products, we are fueling the engines of progress.
              </p>
                  <div className="pb-5">
                  {" "}
                  <FormDialog />
                </div>
            </div>
          </div>
        </div>
      </main>*/}
    </>
  );
};

export default Hero;
