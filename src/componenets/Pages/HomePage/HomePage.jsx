import React, { useState } from "react";
import { FaSquare } from "react-icons/fa";
import DataGridDemo from "../DataGrid/DataGrid";
import Hero from "../HeroBanner/Hero";
import Footer from "../Footer/Footer";

const expertiseContent = [
  {
    id: 1,
    title: "Industrial Machinery Components",
    desc: "From gears to bearings, our extensive inventory of industrial machinery components keeps your operations running smoothly. Whether you&#39;re maintaining a production line or upgrading your facilities, we&#39;ve got the parts you need.",
  },
  {
    id: 2,
    title: "Automotive Excellence",
    desc: "Rev up your automotive projects with our comprehensive range of high-quality parts. From engine components to transmission systems, we&#39;re your trusted partner in keeping vehicles onthe road.",
  },
];

const services = [
  {
    id: 1,
    title: "Expert Technical Support:",
    desc: "Our team of seasoned professionals is always ready to assist you with any technical queries.",
  },
  {
    id: 2,
    title: "Seamless Installation Assistance",
    desc: "Need help with installation? Our experts are just a call away.",
  },
  {
    id: 3,
    title: "Comprehensive Maintenance Contracts:",
    desc: "Ensure long-term performance with our tailored maintenance plans.",
  },
];

const list = [
  {
    id: 1,
    title: "Uncompromising Quality Assurance:",
    desc: "Every part we sell undergoes rigorous testing to ensure peak performance.",
  },
  {
    id: 2,
    title: "Competitive Pricing:",
    desc: "Top-tier quality doesn&#39;t have to break the bank. We offer the best value for your investment.",
  },
  {
    id: 3,
    title: "Lightning-Fast Delivery:",
    desc: "Time is money. Our efficient logistics ensure you get what you need, when you need it.",
  },
  {
    id: 4,
    title: "Vast Inventory:",
    desc: "With our extensive stock, your search for that crucial part ends here.",
  },
];

const HomePage = () => {
  const [table, setTable] = useState(false);
  function showTable() {
    setTable(true);
  }
  return (
    <>
      <Hero />
      <section className="bg-gray-200">
        <div className="container lg:px-32 py-20 flex flex-col items-center">
          <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 lg:pb-10">
            Our Expertise
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {expertiseContent.map((content) => (
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
        <div className="container lg:px-32 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="row-span-1 md:row-span-3 md:col-span-2 mx-auto">
              {" "}
              <img
                className="h-auto rounded-lg w-full max-w-xs"
                src="/assets/components.png"
                alt="image description"
              />
            </div>
            <div className="col-span-1 md:col-span-2 my-auto">
              <h1 className="lg:text-3xl md:text-2xl text-lg text-center md:text-start font-bold ">
                Experience the Difference
              </h1>
            </div>
            <div className="md:col-span-2 md:row-span-1 col-span-1 text-center md:text-start my-auto md:text-lg/7 text-sm/7">
              {" "}
              Don't let subpar parts hold your business back. Join the ranks of
              satisfied clients who trust us to keep their operations running at
              peak efficiency. Your success is our driving force. Partner with
              APSS today and experience the perfect blend of quality, service,
              and value.
            </div>
            <div className="col-span-1 md:col-span-2 my-auto">
              {" "}
              <button
                type="button"
                className="px-5 py-2.5 text-sm font-medium text-white bg-buttonColor rounded-lg hover:bg-buttonHoverColor"
                onClick={showTable}
              >
                View Our Products
              </button>
            </div>
          </div>
          {table && (
            <div className="grid grid-cols-1 py-20" id="datagrid">
              <DataGridDemo />
            </div>
          )}
        </div>
      </section>

      <section className="bg-gray-200">
        <div className="container lg:px-32 py-20 flex flex-col items-center">
          <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 lg:pb-10">
            Beyond Parts: Our Value-Added Services
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1  gap-4">
            {services.map((content) => (
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

      <section>
        <div className="container lg:px-32 py-20">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 ">
                Why Choose Us?
              </h1>
              <p className="text-center md:text-lg/7 text-sm/7">
                At APSS, we don't just meet expectations – we exceed them.
                Here's what sets us apart:
              </p>
            </div>
            <div className="mx-auto">
              {" "}
              <ul className="list-outside">
                {list.map((content) => (
                  <li
                    key={list.id}
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

export default HomePage;
