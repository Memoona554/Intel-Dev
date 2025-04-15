export default function PricingPlans() {
    const plans = [
      {
        name: "Standard Plan",
        price: "$999",
        frequency: "Per Month",
        value: "Total Value: $3,000",
        description: "Best for Small Sized Applications",
        subdomains: "1-2 Subdomains Covered",
        execution: "Execution Cycles: 1 / month",
        inclusions: [
          "Web Application Vulnerability Assessment Scanning",
        ],
        buttonText: "Sign Up",
      },
      {
        name: "Essential Plan",
        price: "$2,999",
        frequency: "Per Month",
        value: "Total Value: $8,000",
        description: "Best for Medium Sized Applications",
        subdomains: "1-3 Subdomains Covered",
        execution: "Execution Cycles: 1 / month",
        inclusions: [
          "Includes Standard Plan Features",
          "Monthly Penetration Testing",
          "API Penetration Testing (up to 2 endpoints)",
        ],
        buttonText: "Sign Up",
      },
      {
        name: "Enterprise Plan",
        price: "Custom Pricing",
        frequency: "Project Based Time Frame",
        value: "Contact Sales",
        description: "Best for Enterprise Applications",
        subdomains: "Endpoint: Custom",
        execution: "Execution Cycles: Custom",
        inclusions: [
          "Includes Essential Plan Features",
          "Network Vulnerability Assessment and Penetration Testing",
          "Endpoint Security (EDR, MDR, VPN)",
          "Monetization by Gaining Control Over Attack Vectors",
          "Modern VAPT (Vulnerability Assessment & Penetration Testing)",
          "Visualization with Continuous Monitoring of IT Assets",
          "Cloud Security Audits (AWS, Azure, GCP), Governance, Risk and Compliance Audits (SOC2, GDPR)",
          "Continuous Breach Reporting (ISO 27001)",
          "IT Compliance Monitoring and Monitoring to Detect Critical Threats/Risks",
          "Incident and Response Planning & Threat Remediation",
          "Full Chain of Information Technology (IT) Security Architecture including Insider Threat Information Disclosure",
          "Smart Contract Audits for Blockchain",
          "Bug Bounty Program Management",
          "Advanced Network and Monthly Penetration Testing for High Risk Decentralized Applications",
          "Chain of Custody Documentation and Reporting",
          "Achieve Audit-Ready Compliance with Quarterly Security Audits",
        ],
        buttonText: "Book Meeting",
      },
    ];
  
    return (
      <section className="bg-[#18182F] py-16 text-white" data-aos="fade-up" data-aos-delay="200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Subscription Plans Available
          </h2>
          <p className="text-center text-lg text-gray-300 mb-10">
            Flexible, Affordable, Cancel Anytime<br />
            Choose the best suitable plan that comes with a 7-day risk free trial.
          </p>
          <p className="text-center text-sm text-gray-400 mb-12">
            Save Upto 10% by Paying Annually
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-indigo-600">{plan.name}</h3>
                  <p className="text-3xl font-bold mt-2">{plan.price}</p>
                  <p className="text-sm text-gray-600">{plan.frequency}</p>
                  <p className="text-sm text-gray-400 italic mt-1">{plan.value}</p>
  
                  <ul className="mt-4 text-sm space-y-1">
                    <li>✔️ {plan.description}</li>
                    <li>✔️ {plan.subdomains}</li>
                    <li>✔️ {plan.execution}</li>
                  </ul>
  
                  <h4 className="mt-4 font-semibold text-gray-700">Inclusions</h4>
                  <ul className="list-disc list-inside text-sm mt-2 text-gray-700 space-y-1">
                    {plan.inclusions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
  
                <button className="mt-6 bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition">
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  