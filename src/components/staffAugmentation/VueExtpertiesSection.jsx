import React from 'react';

const VueExpertiseSection = () => {
  const data = [
    {
      text: '10+ \nDeveloper Team',
    },
    {
      text: '7+ Years of\nExperience',
    },
    {
      text: '100+ Projects\nCompleted',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center" data-aos="fade-left" data-aos-delay="100">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16">
          <strong>Expertise that help you reach</strong> your business goals faster
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-40 h-40 sm:w-44 sm:h-44 bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-full flex items-center justify-center text-center shadow-lg">
                <p className="whitespace-pre-line px-4 text-base sm:text-lg font-medium leading-snug">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default VueExpertiseSection;
