import React from 'react';

const technologyLogosGroup1 = [
  'https://www.vaival.com/wp-content/uploads/2023/12/stack1.webp',
  'https://www.vaival.com/wp-content/uploads/2023/12/stack2.webp',
  'https://www.vaival.com/wp-content/uploads/2023/12/stack3.webp',
  'https://www.vaival.com/wp-content/uploads/2023/12/stack4.webp',
  'https://www.vaival.com/wp-content/uploads/2023/12/stack5.webp',
];

const technologyLogosGroup2 = [
  'https://www.vaival.com/wp-content/uploads/2023/12/stack7-1.webp',
  'https://www.vaival.com/wp-content/uploads/2023/12/stack6-1.webp',
  'https://www.vaival.com/wp-content/uploads/2023/12/stack8-1.webp',
  'https://www.vaival.com/wp-content/uploads/2023/12/stack9-1.webp',
];

const TechnologyStack = () => {
  return (
    <section className="bg-white py-16 px-4"  data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <strong>Our Technology</strong> Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6 mb-12">
          {technologyLogosGroup1.map((logo, index) => (
            <a
              key={index}
              href={logo}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square bg-center bg-cover "
              style={{ backgroundImage: `url(${logo})` }}
            />
          ))}
          {technologyLogosGroup2.map((logo, index) => (
            <a
              key={index}
              href={logo}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square bg-center bg-cover "
              style={{ backgroundImage: `url(${logo})` }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnologyStack;
