import React from "react";

const PortfolioCaseStudies = () => {
  const leftColumn = [
    {
      title: "DexCheck",
      image: "/proj_2.png",
      link: "/portfolio/dex-check",
    },
    {
      title: "XANA",
      image: "/proj_1.png",
      link: "/portfolio/xana",
    },
    
    
  ];

  const rightColumn = [
    {
      title: "Vividly SRL",
      image: "/proj_3.png",
      link: "/portfolio/vividly",
    },
    {
      title: "Kombo Chrome Extension",
      image: "/proj_4.png",
      link: "/portfolio/kombo",
    },
    
  ];

  const ImageBox = ({ title, image, link }) => (
    <div className="mb-6">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={title}
          className="w-full h-full lg:h-98 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
        />
        <h3 className="mt-2 text-lg font-semibold text-blue-600 hover:underline">
          {title}
        </h3>
      </a>
    </div>
  );

  return (
    <section className="py-12 px-4 bg-white" data-aos="fade-up" data-aos-delay="100">
        <div className=" py-8" data-aos="zoom-in" data-aos-delay="200">
            <h1 className="max-w-3xl text-center text-4xl lg:text-4xl mx-auto">
            <strong>Add your brand’s name to our exhaustive list of success stories</strong>  
            </h1>
        </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="300">
        <div>
          {leftColumn.map((item, index) => (
            <ImageBox key={index} {...item} />
          ))}
        </div>
        <div>
          {rightColumn.map((item, index) => (
            <ImageBox key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioCaseStudies;
