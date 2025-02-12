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
      <main>
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
      </main>
    </>
  );
};

export default ProductHero;
