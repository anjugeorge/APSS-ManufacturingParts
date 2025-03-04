import React, { useEffect, useState } from "react";
import { FaSquare } from "react-icons/fa";
import Footer from "../Footer/Footer";
import AboutUsHero from "./AboutUsHero";
import { TbDiamondFilled } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

import { MdContactSupport } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoMdReturnLeft } from "react-icons/io";
import RequestQuote from "../RequestQuote/RequestQuote";

const customerCentricApproach = [
  {
    id: 1,
    title: "24/7 Support",
    desc: "Because we know mechanical issues don't stick to business hours.",
    icon: <MdContactSupport />,
  },
  {
    id: 2,
    title: "Expert Consultations",
    desc: "Get personalized advice to find the perfect solution for your needs.",
    icon: <MdOutlineSupportAgent />,
  },
  {
    id: 3,
    title: "Hassle-Free Returns",
    desc: "We stand behind our products with a customer-friendly return policy.",
    icon: <IoMdReturnLeft />,
  },
];

const benefitsSection = [
  {
    id: 1,
    title: "Extensive Inventory",
    desc: "With over 100,000 parts in stock, we have what you need,when you need it.",
  },
  {
    id: 2,
    title: "Lightning-Fast Delivery",
    desc: "Our strategically located warehouses ensure quick turnaround times.",
  },
  {
    id: 3,
    title: "Expert Technical Support",
    desc: "Our team of seasoned engineers is always ready to assist you.",
  },
  {
    id: 4,
    title: "Competitive Pricing",
    desc: "We leverage our industry relationships to offer you the best value.",
  },
];

const expertiseList = [
  {
    id: 1,
    desc: "Precision gears and transmission systems",
  },
  {
    id: 2,
    desc: "High-performance bearings and bushings",
  },
  {
    id: 3,
    desc: "Advanced pneumatic and hydraulic components",
  },
  {
    id: 4,
    title: "Vast Inventory:",
    desc: "With our extensive stock, your search for that crucial part ends here.",
  },
];

const coreValueList = [
  {
    id: 1,
    title: "Quality Without Compromise",
    desc: "We never cut corners when it comes to part quality.",
  },
  {
    id: 2,
    title: "Innovative Solutions",
    desc: "We are always looking for new ways to solve your challenges.",
  },
  {
    id: 3,

    title: "Customer Satisfaction",
    desc: "Your success is the true measure of our success.",
  },
  {
    id: 4,
    title: "Sustainable Practices",
    desc: "We are committed to reducing our environmental footprint.",
  },
];

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <AboutUsHero />
      <section className="bg-gray-100">
        <div className="container py-20 ">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 ">
                Growing Together
              </h1>
              <p className="text-center leading-7">
                From our humble beginnings as a small local supplier, we&#39;ve
                grown to become a national leader in mechanical parts
                distribution. This growth hasn&#39;t just been about expanding
                our inventory – it&#39;s been about expanding our capabilities
                to serve you better.
              </p>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-4  bg-white shadow-sm  p-6 text-slate-800 "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="row-span-1 md:row-span-3 md:col-span-1 mx-auto  my-auto">
                {" "}
                <TbDiamondFilled className="mx-auto text-xl" />
                <h1 className="lg:text-3xl md:text-2xl text-lg text-center md:text-start font-bold">
                  Our Core Values
                </h1>
              </div>
              <div
                className="md:col-span-2 md:row-span-1 col-span-1 text-start my-auto md:text-lg/7 text-sm/7"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                {" "}
                {coreValueList.map((content) => (
                  <div className="flex flex-col bg-white shadow-sm  p-6 text-slate-800 hover:bg-blue-500 hover:text-white">
                    <div key={content.id} className="flex items-center mb-4">
                      <h5 className="  font-semibold text-sm/7">
                        {content.title}
                      </h5>
                    </div>
                    <p className="block  pb-3 text-sm/7">{content.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200">
        <div className="container py-20 flex flex-col items-center">
          <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 lg:pb-10">
            Customer-Centric Approach
          </h1>
          <p className="text-center text-sm/7 pb-5">
            At APSS, we don't just meet expectations – we exceed them.
            Here&#39;s what sets us apart:
          </p>
          <div
            className="grid md:grid-cols-3 grid-cols-1 gap-4"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {customerCentricApproach.map((content) => (
              <div className="flex flex-col bg-white shadow-sm  p-6 text-slate-800 hover:bg-blue-500 hover:text-white">
                <div key={content.id} className="flex items-center mb-4">
                  {content.icon}
                  <h5 className="ml-3  font-semibold text-sm/7">
                    {content.title}
                  </h5>
                </div>
                <p className="block  pb-3 text-sm/7">{content.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RequestQuote />
      <Footer />
    </>
  );
};

export default AboutUs;
