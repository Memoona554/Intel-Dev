import { FaUserCheck, FaComments, FaUserTie, FaListAlt } from "react-icons/fa";

const HireScrumMaster = () => {
  const steps = [
    {
      icon: <FaUserCheck className="text-blue-500 text-4xl" />,
      title: "Define Your\nNeeds",
      description:
        "Define your requirements and the desired skill sets for scrum master/IT project manager. This step ensures a tailored approach to finding resources that align with your team dynamics and overall goals.",
    },
    {
      icon: <FaComments className="text-green-500 text-4xl" />,
      title: "Personalized\nConsultation",
      description:
        "Next, our experts will schedule a personalized consultation to understand your project specifications, timeline, budget, goals and preferences. This helps us further refine our search for ideal resources.",
    },
    {
      icon: <FaUserTie className="text-blue-400 text-4xl" />,
      title: "Talent Screening and\nShortlisting",
      description:
        " Intel Devs employs a rigorous screening process to identify experienced scrum masters who possess the right technical skills, industry experience, interpersonal abilities and leadership qualities.",
    },
    {
      icon: <FaListAlt className="text-green-500 text-4xl" />,
      title: "Choosing the\nBest Fit",
      description:
        "We present you with a curated list of top candidates who align with your requirements. You can review the portfolios, and conduct direct interviews to assess which scrum master is the best fit for your project.",
    },
  ];

  return (
    <section className="px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto text-center" data-aos="zoom-out" data-aos-delay="100">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <strong>How to Hire Scrum</strong> Master through  Intel Devs
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          We are a leading software development company with dedicated IT
          augmentation services for hiring top-tier scrum masters. Seamlessly
          hire scrum masters through  Intel Devs Technologies with our robust process
          designed to match your project requirements. Here’s how it works:
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold whitespace-pre-line mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireScrumMaster;
