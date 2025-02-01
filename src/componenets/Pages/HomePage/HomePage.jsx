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
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import { faTruckRampBox } from "@fortawesome/free-solid-svg-icons";

const expertiseContent = [
  {
    id: 1,
    title: "Industrial Machinery Components",
    desc: "From gears to bearings, our extensive inventory of industrial machinery components keeps your operations running smoothly. Whether you&#39;re maintaining a production line or upgrading your facilities, we have got the parts you need.",
    icon: <FaIndustry />,
  },
  {
    id: 2,
    title: "Automotive Excellence",
    desc: "Rev up your automotive projects with our comprehensive range of high-quality parts. From engine components to transmission systems, we are your trusted partner in keeping vehicles onthe road.",
    icon: <FcAutomotive />,
  },
];

const services = [
  {
    id: 1,
    title: "Expert Technical Support:",
    desc: "Our team of seasoned professionals is always ready to assist you with any technical queries.",
    icon: <MdContactSupport />,
  },
  {
    id: 2,
    title: "Seamless Installation Assistance",
    desc: "Need help with installation? Our experts are just a call away.",
    icon: <GrInstall />,
  },
  {
    id: 3,
    title: "Comprehensive Maintenance",
    desc: "Ensure long-term performance with our tailored maintenance plans.",
    icon: <FcSupport />,
  },
];

const list = [
  {
    id: 1,
    title: "Uncompromising Quality Assurance",
    desc: "Every part we sell undergoes rigorous testing to ensure peak performance.",
    icon: (
      <FontAwesomeIcon
        icon={faCertificate}
        size="6x"
        style={{ color: "#153b47" }}
      />
    ),
  },
  {
    id: 2,
    title: "Competitive Pricing",
    desc: "Top-tier quality doesn't have to break the bank. We offer the best value for your investment.",
    icon: <FontAwesomeIcon icon={faCertificate} style={{ color: "#153b47" }} />,
  },
  {
    id: 3,
    title: "Lightning-Fast Delivery",
    desc: "Our efficient logistics ensure you get what you need, when you need it.",
    icon: <FontAwesomeIcon icon={faCertificate} style={{ color: "#153b47" }} />,
  },
  {
    id: 4,
    title: "Vast Inventory",
    desc: "With our extensive stock, your search for that crucial part ends here.",
    icon: <FontAwesomeIcon icon={faCertificate} style={{ color: "#153b47" }} />,
  },
];

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [table, setTable] = useState(false);
  function showTable() {
    setTable(true);
  }
  function closeTable() {
    setTable(false);
  }
  return (
    <>
      <Hero />
      <section className="  ">
        <div className="container  py-20 flex flex-col items-center">
          <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 lg:pb-10">
            Our Expertise
          </h1>
          <div
            className="grid md:grid-cols-2 grid-cols-1 gap-4"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {expertiseContent.map((content) => (
              <div className="flex flex-col bg-white shadow-sm border-l-4 border-buttonColor  rounded-lg  p-6">
                <div key={content.id} className="flex items-center mb-4">
                  {content.icon}
                  <h5 className="ml-3 text-slate-800 font-semibold  text-sm/7">
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
        <div className="container bg-[#f7fafa]">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div
              className="mx-auto "
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <img
                className="h-auto rounded-lg w-full max-w-sm"
                src="/assets/mechanicalComponent.png"
                alt="image description"
              />
            </div>{" "}
            <div className="text-center md:text-start my-auto ">
              <h1 className="lg:text-3xl md:text-2xl text-lg text-center md:text-start font-bold ">
                Experience the Difference
              </h1>
              <p className="pb-3  text-sm/7">
                Don't let subpar parts hold your business back. Join the ranks
                of satisfied clients who trust us to keep their operations
                running at peak efficiency. Your success is our driving force.
                Partner with APSS today and experience the perfect blend of
                quality, service, and value.
              </p>
              <div className="col-span-1 my-auto text-center  md:text-start gap-4">
                {" "}
                <button
                  type="button"
                  className="px-5 py-2.5 text-sm font-medium text-white border-2 border-solid bg-buttonColor  rounded-lg hover:bg-buttonHoverColor"
                  onClick={showTable}
                >
                  Explore Our Products
                </button>
              </div>
            </div>
          </div>
          {table && (
            <div className="relative">
              <div className="absolute -top-10 right-0">
                {" "}
                <button
                  type="button"
                  className="px-2 py-2.5 text-sm font-medium text-white bg-buttonColor rounded-lg hover:bg-buttonHoverColor"
                  onClick={closeTable}
                >
                  <AiFillCloseSquare />
                </button>
              </div>
              <div className="grid grid-cols-1 pt-2 pb-20 " id="datagrid">
                <DataGridDemo />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="">
        <div className="container  py-20 flex flex-col items-center">
          <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 lg:pb-10">
            Beyond Parts: Our Value-Added Services
          </h1>
          <div
            className="grid md:grid-cols-3 grid-cols-1 gap-4"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {services.map((content) => (
              <div className="flex flex-col bg-white shadow-sm  border-l-4 border-buttonColor rounded-lg  p-6">
                <div key={content.id} className="flex items-center mb-4">
                  {content.icon}
                  <h5 className="ml-3 text-slate-800 font-semibold  text-sm/7">
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
        <div className="container py-10 bg-[#f7fafa]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col my-auto mx-auto">
              <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 ">
                Why Choose Us?
              </h1>
              <img
                className="h-auto rounded-lg w-full max-w-xs mx-auto"
                src="/assets/WhyChooseUs.png"
                alt="image description"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 my-auto py-16 gap-4">
              <div className="flex flex-col">
                <div className="mx-auto   pb-10">
                  <FontAwesomeIcon
                    icon={faCertificate}
                    size="2x"
                    beatFade
                    style={{ color: "#153b47" }}
                    className="block mx-auto pb-5"
                  />

                  <h1 className="text-lg text-center  font-bold">
                    Quality Assurance
                  </h1>
                  <p className="text-center text-sm/7">
                    Every part we sell undergoes rigorous testing to ensure peak
                    performance.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="mx-auto pb-10">
                    {" "}
                    <FontAwesomeIcon
                      icon={faMoneyBill1Wave}
                      size="2x"
                      beatFade
                      style={{
                        color: "#153b47",
                      }}
                      className="block mx-auto pb-5"
                    />
                    <h1 className="text-lg text-center  font-bold ">
                      Competitive Pricing
                    </h1>
                    <p className="text-center text-sm/7  ">
                      Top-tier quality doesn't have to break the bank. We offer
                      the best value for your investment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="mx-auto  pb-10">
                  <FontAwesomeIcon
                    icon={faTruckFast}
                    size="2x"
                    beatFade
                    style={{ color: "#153b47" }}
                    className="block mx-auto pb-5"
                  />

                  <h1 className="text-lg  text-center  font-bold  ">
                    Lightning-Fast Delivery
                  </h1>
                  <p className="text-center text-sm/7 ">
                    Our efficient logistics ensure you get what you need, when
                    you need it.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="mx-auto  pb-10">
                    <FontAwesomeIcon
                      icon={faTruckRampBox}
                      size="2x"
                      beatFade
                      style={{ color: "#153b47" }}
                      className="block mx-auto pb-5"
                    />

                    <h1 className="text-lg text-center   font-bold ">
                      Vast Inventory
                    </h1>
                    <p className="text-center text-sm/7   ">
                      With our extensive stock, your search for that crucial
                      part ends here.
                    </p>
                  </div>
                </div>
              </div>
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
