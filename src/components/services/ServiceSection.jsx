/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaShoppingCart,
  FaCloud,
  FaBug,
  FaDraftingCompass,
  FaCubes,
  FaNetworkWired,
  FaBrain,
  FaUserTie,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    desc: "From building prototypes to scalable web applications, we deliver functional and visually appealing web app solutions with reliable post-release support for easy maintenance.",
    icon: <FaLaptopCode className="text-4xl text-[#2a2a2a]" />,
  },
  {
    title: "App Development",
    desc: "We ensure the best mobile app development services in Android,  and other mobile platforms, to develop a top-notch and competitive mobile app that drives success.",
    icon: <FaMobileAlt className="text-4xl text-[#2a2a2a]" />,
  },
  {
    title: "Ecommerce Development",
    desc: "We help you maximize online sales by delivering robust e-commerce solutions, leveraging our expertise in different platforms.",
    icon: <FaShoppingCart className="text-4xl text-[#2a2a2a]" />,
  },
  {
    title: "SaaS Development",
    desc: "Our SaaS development services cover designing and coding of modern cloud-based applications to ensure stability and scalability to deliver reliable SaaS solutions.",
    icon: <FaCloud className="text-4xl text-[#2a2a2a]" />,
  },
  {
    title: "QA Testing & Automation",
    desc: "With continuous changes in business, our quality assurance services ensure flawless performance with meticulous attention, eliminating system complexities.",
    icon: <FaBug className="text-4xl text-[#2a2a2a]" />,
  },
  {
    title: "UI/UX Design",
    desc: "We believe in creating the best user experience. Get your digital product designed with immersive UI/UX design services that delight your valuable visitors.",
    icon: <FaDraftingCompass className="text-4xl text-[#2a2a2a]" />,
  },
  {
    title: "Blockchain",
    desc: "Empower your business with the decentralized platform and experience blockchain interoperability and integrations through agile development methodologies.",
    icon: <FaCubes className="text-4xl text-[#2a2a2a]" />,
  },
  {
    title: "DevOps",
    desc: "Supercharge your development and operations with the best DevOps services that streamline practices to ensure faster delivery of quality software.",
    icon: <FaNetworkWired className="text-4xl text-[#2a2a2a]" />,
  },
  {
    title: "Artificial Intelligence",
    desc: "Leveraging artificial intelligence to enable smarter decision-making, automation, and innovation across diverse domains.",
    icon: <FaBrain className="text-4xl text-[#2a2a2a]" />,
  },
  {
    title: "IT Consulting Services",
    desc: "Our IT consulting services range from comprehensive business analysis to process streamlining and roadmap development to achieve your goals.",
    icon: <FaUserTie className="text-4xl text-[#2a2a2a]" />,
  },
];

const Services = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formRef.current,
      "YOUR_USER_ID"
    ).then(
      (result) => {
        alert("Message Sent Successfully!");
        setShowForm(false);
      },
      (error) => {
        alert("An error occurred. Please try again.");
      }
    );
  };

  return (
    <section className="bg-[#f9f9f9] py-16 px-6 md:px-20" data-aos="fade-up" data-aos-delay="100">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-12">
        Custom <span className="text-[#0274be]">Software</span> Development Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-[80%] lg:mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-[#f9f9f9] transition-all duration-300 hover:bg-white hover:shadow-xl"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-bold text-[#2a2a2a] mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#0274be] text-white px-8 py-3 rounded-full font-medium text-sm tracking-wide hover:bg-[#025d98] transition duration-300"
        >
          REQUEST A QUOTE
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0  bg-gradient-to-t from-gray/100 via-black/10 to-transparent  bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-[90%] max-w-lg relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-lg"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4 text-[#0274be]">Request a Quote</h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-[#0274be] text-white px-6 py-2 rounded hover:bg-[#025d98] transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
