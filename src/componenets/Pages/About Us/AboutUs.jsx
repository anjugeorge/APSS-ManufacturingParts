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
    desc: "Because we know mechanical issues don&#39;t stick to business hours.",
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
      <section className=" bg-gray-200 ">
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
              className="grid grid-cols-1 md:grid-cols-3 gap-4  bg-buttonHoverColor text-white p-10 rounded-3xl"
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
              <div className="col-span-1 md:col-span-2 my-auto text-sm/7">
                <p>
                  {" "}
                  Don't let subpar parts hold your business back. Join the ranks
                  of satisfied clients who trust us to keep their operations
                  running at peak efficiency. Your success is our driving force.
                  Partner with APSS today and experience the perfect blend of
                  quality, service, and value.
                </p>
              </div>
              <div
                className="md:col-span-2 md:row-span-1 col-span-1 text-start my-auto md:text-lg/7 text-sm/7"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                {" "}
                <ul className="list-outside">
                  {coreValueList.map((content) => (
                    <li key={content.id} className="flex pb-2 text-sm/7">
                      <FaSquare className="mr-2" />
                      {content.title} : {content.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container py-20 flex flex-col items-center">
          <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 lg:pb-10">
            Customer-Centric Approach
          </h1>
          <p className="text-center text-sm/7 pb-5">
            Our deep industry partnerships with leading manufacturers have
            allowed us to stay at the forefront of technological advancements,
            ensuring you always have access to the latest and most reliable
            parts. With over two decades of experience, we have honed our
            expertise in critical areas such as:
          </p>
          <div
            className="grid md:grid-cols-3 grid-cols-1 gap-4"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {customerCentricApproach.map((content) => (
              <div className="flex flex-col bg-white shadow-sm border-l-4 border-buttonColor  rounded-lg  p-6 mx-auto">
                <div key={content.id} className="flex items-center mb-4">
                  {content.icon}
                  <h5 className="ml-3 text-slate-800 font-semibold text-sm/7">
                    {content.title}
                  </h5>
                </div>
                <p className="block text-slate-600 pb-3 text-sm/7">
                  {content.desc}
                </p>
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
