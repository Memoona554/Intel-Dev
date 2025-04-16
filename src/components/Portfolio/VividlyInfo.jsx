import React from "react";

const VividlyInfo = () => {
    const techStack = [
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Laravel", logo: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "DevOps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }, // using Docker for DevOps symbol
        { name: "Software Development", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" }, // generic rep
        { name: "LLM", logo: "https://img.icons8.com/color/48/artificial-intelligence.png" },
        { name: "Embedding", logo: "https://img.icons8.com/color/48/brain.png" },
        { name: "Agents", logo: "https://img.icons8.com/color/48/artificial-intelligence.png" },
      ];
  return (
   <>
    <section className="py-12 lg:py-20 px-4 md:px-8 lg:px-16" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200">
          <img
            src="https://www.vaival.com/wp-content/uploads/2024/01/Group-27681-1.webp"
            alt="Float Funnel"
            className="w-full h-auto "
          />
        </div>

        <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-delay="300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-600 text-lg">
          To meet the client’s demands, a solution was designed using modern frameworks and cloud infrastructure. The tech stack included PHP, Laravel, Vue.js, Tailwind CSS, and Azure — allowing for the creation of reliable, scalable, and maintainable applications. Emphasis was placed on AI integration, rigorous testing, and team enablement through mentorship and modern DevOps practices.          </p>
        </div>
      </div>
    </section>

    <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#eff5ff]" data-aos="fade-up" data-aos-delay="400">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-delay="500">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Requirements</h2>
          <p className="text-gray-600 text-lg">
          The client needed a scalable and maintainable software architecture that could support real-world applications involving machine learning and AI. They sought a full-stack solution that was not only robust and efficient but also integrated seamlessly into existing systems. The system required collaborative team leadership, strong version control, and adherence to modern development practices.          </p>
        </div>

        <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="600">
          <img
            src="https://www.vaival.com/wp-content/uploads/2024/01/Group-27681-1.webp"
            alt="Float Funnel"
            className="w-full h-auto "
          />
        </div>
      </div>
    </section>
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2" data-aos="zoom-in" data-aos-delay="200">
            <img
              src="https://www.vaival.com/wp-content/uploads/2024/01/image-120.webp"
              alt="Solution Preview"
              className="w-full h-auto "
            />
          </div>

          <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Solution</h2>
            <p className="text-gray-600 mb-6">
                I provide solution. 
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Architected scalable and maintainable software systems using PHP, Laravel, Vue.js, and Tailwind CSS.</li>
              <li>Deployed and managed cloud infrastructure on Microsoft Azure for high availability and performance.</li>
              <li>Applied machine learning techniques to design, train, and optimize models for real-world use cases.</li>
              <li>Integrated AI solutions into existing systems for seamless operation and scalability.</li>
              <li>Maintained code quality with comprehensive testing and thorough debugging.</li>
              <li>Utilized version control systems such as Git, SVN, and Mercurial for efficient team collaboration.</li>
              <li>Led and mentored junior developers, fostering a growth-oriented and collaborative team culture.</li>
              <li>Practiced agile development methodologies, enabling fast iteration, flexibility, and improved delivery cycles.</li>

              <li>Maintained a commitment to continuous learning, staying up to date with emerging technologies and industry best practices.</li>

            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full bg-blue-700 py-8" data-aos="fade-up" data-aos-delay="100">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <img
            src="https://www.vaival.com/wp-content/uploads/2024/01/Group-24391-2-scaled.webp"
            alt="Landing Page Visual"
            
            className=" w-full h-auto object-cover"
        
          />
        </div>
      </div>
    </section>
    <section className="py-5 bg-[#eff5ff]" data-aos="fade-up" data-aos-delay="200">
        <h1 className="lg:text-5xl text-4xl text-center py-10 max-w-7xl mx-auto">Results</h1>
        <p className="max-w-7xl mx-auto text-center py-10">Successfully architected and delivered robust, scalable applications using PHP, Laravel, Vue.js, and Tailwind CSS, with seamless integration into cloud platforms like Azure. Strengthened software reliability through thorough testing and debugging, while driving innovation by implementing machine learning models and scalable AI solutions. Demonstrated strong version control practices with Git, SVN, and Mercurial, and provided mentorship to junior developers, fostering a collaborative team culture. Continuously embraced modern development methodologies and technologies, including agile workflows, to ensure high-quality, maintainable solutions.</p>
    </section>
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          <strong>Project Tech Stack</strong>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-12 h-12 mb-2 object-contain"
              />
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
   </>
  );
};

export default VividlyInfo;
