const plans = [
    {
      title: "Basic Plan",
      subtitle: "up to 4 hours/day",
      button: "GET FREE ESTIMATE",
      features: [
        "Unlimited tasks",
        "1 active task at a time",
        "Upto 48 hrs delivery",
        "Shared project manager",
        "BI-weekly progress meeting",
        "Full QA Services",
        "No administrative cost"
      ]
    },
    {
      title: "Pro Plan",
      subtitle: "up to 8 hours/day",
      button: "GET FREE ESTIMATE",
      features: [
        "Unlimited tasks",
        "2 active tasks at a time",
        "Priority support",
        "Upto 48 hrs delivery",
        "Shared project manager",
        "BI-weekly progress meetings",
        "Full QA Services",
        "No administrative cost"
      ]
    },
    {
      title: "Enterprise Plan",
      subtitle: "on demand task deadlines",
      button: "GET FREE ESTIMATE",
      features: [
        "Multiple active tasks",
        "Priority support and SLA",
        "Dedicated development teams",
        "Scale or downgrade anytime",
        "Better cost management",
        "BI-weekly progress meetings",
        "Full management and QA",
        "No administrative cost"
      ]
    }
  ];
  
  const SubscriptionPlans = () => {
    return (
      <section className="bg-blue-600 text-white py-16 px-4" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            SDAAS Subscription Plans <span className="font-light">We Offer</span>
          </h2>
          <p className="text-white/90 mb-10">
            Choose the best suitable plan that comes with 7-day risk free trial.
          </p>
  
          <div className="grid gap-6 md:grid-cols-3 ">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white text-black rounded-xl shadow-2xl p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{plan.subtitle}</p>
                <a
                  href="#"
                  className="bg-blue-600 text-white px-4 py-2  shadow-lg rounded-full mb-4 hover:bg-blue-700 transition text-sm font-medium self-center"
                >
                  {plan.button}
                </a>
                <div className="text-sm">
                  <h4 className="font-semibold border-b border-gray-300 pb-2 mb-3">Features</h4>
                  <ul className="space-y-2 text-gray-800">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✔️</span>
                        <span className={feature.includes("active") ? "font-semibold" : ""}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SubscriptionPlans;
  