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

      <section className=" bg-gray-200">
        <div className="container py-20 flex flex-col items-center">
          <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 lg:pb-10">
            Why Request a Quote from Us?
          </h1>
          <p className="text-center text-sm/7 pb-5">
            At APSS, we are your one-stop shop for all things mechanical.
            Whether you need industrial machinery parts, general mechanical
            spares, or automotive components, w have got you covered.Our deep
            industry partnerships with leading manufacturers have allowed us to
            stay at the forefront of technological advancements, ensuring you
            always have access to the latest and most reliable parts. With over
            two decades of experience, we have honed our expertise in critical
            areas such as:
          </p>
          <div
            className="grid md:grid-cols-4 grid-cols-1 gap-4"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {requestQuoteContent.map((content) => (
              <div className="flex flex-col bg-white shadow-sm border-l-4 border-buttonColor rounded-lg  p-6">
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

      <section className="">
        <div className=" container pt-20">
          <div className=" pb-10">
            <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 ">
              Ready to Get Started? It's Easy!
            </h1>
            <p className="text-center text-sm/7">
              Simply fill out the form below, and we&#39;ll get back to you with
              a tailored quote in no time. The more details you provide, the
              more accurate your quote will be. Don&#39;t hesitate to specify
              preferred brands or manufacturers – it helps us find the perfect
              match for your needs!
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="my-auto sm:mx-auto">
              <ul>
                {requestFormContent.map((content) => (
                  <li
                    key={content.id}
                    className=" flex items-center pb-2  text-sm/7"
                  >
                    <FaSquare className="mr-2" />
                    {content.title}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="bg-buttonHoverColor shadow-sm border border-slate-200   p-6 mx-auto text-white"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 ">
                What Happens Next?
              </h1>
              <ul>
                {whatHappensNextContent.map((content) => (
                  <li
                    key={content.id}
                    className="flex items-center pb-2  text-sm/7"
                  >
                    <FaSquare className="mr-2" />
                    {content.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container pb-20">
          <div className="grid grid-cols-2 gap-4">
            <div className="mx-auto"></div>
          </div>
        </div>
      </section>

      <RequestQuote />
      <Footer />
    </div>
  );
};

export default Process;
