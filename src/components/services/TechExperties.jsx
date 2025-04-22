const expertiseData = [
    { 
      category: "Web Development",
      items: [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
      ]
    },
    {
      category: "Frontend Frameworks",
      items: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: 'Python',logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        {  name: 'Laravel',logo: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg' },
      ]
    },
    {
      category: "Database Management",
      items: [
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Firebase", logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
        { name: "MS SQL", logo: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" },
      ]
    },
    {
      category: "Mobile Development",
      items: [
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
      ]
    },
    {
      category: "Cloud Services",
      items: [
        { name: "AWS", logo: "https://www.vaival.com/wp-content/uploads/2024/07/download-28-1.webp" },
        { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      ]
    },
    {
      category: "DevOps",
      items: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      ]
    },
    {
      category: "Blockchain",
      items: [
        { name: "Ethereum", logo: "https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/ethereum.svg" },
        { name: "Solidity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
        { name: "Hyperledger", logo: "https://www.vaival.com/wp-content/uploads/2024/07/Group-58025.webp" },
      ]
    },
    {
      category: "AI/ML",
      items: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      ]
    },
    {
      category: "UI/UX Design",
      items: [
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Adobe XD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
        { name: "InVision", logo: "https://cdn.worldvectorlogo.com/logos/invision.svg" },
        { name: "Adobe Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
        { name: "Adobe Illustrator", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
      ]
    },
    {
      category: "QA and Testing",
      items: [
        { name: "Selenium", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
        { name: "Mocha", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" },
        { name: "Cypress", logo: "https://www.vaival.com/wp-content/uploads/2024/07/download-48-1.webp" },
        { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      ]
    }
  ];
  
  
  const TechExpertise = () => {
    return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-600">
              Expertise in Leading
            </h2><br />
            <p className="text-3xl text-black font-light">
              Frameworks & Languages
            </p>
            <p className="mt-2 text-black">
            Our software engineers excel at selecting the optimal tech stack combinations to develop high-performance software solutions.

            </p>
          </div>
  
          <div className="space-y-8"data-aos="fade-up" data-aos-delay="200" >
            {expertiseData.map((group, idx) => (
              <div data-aos="fade-up" data-aos-delay="100"
                key={idx}
                className="flex flex-col md:flex-row md:items-center md:justify-between border-t pt-6"
              >
                <span className="inline-block bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded-full mb-4 md:mb-0 w-full md:w-[15rem] text-center md:text-left">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full md:w-3/4">
                  {group.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center hover:scale-105 transition-transform w-20"
                    >
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-10 h-10 object-contain mb-1"
                        loading="lazy"
                      />
                      <span className="text-xs text-gray-700">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TechExpertise;
  