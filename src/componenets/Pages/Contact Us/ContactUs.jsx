import React, { useEffect } from "react";
import FormDialog from "../Form/RequestAQuoteForm";
import AOS from "aos";
import "aos/dist/aos.css";
import RequestQuote from "../RequestQuote/RequestQuote";
import Footer from "../Footer/Footer";

const services = [
  {
    id: 1,
    title: "+1 (905) 941-6556",
    image: "/assets/phone.png",
  },
  {
    id: 2,
    title: "support@apssorg.com",
    image: "/assets/email.png",
  },
  {
    id: 3,
    title: `201 - 1065 Canadian Place\n#1175 Mississauga, ON L4W 0C2\nCanada`,
    image: "/assets/address.png",
  },
];

const ContactUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {" "}
      <main className="bg-[url('/assets/ContactUsBg.png')] bg-center bg-cover">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-12 relative z-10 px-5 md:px-20 py-20 lg:py-32 ">
          <div className="text-center md:text-start my-auto text-white">
            <h1 className="lg:text-4xl md:text-4xl text-3xl text-center md:text-start font-bold leading-8 pb-3">
              Contact Us
            </h1>
            <p className="  text-sm/7 leading-8">
              For any inquiries, assistance, or further information about our
              mechanical manufacturing products and services, feel free to reach
              out to us. Our team is dedicated to providing expert guidance and
              tailored solutions to meet your specific needs. You can contact us
              via phone, email, or by filling out our online inquiry form.
            </p>
          </div>
        </div>
      </main>
      <section className="bg-gray-200">
        <div className="container  py-20 flex flex-col items-center">
          <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 lg:pb-10">
            Get in Touch with Us
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
                  {content.title.includes("@") ? (
                    <a
                      className="text-lg font-semibold  text-center pt-5 font-barlow"
                      href={`mailto:${content.title}`}
                    >
                      {content.title}
                    </a>
                  ) : (
                    <h5 className="text-lg font-semibold  text-center pt-5 font-barlow">
                      {content.title}
                    </h5>
                  )}
                </div>
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

export default ContactUs;
