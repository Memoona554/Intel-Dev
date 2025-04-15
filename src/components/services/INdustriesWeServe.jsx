const industries = [
    {
      title: "Gaming",
      description: "Enhance in-game transactions, ownership, and security for an immersive and secure gaming ecosystem.",
      icon: "🎮",
    },
    {
      title: "E-commerce",
      description: "Ensure secure transactions, transparent supply chains, and build trust in online transactions.",
      icon: "🛒",
    },
    {
      title: "Healthcare",
      description: "Secure patient data, streamline processes, and enable interoperability for enhanced patient care.",
      icon: "🏥",
    },
    {
      title: "Banking & Finance",
      description: "Make transactions secure, transparent, and efficient, from smart contracts to digital identity verification.",
      icon: "🏛️",
    },
    {
      title: "Education",
      description: "Ensure integrity of credentials, streamline administrative processes, and secure educational records.",
      icon: "🎓",
    },
    {
      title: "Transport & Logistics",
      description: "Enhance supply chain transparency, reduce fraud, and improve overall efficiency by blockchain optimization.",
      icon: "🚚",
    },
    {
      title: "Retail & Consumer Goods",
      description: "Ensure transparent supply chains, streamline transactions, and build trust with consumers.",
      icon: "📦",
    },
    {
      title: "Telecommunication",
      description: "Secure communication, streamline billing processes, and ensure transparent transactions.",
      icon: "📡",
    },
    {
      title: "Automotive",
      description: "Ensure secure vehicle data, streamline supply chains, and enable transparent transactions.",
      icon: "🚗",
    },
    {
      title: "Energy",
      description: "Enhance grid efficiency and streamline energy trading for a sustainable and transparent energy future.",
      icon: "⚡",
    },
    {
      title: "Manufacturing",
      description: "Streamline supply chains, reduce fraud, and ensure transparent and efficient processes.",
      icon: "🏭",
    },
    {
      title: "Agriculture",
      description: "Ensure secure supply chains and improve traceability for a sustainable agribusiness ecosystem.",
      icon: "🌾",
    },
  ];
  
  export default function IndustriesWeServe() {
    return (
      <section className="py-16 px-4 bg-gray-50"  data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="font-normal">Industries</span> We Serve
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"  data-aos="fade-up" data-aos-delay="200">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex  gap-4 items-center"><div className="text-3xl">{industry.icon}</div>
                <h3 className="text-lg font-semibold">{industry.title}</h3></div>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  