import React, { useEffect, useState } from "react";
import { FaSquare } from "react-icons/fa";
import DataGridDemo from "../DataGrid/DataGrid";
import Hero from "../HeroBanner/Hero";
import Footer from "../Footer/Footer";
import { FcAutomotive } from "react-icons/fc";
import { FaIndustry } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { GrInstall } from "react-icons/gr";
import { FcSupport } from "react-icons/fc";
import RequestQuote from "../RequestQuote/RequestQuote";
import { AiFillCloseSquare } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { faTruckMoving } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const expertiseContent = [
  {
    id: 1,
    title: "Industrial Machinery Components",
    desc: "From gears to bearings, our extensive inventory of industrial machinery components keeps your operations running smoothly. Whether you&#39;re maintaining a production line or upgrading your facilities, we have got the parts you need.",
    icon: <FontAwesomeIcon icon={faGears} />,
  },
  {
    id: 2,
    title: "Automotive Excellence",
    desc: "Rev up your automotive projects with our comprehensive range of high-quality parts. From engine components to transmission systems, we are your trusted partner in keeping vehicles onthe road.",
    icon: <FontAwesomeIcon icon={faTruckMoving} />,
  },
];

const services = [
  {
    id: 1,
    title: "Expert Technical Support:",
    desc: "Our team of seasoned professionals is always ready to assist you with any technical queries.",
    icon: <FontAwesomeIcon icon={faHeadset} />,
  },
  {
    id: 2,
    title: "Seamless Installation Assistance",
    desc: "Need help with installation? Our experts are just a call away.",
    icon: <FontAwesomeIcon icon={faSquarePhone} />,
  },
  {
    id: 3,
    title: "Comprehensive Maintenance",
    desc: "Ensure long-term performance with our tailored maintenance plans.",
    icon: <FontAwesomeIcon icon={faScrewdriverWrench} />,
  },
];

const list = [
  {
    id: 1,
    title: "Quality Assurance",
    desc: "Every part we sell undergoes rigorous testing to ensure peak performance.",
    image: "/assets/QA.png",
  },
  {
    id: 2,
    title: "Competitive Pricing",
    desc: "Top-tier quality doesn't have to break the bank. We offer the best value for your investment.",
    image: "/assets/cost.png",
  },
  {
    id: 3,
    title: "Lightning-Fast Delivery",
    desc: "Our efficient logistics ensure you get what you need, when you need it.",
    image: "/assets/delivery.png",
  },
  {
    id: 4,
    title: "Vast Inventory",
    desc: "With our extensive stock, your search for that crucial part ends here.",
    image: "/assets/inventory.png",
  },
];

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [table, setTable] = useState(false);
  function showTable() {
    na;
  }
  function closeTable() {
    setTable(false);
  }
  return (
    <>
      <Hero />

      <section className="bg-gray-200">
        <div className="container  py-20 flex flex-col items-center">
          <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 lg:pb-10">
            Our Expertise
          </h1>
          <div
            className="grid md:grid-cols-2 grid-cols-1 gap-12 lg:px-20"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {expertiseContent.map((content) => (
              <div className="bg-white shadow-lg  hover:bg-blue-500 text-slate-900 hover:text-white p-6">
                <div
                  key={content.id}
                  className="flex flex-col items-center mb-4"
                >
                  {content.icon}
                  <h5 className="ml-3  font-semibold  text-sm/7 ">
                    {content.title}
                  </h5>
                </div>
                <p className="block  pb-3 text-sm/7 ">{content.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*<main className="bg-[url('/assets/HeroBg.png')] bg-center bg-cover">
        {" "}
        <div className="grid grid-cols-1 gap-4  mx-auto px-10 lg:px-72 place-items-center pt-12 pb-60">
          <div className="text-center md:text-start my-auto text-black relative z-10 ">
            <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 lg:pb-10">
              Experience the Difference
            </h1>
            <p className="pb-3  text-sm/7 ">
              Don't let subpar parts hold your business back. Join the ranks of
              satisfied clients who trust us to keep their operations running at
              peak efficiency. Your success is our driving force. Partner with
              APSS today and experience the perfect blend of quality, service,
              and value.
            </p>
            <div className="col-span-1 my-auto text-center gap-4">
              {" "}
              <a href="/products">
                <button
                  type="button"
                  className="px-5 py-2.5 text-sm font-medium  border-2 border-solid bg-buttonColor  rounded-lg hover:bg-buttonHoverColor text-white"
                >
                  Explore Our Products
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>*/}

      <section className="relative container">
        <div className="grid lg:grid-cols-2 py-28">
          {" "}
          <div
            className="mx-auto  "
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <img
              className="h-auto  w-auto"
              src="/assets/gear.png"
              alt="image description"
            />
          </div>
          <div className="text-center md:text-start my-auto text-black relative z-10 ">
            <h1 className="lg:text-3xl md:text-2xl text-lg text-center text-lg-start font-bold py-5 lg:pb-10">
              Experience the Difference
            </h1>
            <p className="pb-3  text-sm/7 ">
              Don't let subpar parts hold your business back. Join the ranks of
              satisfied clients who trust us to keep their operations running at
              peak efficiency. Your success is our driving force. Partner with
              APSS today and experience the perfect blend of quality, service,
              and value.
            </p>
            <div className="col-span-1 my-auto text-center  md:text-start gap-4">
              {" "}
              <a href="/products">
                <button
                  type="button"
                  className="px-5 py-2.5 text-sm font-medium  border-2 border-solid bg-buttonColor  rounded-lg hover:bg-buttonHoverColor text-white"
                >
                  Explore Our Products
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200">
        <div className="container  py-20 flex flex-col items-center">
          <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 lg:pb-10">
            Beyond Parts: Our Value-Added Services
          </h1>
          <div
            className="grid md:grid-cols-3 grid-cols-1 gap-6 lg:px-20"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {services.map((content) => (
              <div className=" bg-white shadow-sm  p-6 text-slate-800 hover:bg-blue-500 hover:text-white">
                <div key={content.id} className="flex flex-col  mb-4">
                  {content.icon}
                  <h5 className=" font-semibold  text-sm/7 text-center">
                    {content.title}
                  </h5>
                </div>
                <p className="block  pb-3 text-sm/7 ">{content.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="">
        <div className="container py-20">
          <div>
            <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 ">
              Why Choose Us?
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-4">
              {list.map((content) => (
                <div className="   text-slate-800 ">
                  <div
                    key={content.id}
                    className="  mb-4 flex flex-col"
                    data-aos="zoom-in"
                    data-aos-once="true"
                    data-aos-duration="1500"
                  >
                    <h5 className=" font-semibold  text-sm/7 px-5 text-start">
                      {content.title}
                    </h5>
                    <p className="block px-5 text-sm/7 ">{content.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <RequestQuote />
      <Footer />
    </>
  );
};

export default HomePage;
