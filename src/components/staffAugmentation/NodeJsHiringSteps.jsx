import React from 'react';

const steps = [
    {
      iconBg: '#2169F7',
      title: 'Share Project Requirements',
      description:
        'Connect with us to discuss your project needs in detail. We take time to understand your business goals and define a clear roadmap for success.',
      iconPath: (
        <path
          d="M10.2365 7.25189H17.8935V25H13.7861V10.548H10.2365V7.25189Z"
          fill="white"
        />
      ),
    },
    {
      iconBg: '#23C994',
      title: 'Plan & Strategize Together',
      description:
        'We collaborate closely with your team to create a tailored development plan, ensuring alignment on timelines, milestones, and deliverables.',
      iconPath: (
        <path
          d="M14.6634 21.6532H22.2951V25H8.88256V22.3378L15.7283 15.8724C17.3002 14.3765 17.5791 13.4637 17.5791 12.6017C17.5791 11.2072 16.6157 10.3958 14.7394 10.3958C13.2182 10.3958 11.9251 10.979 11.063 12.1707L8.07121 10.2437C9.44035 8.24072 11.9251 6.94764 15.1197 6.94764C19.075 6.94764 21.7119 8.97599 21.7119 12.196C21.7119 13.9201 21.2302 15.4921 18.7454 17.7993L14.6634 21.6532Z"
          fill="white"
        />
      ),
    },
    {
      iconBg: '#FF932C',
      title: 'Kickoff & Build Solutions',
      description:
        'Our experts start executing the plan, ensuring continuous delivery and transparent communication as we build scalable and reliable solutions for your business.',
      iconPath: (
        <path
          d="M16 9C14.34 9 13 10.34 13 12C13 13.66 14.34 15 16 15C17.66 15 19 13.66 19 12C19 10.34 17.66 9 16 9ZM16 17C13.33 17 8 18.34 8 21V23H24V21C24 18.34 18.67 17 16 17Z"
          fill="white"
        />
      ),
    },
  ];
  

const NodeJsHiringSteps = () => {
    return (
        <>
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <img
                                src="https://www.vaival.com/wp-content/uploads/2024/03/Group-57616.webp"
                                alt=""
                                className="rounded-xl shadow-lg"
                            />
                            <div className="absolute top-4 left-4    p-4 rounded-lg w-11/12 ">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div
                                        className="w-10 h-10 flex items-center justify-center rounded-full"
                                        style={{ backgroundColor: step.iconBg }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 32 33"
                                            fill="none"
                                        >
                                            <circle cx="16" cy="16.5" r="16" fill={step.iconBg} />
                                            {step.iconPath}
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-700">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default NodeJsHiringSteps;
