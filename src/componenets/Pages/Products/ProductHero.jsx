import React, { useEffect } from "react";
import FormDialog from "../Form/RequestAQuoteForm";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductHero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main className="bg-[url('/assets/HeroBg.png')] bg-center bg-cover">
        {" "}
        <div className="grid grid-cols-1 gap-4  mx-auto px-10 lg:px-72 place-items-center pt-12 pb-60">
          <div className="text-center md:text-start my-auto text-black relative z-10 ">
            <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 lg:pb-10">
              Explore Our Products
            </h1>
            <p className="pb-3  text-sm/7 ">
              {" "}
              As industries advance, mechanical manufacturing remains a key
              driver of technological innovation and industrial progress.
            </p>
          </div>
        </div>
      </main>
      {/*<main>
        <div className="bg-[url('/assets/MainBg2.png')] bg-cover md:bg-center  bg-no-repeat">
          <div className=" grid grid-cols-1 md:grid-cols-2  ">
            <div className=" text-end md:text-center px-8 py-32  col-start-2">
              <div
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
                className="py-10"
              >
                {" "}
                <h1 className="text-3xl pb-3   font-varela  ">
                  Explore Our Catalogue
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>*/}
    </>
  );
};

export default ProductHero;
