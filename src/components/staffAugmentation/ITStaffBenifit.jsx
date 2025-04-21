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
        "Our IT staff augmentation company saves you from the hassles of shortlisting and recruiting a vetted development team. We take charge of the screening process and send you the most relevant CVs for interviews.",
    },
    {
      icon: <FaUsersCog className="text-[#2169F7] text-2xl" />,
      title: "Access to Vetted Talent",
      description:
        "Intel Devs offers access to a vetted talent pool at affordable costs, ready to immediately join your business operations. With certified software specialists, you can amplify your teams’ progress for quick and effective results.",
    },
    {
      icon: <FaDollarSign className="text-[#2169F7] text-2xl" />,
      title: "Lower Operational Costs",
      description:
        "Our streamlined IT staffing services ensure you only pay for the resources you need, reducing unnecessary overheads linked with traditional hiring.",
    },
    {
      icon: <FaFileContract className="text-[#2169F7] text-2xl" />,
      title: "Fewer Legal Hassles",
      description:
        "We, being your IT staff consulting company, remain the official employers of your remote hires. Our IT recruitment team will handle all of the legal responsibilities and documentation associated with the processes.",
    },
    {
      icon: <FaClock className="text-[#2169F7] text-2xl" />,
      title: "Aggressive Deadlines",
      description:
        "Our team of developers can meet even the most aggressive project deadlines in time. Our dynamic and skilled professionals are committed to exceeding project timelines.",
    },
    {
      icon: <FaCogs className="text-[#2169F7] text-2xl" />,
      title: "Full Control Over Processes",
      description:
        "We provide you with complete control over candidate selection and onboarding, encouraging you to hand-pick your resources in the screening process.",
    },
    {
      icon: <FaSearch className="text-[#2169F7] text-2xl" />,
      title: "Work Transparency",
      description:
        "Intel Devs is committed to openness, ensuring every phase of our information technology staff augmentation services is clear & transparent.",
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
  