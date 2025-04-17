import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';


const WhySDAAS = () => {
  const vaivalFeatures = [
    {
      title: '3x Faster and More Efficient',
      description: 'With the SaaS model, experience high-quality software development based on your requirements, delivered with three times the efficiency.',
    },
    {
      title: 'No-Risk with Free Trial',
      description: 'We offer a 7-day risk-free trial, allowing you to test the service without any upfront charges or commitments.',
    },
    {
      title: 'Transparent Pricing',
      description: 'Our software development subscription model offers clear, upfront pricing with no hidden costs or surprises, delivering top-tier results every time.',
    },
    {
      title: 'Flexibility',
      description: 'Intel Devs offers you unlimited development requests and revisions at no additional cost, ensuring your project always aligns with your needs.',
    },
  ];

  const otherCompanyIssues = [
    {
      title: 'Inconsistency and Long Delays',
      description: 'Many companies struggle with meeting deadlines, resulting in long delays and being inconsistent that fail to meet expectations leaving dissatisfaction.',
    },
    {
      title: 'Locked-In Contracts',
      description: 'Other companies require high upfront fees & long-term commitments with no trial period, making it difficult to exit without facing heavy penalties.',
    },
    {
      title: 'Unexpected Charges',
      description: 'Hidden charges are common with other companies, making it difficult to budget accurately, causing frustration and disrupting financial planning.',
    },
    {
      title: 'Limitations',
      description: 'Other providers often restrict development revisions and charge extra fees for any changes, leading to increased costs and limited flexibility.',
    },
  ];

  return (
    <section className="py-12 px-6 bg-[#eff5ff]" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Why SaaS?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At Intel Devs, we built SaaS to offer flexible, affordable software development at a fair price, ensuring you never have to choose between quality and cost.
        </p>
      </div>

      <div className=" w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className='bg-white rounded-xl p-6 shadow-lg'>
          <h3 className="text-2xl font-semibold mb-6">Intel Devs SaaS</h3>
          {vaivalFeatures.map((feature, idx) => (
            <div key={idx} className="mb-6 flex gap-4">
              <FaCheckCircle className="text-green-500 mt-1" />
              <div>
                <p className="font-medium text-lg">{feature.title}</p>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='bg-[#e6ebf5] rounded-xl p-6 shadow-lg'>
          <h3 className="text-2xl font-semibold mb-6">Other Companies</h3>
          {otherCompanyIssues.map((issue, idx) => (
            <div key={idx} className="mb-6 flex gap-4">
              <FaCheckCircle className="text-red-500 mt-1" />
              <div>
                <p className="font-medium text-lg">{issue.title}</p>
                <p className="text-gray-600">{issue.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySDAAS;
