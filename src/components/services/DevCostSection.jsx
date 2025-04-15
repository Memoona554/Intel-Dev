const DevCostSection = () => {
    return (
      <section className="bg-[#eff5ff] py-12" data-aos="fade-up" data-aos-delay="100">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-blue-600">Eliminating High Development</span> Cost &amp; Low Quality Code
            </h2>
            <p className="text-gray-700 mb-4">
              Our software developer services are designed to tackle development challenges effectively, providing superior cost benefits with uncompromised code quality.
            </p>
            <p className="text-gray-900 font-medium mb-6">Solve Your Dev Problems</p>
  
            <a href="#calendly" className="inline-block bg-blue-600 text-white px-9 py-4 rounded-full text-sm font-medium hover:bg-blue-700 transition">
              Learn How!
            </a>
          </div>
  
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img
              src="https://www.vaival.com/wp-content/uploads/2024/08/Group-1000005755.webp"
              alt="Development Illustration"
              className="max-w-full lg:h-96 h-auto"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default DevCostSection;
  