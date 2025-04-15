import React from 'react';
import { FaUserTie, FaRedo, FaClipboardList, FaRocket, FaHandsHelping, FaShieldAlt } from 'react-icons/fa';

const SDAASFeature = () => {
  const features = [
    {
      icon: <FaUserTie className="text-blue-600 text-2xl" />,
      title: 'Highly Skilled Developers',
      description:
        'Gain access to our elite pool of highly skilled and thoroughly vetted AI powered developers, each expert in diverse technological fields.',
    },
    {
      icon: <FaRedo className="text-blue-600 text-2xl" />,
      title: 'Unlimited Revisions',
      description:
        'Achieve perfect results with unlimited revisions. We continue refining until you are completely satisfied with the deliverables.',
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-2xl" />,
      title: 'Risk-Free Trial',
      description:
        'We offer a risk-free experience with a 7-day free trial. Enjoy a full refund guarantee if our services don’t meet your expectations.',
    },
    {
      icon: <FaRocket className="text-blue-600 text-2xl" />,
      title: 'Quick Turnaround',
      description:
        'Experience unparalleled delivery speed with our optimized processes. We ensure average task completions within just 48–72 hours.',
    },
    {
      icon: <FaClipboardList className="text-blue-600 text-2xl" />,
      title: 'Unlimited Development Requests',
      description:
        'Submit as many development tasks as you need each month. Our flexible service model caters to all project demands.',
    },
    {
      icon: <FaHandsHelping className="text-blue-600 text-2xl" />,
      title: 'Seamless Collaboration',
      description:
        'Use our advanced platform for an effortless way to submit requests, monitor progress, and engage directly with your development team.',
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20" data-aos="fade-up" data-aos-delay="100">
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="text-blue-600 text-xl font-semibold uppercase">No Unnecessary Delays</h2>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">Launch Your SaaS Apps Faster Than Ever</h1>
        <p className="mt-4 text-gray-600 text-lg">
          We help companies in accelerating their time-to-market with unmatched quality – all at a fraction of the inhouse cost. Control your software delivery operations effectively with flexible software development subscription services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="300">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4 shadow-lg p-4">
            <div>{feature.icon}</div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SDAASFeature;
