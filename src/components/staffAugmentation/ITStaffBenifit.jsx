import {
    FaUserCheck,
    FaUsersCog,
    FaDollarSign,
    FaFileContract,
    FaClock,
    FaCogs,
    FaSearch,
  } from "react-icons/fa";
  
  const benefits = [
    {
      icon: <FaUserCheck className="text-[#2169F7] text-2xl" />,
      title: "No Recruitment Hassle",
      description:
        "Our IT staff augmentation services eliminate the burden of shortlisting and recruiting. We handle the screening process and share the most relevant CVs for your interviews.",
    },
    {
      icon: <FaUsersCog className="text-[#2169F7] text-2xl" />,
      title: "Access to Vetted Talent",
      description:
        "Gain access to a pool of vetted, certified software specialists at affordable rates. Quickly scale your team and achieve faster, more effective results.",
    },
    {
      icon: <FaDollarSign className="text-[#2169F7] text-2xl" />,
      title: "Lower Operational Costs",
      description:
        "Our efficient staffing model ensures you only pay for the resources you use, minimizing unnecessary overhead compared to traditional hiring.",
    },
    {
      icon: <FaFileContract className="text-[#2169F7] text-2xl" />,
      title: "Fewer Legal Hassles",
      description:
        "As your IT staffing partner, we remain the official employer of your remote hires, handling all legal responsibilities and documentation.",
    },
    {
      icon: <FaClock className="text-[#2169F7] text-2xl" />,
      title: "Aggressive Deadlines",
      description:
        "Our skilled developers are equipped to deliver high-quality work within tight deadlines, consistently exceeding expectations.",
    },
    {
      icon: <FaCogs className="text-[#2169F7] text-2xl" />,
      title: "Full Control Over Processes",
      description:
        "You retain complete control over candidate selection and onboarding, allowing you to hand-pick the best fit for your team.",
    },
    {
      icon: <FaSearch className="text-[#2169F7] text-2xl" />,
      title: "Work Transparency",
      description:
        "We prioritize transparency at every stage, ensuring clear communication and full visibility throughout the engagement.",
    },
  ];
  
  const ITStaffBenefits = () => {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-[#2169F7] leading-snug">
              Benefits of our IT Staff{" "}
              <span className="text-black">Augmentation Services</span>
            </h3>
          </div>
  
          <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition duration-200"
              >
                <div className="mb-3">{benefit.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ITStaffBenefits;
  