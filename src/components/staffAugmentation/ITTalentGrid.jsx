import React from "react";

const roles = [
  {
    title: "Web Developers",
    description: "Expand your IT Department with certified programmers across different tech stacks.",
    icon: "👨‍💻",
  },
  {
    title: "Mobile App Developers",
    description: "Get your mobile app developed in precise time and budget by best iOS and Android developers.",
    icon: "📱",
  },
  {
    title: "Frontend / Backend Developers",
    description: "Get engaging user interfaces and scalable server solutions for web or mobile apps of any scale.",
    icon: "🧩",
  },
  {
    title: "QA Engineers",
    description: "Hire skilled QA and testing engineers for comprehensive quality assurance measures.",
    icon: "🧪",
  },
  {
    title: "Full-Stack Developers",
    description: "Build scalable solutions covering frontend, backend frameworks, and database management.",
    icon: "🧱",
  },
  {
    title: "AI Developer",
    description: "Get smart AI and ML solutions based on next-gen technologies like cloud, Angular, and more.",
    icon: "🤖",
  },
  {
    title: "Web Designers",
    description: "Get the best design services from our experienced user experience and user interface experts.",
    icon: "🎨",
  },
  {
    title: "DevOps Engineers",
    description: "Hire the best DevOps engineers for faster release time and efficient development operations.",
    icon: "⚙️",
  },
  {
    title: "Blockchain Developers",
    description: "Hire expert talent for cutting-edge solutions in decentralized apps, smart contracts, and more.",
    icon: "⛓️",
  },
];

const ITTalentGrid = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get The <span className="text-blue-700">Best IT Talent</span> Under One Roof
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Intel Devs engaged and ever-growing talent network of independent enterprise IT professionals reduces time-to-fill and means we deliver the talent you need for your mission-critical projects faster than anyone else.
          </p>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200  p-6 rounded-xl  hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{role.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                <p className="text-gray-600 text-sm">{role.description}</p>
              </div>
            ))}
          </div>

          <button className="mt-12 px-8 py-3 bg-blue-700 text-white rounded-full text-lg font-semibold hover:bg-blue-800 transition">
            HIRE NOW
          </button>
        </div>
      </section>
      <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <strong>Need Experts that</strong> are not Listed Here?
          </h2>
          <p className="text-gray-600 mb-6">
            Feel free to inform us of your needs. Our extensive talent database and proficient recruitment team empower us to locate candidates with diverse skill sets.
          </p>
          <a
            href="#calendly"
            className="inline-block px-8 py-3 bg-blue-700 text-white text-lg font-semibold rounded-full hover:bg-blue-800 transition"
          >
            Contact Us
          </a>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://www.vaival.com/wp-content/uploads/2023/12/Group-27183-1-1024x967.webp"
            alt="it staff augmentation services"
            className="rounded-2xl shadow-2xl w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default ITTalentGrid;
