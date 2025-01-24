import React, { useState } from "react";
import { FaSquare } from "react-icons/fa";
import Hero from "../HeroBanner/Hero";
import Footer from "../Footer/Footer";
import AboutUsHero from "./AboutUsHero";
const customerCentricApproach = [
  {
    id: 1,
    title: "24/7 Support:",
    desc: "Because we know mechanical issues don&#39;t stick to business hours.",
  },
  {
    id: 2,
    title: "Expert Consultations:",
    desc: "Get personalized advice to find the perfect solution for your needs.",
  },
  {
    id: 3,
    title: "Hassle-Free Returns",
    desc: "We stand behind our products with a customer-friendly return policy.",
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
    title: "Competitive Pricing:",
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
    title: "Quality Without Compromise:",
    desc: "We never cut corners when it comes to part quality.",
  },
  {
    id: 2,
    title: "Innovative Solutions:",
    desc: "We&#39;re always looking for new ways to solve your challenges.",
  },
  {
    id: 3,

    title: "Customer Satisfaction:",
    desc: "Your success is the true measure of our success.",
  },
  {
    id: 4,
    title: "Sustainable Practices:",
    desc: "We&#39;re committed to reducing our environmental footprint.",
  },
];

const AboutUs = () => {
  return (
    <>
      <AboutUsHero />
      <section>
        <div className="container lg:px-32 py-20">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="row-span-1 md:row-span-3 md:col-span-1 mx-auto  my-auto">
                {" "}
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
              <div className="md:col-span-2 md:row-span-1 col-span-1 text-center md:text-start my-auto md:text-lg/7 text-sm/7">
                {" "}
                <ul className="list-outside">
                  {coreValueList.map((content) => (
                    <li
                      key={content.id}
                      className="flex items-center pb-2  text-sm/7"
                    >
                      <FaSquare className="mr-2" />
                      {content.title}:{content.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200">
        <div className="container lg:px-32 py-20 flex flex-col items-center">
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
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {customerCentricApproach.map((content) => (
              <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg  p-6 mx-auto">
                <div key={content.id} className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-slate-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  <h5 className="ml-3 text-slate-800 font-semibold pb-3 text-sm/7">
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
      <section>
        <div className="container lg:px-32 py-20 flex flex-col items-center">
          <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 lg:pb-10">
            Why Choose MechPro Solutions?
          </h1>
          <div className="grid md:grid-cols-4 grid-cols-1  gap-4">
            {benefitsSection.map((content) => (
              <div className="flex flex-col bg-gray-200 shadow-sm border border-slate-200 rounded-lg  p-6 mx-auto">
                <div key={content.id} className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-slate-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  <h5 className="ml-3 text-slate-800 font-semibold pb-1 md:text-lg/7 text-sm/7">
                    {content.title}
                  </h5>
                </div>
                <p className="block text-slate-600  mb-4 pb-3  text-sm/7">
                  {content.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-200">
        <div className="container lg:px-32 py-20 flex flex-col items-center">
          <div className="lg:py-12 text-center">
            {" "}
            <h1 className="lg:text-3xl md:text-2xl text-lg pb-3 text-center font-bold">
              Get Your Tailored Quote Today!
            </h1>
            <p className="pb-3 md:text-lg text-xs">
              Looking for top-quality mechanical parts at competitive prices?
              You have come to the right place!
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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
