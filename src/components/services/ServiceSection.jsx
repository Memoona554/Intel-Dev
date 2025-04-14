import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaShoppingCart,
  FaCloud,
  FaUsersCog,
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
    desc: "We ensure the best mobile app development services in Android, iOS, and other mobile platforms, to develop a top-notch and competitive mobile app that drives success.",
    icon: <FaMobileAlt className="text-4xl text-[#2a2a2a]" />,
  },
  {
    title: "Ecommerce Development",
    desc: "We help you maximize online sales by delivering robust e-commerce solutions, leveraging our expertise with platforms like Shopify, WooCommerce, Magento, and more.",
    icon: <FaShoppingCart className="text-4xl text-[#2a2a2a]" />,
  },
  {
    title: "SaaS Development",
    desc: "Our SaaS development services cover designing and coding of modern cloud-based applications to ensure stability and scalability to deliver reliable SaaS solutions.",
    icon: <FaCloud className="text-4xl text-[#2a2a2a]" />,
  },
  {
    title: "Offshore Development",
    desc: "We provide full scale offshore development services that allow you to find the tech experts needed, without having to hire or manage them in-house, enabling the project to scale at any stage.",
    icon: <FaUsersCog className="text-4xl text-[#2a2a2a]" />,
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
    desc: "Our seasoned AI developers seamlessly blend creativity and technology, crafting solutions that read, predict, and innovate with data-driven intelligence.",
    icon: <FaBrain className="text-4xl text-[#2a2a2a]" />,
  },
  {
    title: "IT Consulting Services",
    desc: "Our IT consulting services range from comprehensive business analysis to process streamlining and roadmap development to achieve your goals.",
    icon: <FaUserTie className="text-4xl text-[#2a2a2a]" />,
  },
];

const Services = () => {
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
        <button className="bg-[#0274be] text-white px-8 py-3 rounded-full font-medium text-sm tracking-wide hover:bg-[#025d98] transition duration-300">
          REQUEST A QUOTE
        </button>
      </div>
    </section>
  );
};

export default Services;
