import React from "react";

const AIPoweredHighlights = () => {
  const features = [
    {
      number: "01",
      title: (
        <>
          Pool of talented <br /> <span className="text-blue-600">AI-Powered</span> developers
        </>
      ),
    },
    {
      number: "02",
      title: (
        <>
          <span className="text-blue-600">2x faster</span> development cycles
        </>
      ),
    },
    {
      number: "03",
      title: (
        <>
          High-quality & <br />
          <span className="text-blue-600">bug-free</span> software solutions
        </>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 leading-snug">
          Supercharge Your Workforce with <br />
          <span className="font-bold">AI-Powered Developers</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">{feature.number}</div>
              <div className="text-lg font-medium text-black">{feature.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIPoweredHighlights;
