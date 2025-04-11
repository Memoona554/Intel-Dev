import React from "react";

const awards = [
  {
    img: "https://www.vaival.com/wp-content/uploads/2023/12/image-27-1.png",
    alt: "Award 1",
  },
  {
    img: "https://www.vaival.com/wp-content/uploads/2023/12/image-24-1.png",
    alt: "Award 2",
  },
  {
    img: "https://www.vaival.com/wp-content/uploads/2023/12/APICTA_logo_white-1.png",
    alt: "Award 3",
  },
  {
    img: "https://www.vaival.com/wp-content/uploads/2023/12/image-25.png",
    alt: "Award 4",
  },
  {
    img: "https://www.vaival.com/wp-content/uploads/2023/12/image-26.png",
    alt: "Award 5",
  },
  {
    img: "https://www.vaival.com/wp-content/uploads/2023/12/thrid-1.png",
    alt: "Award 6",
  },
];

const RecognitionAwards = () => {
  return (
    <section className="w-full py-12 lg:w-[80%] mx-auto bg-blue-600 mb-5 rounded-lg" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl  text-center mb-10">
          <span className="text-white font-bold">Recognition</span> <span className="text-white">and Awards</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 bg-white"
            >
              <img
                src={award.img}
                alt={award.alt}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognitionAwards;
