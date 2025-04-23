import { FaTools, FaSyncAlt, FaProjectDiagram, FaSearch } from "react-icons/fa";

const AgileApproachSection = () => {
  const items = [
    {
      title: "Analyze Current State of IT Infrastructure",
      description:
        "We begin by conducting a thorough analysis of your existing digital capabilities, identifying strengths, weaknesses, and areas for improvement. With this analysis, we strategically plan our solutions that are precisely tailored to your business.",
      icon: <FaSearch className="text-[#23C994] text-4xl" />,
    },
    {
      title: "Development and Implementation",
      description:
        "This stage comprises the development of essential tools and software APIs, building a unified and smooth platform that integrates your current capabilities seamlessly in your evolving business landscape.",
      icon: <FaTools className="text-[#23C994] text-4xl" />,
    },
    {
      title: "IT and Business Alignment",
      description:
        "In this step, we gain a thorough understanding of your business objectives, and align the technology to achieve those objectives. This alignment enhances operational efficiency, creating a seamless integration of tech and business vision.",
      icon: <FaProjectDiagram className="text-[#23C994] text-4xl" />,
    },
    {
      title: "Maintenance and Continuous Support",
      description:
        "Intel Devs doesn't just implement solution(s); we ensure their longevity through proactive maintenance and continuous support. Our support team remains vigilant, ready to address evolving needs and challenges.",
      icon: <FaSyncAlt className="text-[#23C994] text-4xl" />,
    },
  ];

  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <strong>Our Agile Approach in IT Consulting</strong> 
          </h2>
          <p className="text-gray-700">
            Being globally recognized as a robust information technology consulting company, we believe in staying nimble and responsive in the fast-paced world of technology. Explore how we integrate agile methodology in our IT consulting and services to deliver efficient, adaptive solutions tailored to propel your business forward.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgileApproachSection;
