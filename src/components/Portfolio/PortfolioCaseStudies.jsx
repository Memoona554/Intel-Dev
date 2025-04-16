import React from "react";

const PortfolioCaseStudies = () => {
  const leftColumn = [
    {
      title: "Float Funnels",
      image: "https://www.vaival.com/wp-content/uploads/2024/01/Rectangle-8705.webp",
      link: "https://www.vaival.com/case-studies/float-funnels/",
    },
    {
      title: "CareCart",
      image: "https://www.vaival.com/wp-content/uploads/2024/01/Rectangle-8708.webp",
      link: "https://www.vaival.com/case-studies/carecart/",
    },
    {
      title: "Kibocode",
      image: "https://www.vaival.com/wp-content/uploads/2024/01/Group-57392.webp",
      link: "https://www.vaival.com/case-studies/kibocode/",
    },
    
  ];

  const rightColumn = [
    {
      title: "SendPad",
      image: "https://www.vaival.com/wp-content/uploads/2024/01/Rectangle-8707.webp",
      link: "https://www.vaival.com/case-studies/sendpad/",
    },
    {
      title: "Vulcan Forged",
      image: "https://www.vaival.com/wp-content/uploads/2023/12/Rectangle-8701.webp",
      link: "https://www.vaival.com/case-studies/vulcanforged/",
    },
    {
        title: "Blackbird Suite",
        image: "https://www.vaival.com/wp-content/uploads/2024/01/Group-57394.webp",
        link: "https://www.vaival.com/case-studies/blackbird-suite/",
      },
  ];

  const ImageBox = ({ title, image, link }) => (
    <div className="mb-6">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
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
            <strong>Add your brand’s name to our exhaustive</strong>  list of success stories
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
