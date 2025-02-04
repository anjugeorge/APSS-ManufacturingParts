import React from "react";
import FormDialog from "../Form/RequestAQuoteForm";

const RequestQuote = () => {
  return (
    <div>
      {" "}
      <section className=" rounded-tr-full rounded-br-full   bg-[url(/assets/CTA.png)] bg-clip-content lg:bg-cover bg-bottom lg:mr-52 my-20">
        <div className=" container  flex flex-col items-center ">
          <div className="py-12 text-center   text-white ">
            {" "}
            <h1 className="lg:text-3xl md:text-2xl text-lg pb-3 text-center font-bold">
              Join Our Journey
            </h1>
            <p className="pb-3 lg:px-28 text-sm/7">
              As we look to the future, we&#39;re excited about the
              possibilities that lie ahead. From emerging technologies to
              evolving industry needs, we&#39;re committed to staying one step
              ahead – all to serve you better. Ready to experience the APSS
              difference?
            </p>
            <div className="pb-5">
              {" "}
              <FormDialog />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;
