import React, { useState } from 'react';

const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, title: 'Full Stack' },
    { id: 2, title: 'Front End' },
    { id: 3, title: 'Back End' },
    { id: 4, title: 'Mobile' },
    { id: 5, title: 'Blockchain' },
    { id: 6, title: 'Devops & ML' },
  ];

  const tabContents = {
    1: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', name: 'MEAN' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'MERN' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', name: 'MEVN' },
    ],
    2: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML5' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS3' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', name: 'Vue.js' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', name: 'Angular' },
    ],
    3: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', name: 'Django' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', name: 'PHP' },
      { src: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg', name: 'Laravel' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB' },
    ],
    4: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', name: 'Android' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', name: 'Flutter' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React Native' },
    ],
    5: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg', name: 'Solidity' },
      { src: 'https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/ethereum.svg', name: 'Ethereum' },
      { src: 'https://www.vaival.com/wp-content/uploads/2024/07/Group-58025.webp', name: 'Hyperledger' },
    ],
    6: [
      { src: 'https://cdn.iconscout.com/icon/free/png-256/microsoft-azure-1868965-1583149.png', name: 'AWS' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', name: 'Azure' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', name: 'Docker' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', name: 'Kubernetes' },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-16" data-aos="fade-up" data-aos-delay="100">
      <div className="w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive range of expertise empowers businesses to seize new opportunities and achieve remarkable results.
          </p>
        </div>

        <div className="hidden md:block">
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap justify-center gap-2" role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  id={`tab-title-${tab.id}`}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`tab-content-${tab.id}`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          <div className="tab-content lg:max-w-5xl lg:mx-auto">
            {Object.entries(tabContents).map(([tabId, images]) => (
              <div
                key={tabId}
                id={`tab-content-${tabId}`}
                className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 ${parseInt(tabId) === activeTab ? 'block' : 'hidden'}`}
                role="tabpanel"
                aria-labelledby={`tab-title-${tabId}`}
              >
                {images.map((img, index) => (
                  <div key={index} className="flex items-center justify-center p-2">
                    <img
                      src={img.src}
                      alt={img.name}
                      className="max-h-20 max-w-full object-contain"
                      loading="lazy"
                    />
                    <h1 className='text-black'>{images.name}</h1>
                  </div>
                  
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <div className="space-y-8">
            {tabs.map((tab) => (
              <div key={tab.id} className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-center">{tab.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {tabContents[tab.id].map((img, index) => (
                    <div key={index} className="flex items-center justify-center p-2 bg-white rounded-lg shadow-sm">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="max-h-14 max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;