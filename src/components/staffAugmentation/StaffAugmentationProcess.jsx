import {
    FaClipboardList,
    FaUserCheck,
    FaUsers,
    FaThumbsUp,
  } from "react-icons/fa";
  
  const processSteps = [
    {
      icon: <FaClipboardList className="text-2xl text-[#2169F7]" />,
      title: "Share Requirements",
      description:
        "Share your augmentation needs, the relevant tech stack, team size and staffing period. The more details we have, the quicker we can connect you with the ideal candidates.",
    },
    {
      icon: <FaUserCheck className="text-2xl text-[#2169F7]" />,
      title: "Shortlisting Candidates",
      description:
        "We offer ready-to-go teams for your urgent staff needs. You can join the selection and interview phase if you need custom-recruited developers.",
    },
    {
      icon: <FaUsers className="text-2xl text-[#2169F7]" />,
      title: "Onboard Remote Programmers",
      description:
        "Once you have hand-picked your remote programmers, integrate them with your in-house team by briefing them on project details and assigning responsibilities.",
    },
    {
      icon: <FaThumbsUp className="text-2xl text-[#2169F7]" />,
      title: "Get Your Project Delivered",
      description:
        "Monitor project’s development and success via your tools. We also offer part-time or full-time Project Manager to help manage your team.",
    },
  ];
  
  const StaffAugmentationProcess = () => {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Our IT Staff Augmentation Process{" "}
            <span className="font-normal text-gray-800">- How We Ensure Fast Hiring</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Our carefully thought-out process for IT staff augmentation ensures you get the best talent-pool in no time for your critical, time-sensitive projects. From requirement sharing to project initiation, you can onboard the right people in just a matter of days.
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
  