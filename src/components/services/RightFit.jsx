export default function RightFitAndLosses() {
    return (
      <section className="w-full" data-aos="fade-up" data-aos-delay="100">
        <div className="py-16 px-6 text-center" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Are You <span className="text-blue-600 font-bold">The Right Fit?</span>
          </h2>
          <p className="text-gray-600 text-sm mb-12 max-w-3xl mx-auto">
            Even though this is suitable for almost all kinds of businesses that require security support, we perform
            best if you belong to any of the following:
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            <div className="bg-white shadow-md rounded-md p-5 flex gap-4 items-start">
              <div className="text-blue-500 text-2xl bg-blue-100 p-4 font-bold">1</div>
              <p className="text-sm text-gray-700">
                You need to comply with regulations like SOC 2, GDPR, ISO 27001, HIPAA, and PCI-DSS.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-5 flex gap-4 items-start">
              <div className="text-blue-500 text-2xl bg-blue-100 p-4 font-bold">2</div>
              <p className="text-sm text-gray-700">
                You are in high-risk sectors or sectors that regularly deal with sensitive customer data.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-5 flex gap-4 items-start">
              <div className="text-blue-500 bg-blue-100 p-4 text-2xl font-bold">3</div>
              <p className="text-sm text-gray-700">
                You don’t have any internal cybersecurity expertise or are struggling to keep up with advanced threat landscapes.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-5 flex gap-4 items-start md:col-span-1">
              <div className="text-blue-500 text-2xl bg-blue-100 p-4 font-bold">4</div>
              <p className="text-sm text-gray-700">
                You have limited IT budgets looking to access world-class security expertise and tools without high overheads.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-5 flex gap-4 items-start md:col-span-2">
              <div className="text-blue-500 text-2xl bg-blue-100 p-4 font-bold">5</div>
              <p className="text-sm text-gray-700">
                You work with multiple suppliers or in IoT/Operational Technology sectors <br /> where supply chain security is critical.
              </p>
            </div>
          </div>
  
          <a href="#calendly" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
            Schedule Your Free Consultation
          </a>
        </div>
  
        <div className="bg-[#EAF2FF] py-16 px-6" data-aos="zoom-in" data-aos-delay="200">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold">
                Losses Companies Suffered Due To <br />
                Inadequate Cybersecurity Measures
              </h3>
              <p className="text-sm text-gray-600 mt-3 max-w-2xl">
                Each case underscores the dire consequences of inadequate cybersecurity and highlights the necessity of
                robust SecOps services to minimize risks, ensure compliance, and protect organizational assets.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="text-2xl mb-2">🔆</div>
                <h4 className="font-semibold text-sm">Equifax Data Breach (2017)</h4>
                <p className="text-sm text-gray-600">
                  A missed patch exposed data of 147 million people, costing over $1.4 billion in penalties and legal fees.{' '}
                  <a href="#" className="text-blue-600 underline text-xs">(Read more)</a>
                </p>
              </div>
              <div>
                <div className="text-2xl mb-2">🔆</div>
                <h4 className="font-semibold text-sm">Colonial Pipeline Attack</h4>
                <p className="text-sm text-gray-600">
                  A ransomware attack disrupted U.S. fuel supplies, leading to a $4.4 million ransom payment.{' '}
                  <a href="#" className="text-blue-600 underline text-xs">(Read more)</a>
                </p>
              </div>
              <div>
                <div className="text-2xl mb-2">🔆</div>
                <h4 className="font-semibold text-sm">Maersk Ransomware Attack</h4>
                <p className="text-sm text-gray-600">
                  A ransomware attack forced Maersk to rebuild 4,000 servers and 45,000 computers, costing an estimated $300 million.{' '}
                  <a href="#" className="text-blue-600 underline text-xs">(Read more)</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  