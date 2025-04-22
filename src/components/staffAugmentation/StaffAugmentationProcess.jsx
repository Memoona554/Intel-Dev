import {
  FaClipboardList,
  FaUserCheck,
  FaUsers,
  FaThumbsUp,
} from "react-icons/fa";

const processSteps = [
  {
    icon: <FaClipboardList className="text-2xl text-[#2169F7]" />,
    title: "Submit Your Project Requirements",
    description:
      "Companies begin by sharing project details, including required tech stack, team size, duration, and business objectives. The more precise the information, the faster we can align the right experts with your needs.",
  },
  {
    icon: <FaUserCheck className="text-2xl text-[#2169F7]" />,
    title: "Candidate Shortlisting & Interview",
    description:
      "Based on your project scope, we present a shortlist of pre-vetted developers. Need custom recruitment? We conduct fast-track sourcing and enable you to participate in interviews for the final selection.",
  },
  {
    icon: <FaUsers className="text-2xl text-[#2169F7]" />,
    title: "Finalize and Onboard Talent",
    description:
      "Once candidates are approved, we handle all administrative setup. Your selected developers are onboarded and integrated into your project environment, ready to contribute from day one.",
  },
  {
    icon: <FaThumbsUp className="text-2xl text-[#2169F7]" />,
    title: "Project Execution & Delivery",
    description:
      "Monitor ongoing work using your preferred tools. We also offer dedicated Project Managers (optional) to support delivery timelines and ensure communication between your in-house and augmented teams.",
  },
];

const StaffAugmentationProcess = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Our IT Staff Augmentation Process{" "}
          <span className="font-bold text-gray-800">- How We Ensure Fast Hiring</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          We streamline IT staff augmentation through a project-focused approach, enabling companies to onboard top-tier talent quickly for time-sensitive and critical initiatives. From the moment a company reaches out to project initiation, we ensure a seamless and efficient hiring experience.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition duration-200"
            >
              <div className="mb-4">{step.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
              <p className="text-gray-700 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffAugmentationProcess;
