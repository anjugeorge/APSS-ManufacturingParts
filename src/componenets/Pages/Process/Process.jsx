import React, { useEffect } from "react";
import ProcessHero from "./ProcessHero";
import Footer from "../Footer/Footer";
import { FaSquare } from "react-icons/fa";
import RequestQuote from "../RequestQuote/RequestQuote";
import { MdOutlineInventory } from "react-icons/md";
import { MdOutlinePriceCheck } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TiArrowSync } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";

const requestQuoteContent = [
  {
    id: 1,
    title: "Extensive Inventory",
    desc: "From rare components to common spares, we have it all.",
    icon: <MdOutlineInventory />,
  },
  {
    id: 2,
    title: "Competitive Pricing",
    desc: "Get the best value for your money, guaranteed.",
    icon: <MdOutlinePriceCheck />,
  },
  {
    id: 3,
    title: "Expert Advice",
    desc: "Our team of specialists is here to help you find the perfect part.",
    icon: <MdOutlineSupportAgent />,
  },
  {
    id: 4,
    title: "Quick Turnaround",
    desc: "We understand that time is money in your business.",
    icon: <TiArrowSync />,
  },
];

const services = [
  {
    id: 1,
    title: "01. Request a quote",
    desc: "Simply fill out the form, and we'll get back to you with a tailored quote in no time. The more details you provide, the more accurate your quote will be. ",
    image: "/assets/form.png",
  },
  {
    id: 2,
    title: "02. Team reviews your request",
    desc: "Our team reviews your request and we source the best options based on your needs. You will receive a customized quote within 24 hours",
    image: "/assets/review.png",
  },
  {
    id: 3,
    title: "03. Reliable & Fast Delivery",
    desc: "We quickly deliver high-quality manufacturing parts from preferred brands at competitive prices.",
    image: "/assets/delivery.png",
  },
];

const requestFormContent = [
  {
    id: 1,
    title: "Your Name*",
  },
  {
    id: 2,
    title: "Company Name",
  },
  {
    id: 3,
    title: "Email Address*",
  },
  {
    id: 4,
    title: "Phone Number",
  },
  {
    id: 5,
    title: "Part Description* (Please be as detailed as possible)",
  },
  {
    id: 6,

    title: "Quantity Required*",
  },
  {
    id: 7,
    title: "Preferred Brands/Manufacturers",
  },
];

const whatHappensNextContent = [
  {
    id: 1,
    title: "Our team reviews your request",
  },
  {
    id: 2,
    title: "We source the best options based on your needs",
  },
  {
    id: 3,
    title: "You receive a customized quote within 24 hours",
  },
  {
    id: 4,
    title: "We discuss any questions or adjustments",
  },
  {
    id: 5,
    title: "You approve, and we deliver!",
  },
];

const Process = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <ProcessHero />
      <section className="">
        <div className="container py-20 flex flex-col items-center">
          <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 lg:pb-10">
            Why Request a Quote from Us?
          </h1>
          <p className="text-center text-sm/7 pb-5">
            With over two decades of experience, we have honed our expertise in
            critical areas such as:
          </p>
          <div
            className="grid md:grid-cols-4 grid-cols-1 gap-4"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {requestQuoteContent.map((content) => (
              <div className="flex flex-col bg-white shadow-sm   text-slate-800 hover:bg-blue-500 hover:text-white p-6">
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
      <section className="bg-gray-200">
        <div className="container  py-20 flex flex-col items-center">
          <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 lg:pb-10">
            Ready to Get Started? It's Easy!
          </h1>
          <div
            className="grid md:grid-cols-3 grid-cols-1 gap-6 lg:px-20"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {services.map((content) => (
              <div className=" bg-white shadow-sm  p-6 text-blue-950 ">
                <div key={content.id} className="flex flex-col  mb-4">
                  <img src={content.image} className="w-36 mx-auto" />

                  <h5 className="ml-3  font-semibold text-sm/7">
                    {content.title}
                  </h5>
                  <p className="pb-3  text-sm/7 ">{content.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <RequestQuote />
      <Footer />
    </div>
  );
};

export default Process;
