import React from "react";

const ServiceHeroSection = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-16 lg:py-28 lg:bg-center text-white"  style={{
        backgroundImage: "url('https://www.vaival.com/wp-content/uploads/2023/11/Group-15419.webp')",
  
      }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-sm ">
            <a href="/" className="text-blue-600 hover:underline">Home</a> &raquo;{" "}
            <a href="/services" className="text-blue-600 hover:underline">Services</a> &raquo;{" "}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold ">
            <strong>Custom Software</strong> 
            <br />Development Company
            <br />That Ignites Your Business Growth
          </h1>

          <p className="text-lg ">
          As a custom software development company, we believe in excellence for every phase of the project, leveraging the latest technologies. From concept to delivery, we provide custom solutions for web, mobile and cloud platforms.          </p>

        </div>

        {/* <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Request for Proposal</h2>
          <p className="text-gray-600 mb-4">Please fill the below information and we’ll get back to you as soon as possible.</p>
          <form className="space-y-4">
            <input
              type="text"
              name="your-name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="your-email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Contact"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="your-message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
            >
              SUBMIT NOW
            </button>
          </form>
        </div> */}
      </div>
    </section>
  );
};

export default ServiceHeroSection;
