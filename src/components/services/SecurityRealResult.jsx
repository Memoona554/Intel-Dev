export default function ResultsTimeline() {
    const sections = [
      {
        title: "Threat-Proof",
        highlights: [
          "Cut average threat detection time from 20 minutes to under 2 minutes",
          "95% reduction in hacking attempts within first 3 months",
          "Reduced incident response time by 80%, enabling faster recovery",
        ],
        image: "https://www.vaival.com/wp-content/uploads/2024/11/Images-01.jpg",
      },
      {
        title: "Zero Data Leaks",
        highlights: [
          "Zero data leak incidents over 12-month period",
          "Achieved 100% compliance with GDPR and HIPAA requirements",
          "Reduced potential compliance penalties by 90%",
        ],
        image: "https://www.vaival.com/wp-content/uploads/2024/11/Images-03-2.jpg",
      },
      {
        title: "Prevent 6-Figure Losses",
        highlights: [
            "Saved our clients approximately $200,000 in potential losses within first 6 months.",
          "Faster incident response led our clients to resume operations 4x faster than their previous benchmarks",
          
        ],
        image: "https://www.vaival.com/wp-content/uploads/2024/11/Images-02.jpg",
      },
    ];
  
    return (
      <section className="bg-white py-16" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Real Results <span className="text-primary">from Real Businesses</span>
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">From Startups To Enterprises</p>
  
          <div className="space-y-20">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                } gap-10`}
              >
                <div className="md:w-1/2">
                  <img src={section.image} alt={section.title} className="rounded-xl shadow-lg w-full" />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold text-primary mb-4">{section.title}</h3>
                  <ul className="space-y-3 list-disc list-inside text-gray-700">
                    {section.highlights.map((item, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  