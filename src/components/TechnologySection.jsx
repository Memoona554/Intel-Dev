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
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/JAVA-1.webp', alt: 'Java' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/LAMP.webp', alt: 'LAMP' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/LEMP.webp', alt: 'LEMP' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/MEAN.webp', alt: 'MEAN' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/MERN.webp', alt: 'MERN' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/MEVN.webp', alt: 'MEVN' },
    ],
    2: [
      { src: 'https://www.vaival.com/wp-content/uploads/2023/11/logof1.png', alt: 'Frontend 1' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/11/logof2.png', alt: 'Frontend 2' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/11/logof3.png', alt: 'Frontend 3' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/11/logof4.png', alt: 'Frontend 4' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/11/logof5.png', alt: 'Frontend 5' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/11/logof6.png', alt: 'Frontend 6' },
    ],
    3: [
      { src: 'https://www.vaival.com/wp-content/uploads/2024/06/DJANGOs-1.webp', alt: 'Django' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/NODE-JS.webp', alt: 'Node.js' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/PYTHON.webp', alt: 'Python' },
      { src: 'https://www.vaival.com/wp-content/uploads/2024/06/JAVAs.webp', alt: 'Java' },
      { src: 'https://www.vaival.com/wp-content/uploads/2024/06/PHPs.webp', alt: 'PHP' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/LARAVEL.webp', alt: 'Laravel' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/MONGODB.webp', alt: 'MongoDB' },
    ],
    4: [
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/IOS.webp', alt: 'iOS' },
      { src: 'https://www.vaival.com/wp-content/uploads/2024/06/ANDROIDs.webp', alt: 'Android' },
      { src: 'https://www.vaival.com/wp-content/uploads/2024/06/FLUTTERss.webp', alt: 'Flutter' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/KOTLIN.webp', alt: 'Kotlin' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/SWIFT.webp', alt: 'Swift' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/REACT-NATIVE.webp', alt: 'React Native' },
    ],
    5: [
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/TEZOS.webp', alt: 'Tezos' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/ETHEREUM.webp', alt: 'Ethereum' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/POLKADOT.webp', alt: 'Polkadot' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/CARDANO.webp', alt: 'Cardano' },
    ],
    6: [
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/AWS.webp', alt: 'AWS' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/AZURE.webp', alt: 'Azure' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/DOCKER.webp', alt: 'Docker' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/GCP.webp', alt: 'GCP' },
      { src: 'https://www.vaival.com/wp-content/uploads/2023/12/KUBERNETTES.webp', alt: 'Kubernetes' },
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

          <div className="tab-content">
            {Object.entries(tabContents).map(([tabId, images]) => (
              <div
                key={tabId}
                id={`tab-content-${tabId}`}
                className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 ${parseInt(tabId) === activeTab ? 'block' : 'hidden'}`}
                role="tabpanel"
                aria-labelledby={`tab-title-${tabId}`}
              >
                {images.map((img, index) => (
                  <div key={index} className="flex items-center justify-center p-2">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="max-h-48 max-w-full object-contain"
                      loading="lazy"
                    />
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