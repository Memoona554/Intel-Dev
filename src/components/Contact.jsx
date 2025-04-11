import React from "react";
import Calendly from "./Calendly";
const BookConsultation = () => {


  return (
    <div className="w-full px-4 py-8 bg-blue-600" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mt-4">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">Book a Free Consultation</h2>
          <p className="text-white mb-2">
            We're eager to explore how we can improve your software development projects with our creative solutions and strategic insights.
          </p>
        </div>
        <Calendly />

      </div>
    </div>
  );
};

export default BookConsultation;
