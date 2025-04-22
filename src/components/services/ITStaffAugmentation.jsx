import React from 'react';

const ITStaffAugmentationSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            <strong>IT Staff Augmentation  Services To Hire Finest IT Engineers</strong>
          </h2>
          <p className="text-lg text-gray-600">
            Our experienced team of IT engineers and software developers has extensive expertise in leveraging cutting-edge programming languages, frameworks, and development tools to create tailored solutions that align with your digital transformation goals.


          </p>
          <a
            href="/staff-augmentation"
            className="inline-block bg-blue-600 hover:bg-white hover:border-blue-600 hover:text-black hover:border text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            Explore More
          </a>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="https://www.vaival.com/wp-content/uploads/2023/11/Group-15418-1.webp"
            alt="software development services"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ITStaffAugmentationSection;
