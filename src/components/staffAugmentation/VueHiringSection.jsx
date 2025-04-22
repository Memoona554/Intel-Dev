import React from 'react';

const hiringModels = [
  {
    id: '1',
    title: 'Hour-based Hiring',
    desc: 'Hour-based model gives you the freedom to scale resources up or down based on project requirements. It’s an ideal choice for dynamic projects with evolving needs.',
  },
  {
    id: '2',
    title: 'Project-based Hiring',
    desc: 'Our project-based hiring model is tailored for clients with well-defined project scopes and deliverables, offering a fixed-price structure with clarity on costs and timelines from the outset.',
  },
];

const VueHiringSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center" data-aos="zoom-in" data-aos-delay="100">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Flexible Hiring Models for <span className="text-gray-700">Your Unique Business Needs</span>
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Explore Intel Devs' Flexible Hiring Models for Vue.js Development.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {hiringModels.map((model) => (
            <div key={model.id} className="bg-blue-600 text-white rounded-lg shadow-lg p-6 text-left relative overflow-hidden">
              <span className="absolute top-4 left-4 text-4xl font-bold text-white/30">{model.id}</span>
              <h3 className="text-lg font-semibold mb-2 mt-8">{model.title}</h3>
              <p className="text-sm leading-relaxed">{model.desc}</p>
            </div>
          ))}
        </div>

       
      </div>

      <div data-aos="fade-up" data-aos-delay="100" className="mt-20 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg mx-4 md:mx-auto max-w-5xl px-8 py-12 text-center shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">LOOKING FOR DEDICATED VUE.JS DEVELOPERS?</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Get started on your project today with Intel Devs’ expert team of designers and developers.
        </p>
        <a href='#calendly' className="bg-white text-teal-700 hover:bg-gray-100 font-semibold py-2 px-5 rounded-full transition">
          BOOK A CALL
        </a>
      </div>
    </section>
  );
};

export default VueHiringSection;
