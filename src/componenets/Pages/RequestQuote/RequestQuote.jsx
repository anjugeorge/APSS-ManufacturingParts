import React from "react";
import FormDialog from "../Form/RequestAQuoteForm";
import RequestAQuoteForm from "../Form/RequestAQuoteForm";

const RequestQuote = () => {
  return (
    <div>
      {" "}
      <section className=" bg-gray-100  ">
        <div className=" container  flex flex-col items-center ">
          <div className="py-20 text-center   ">
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
              <RequestAQuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;
