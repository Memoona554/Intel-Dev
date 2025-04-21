import React from "react";

const tools = [
  "HTML5",
  "CSS3",
  "SCSS",
  "React JS",
  "Next JS",
  "Redux",
  "TypeScript",
  "Context API",
  "React Hooks",
  "Git",
  "Docker",
  "CI/CD Knowledge of interacting with RESTful APIs",
  "Experience in versioning technologies such as Git, Bitbucket, Agile/DevOps Environment",
];

const ToolsAndTechnologies = () => {
  return (
   <>
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            <strong>Tools and</strong> Technologies
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Our React Developers have hands-on experience with the latest tools and technologies to develop highly reliable, scalable and robust solutions.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool, index) => (
            <button
              key={index}
              className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-800 text-sm px-4 py-2 rounded transition duration-300"
            >
              {tool}
            </button>
          ))}
        </div>
      </div>
    </section>
    {/* <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Hire Top-Rated React Developers
            <br />
            <span className="text-primary">in 3 Steps</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hire top-rated react developers with our streamlined hiring process.
            Our three-step approach will help you find the perfect fit for your
            projects in just a matter of days.
          </p>
        </div>

        <div className="hidden md:flex justify-center mb-10">
          <img
            src="https://www.vaival.com/wp-content/uploads/2024/03/Group-57428.webp"
            alt="Three Steps"
            className="max-w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start text-center md:text-left">
            
            <h3 className="text-xl font-semibold mb-2">Shortlist React Candidates</h3>
            <p className="text-gray-600">
              Navigate through our pre-vetted list of react developers and choose
              the candidates who are best fit for your project requirements.
            </p>
          </div>

          <div className="flex flex-col items-start text-center md:text-left">
            
            <h3 className="text-xl font-semibold mb-2">Interview the Developers</h3>
            <p className="text-gray-600">
              Schedule interviews with selected candidates to evaluate their skills,
              communication, and project understanding.
            </p>
          </div>

          <div className="flex flex-col items-start text-center md:text-left">
            
            <h3 className="text-xl font-semibold mb-2">Onboard & Start Working</h3>
            <p className="text-gray-600">
              Choose your ideal candidate and begin working with them right away
              with our smooth onboarding process.
            </p>
          </div>
        </div>
      </div>
    </section> */}
   </>
  );
};

export default ToolsAndTechnologies;
