export default function CertifiedAndTestimonials() {
    return (
      <section className="w-full">
        <div className="bg-blue-600 py-10" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-white text-2xl font-semibold text-center mb-6">Certified By</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 px-4">
            <img src="https://demo.vaival.com/wp-content/uploads/2024/10/Group-1000005822-297x300.png" alt="ISO" className="h-12 lg:h-24 object-contain" />
            <img src="https://demo.vaival.com/wp-content/uploads/2024/10/Group-1000005818-297x300.png" alt="Cert 2" className="h-12 lg:h-24 object-contain" />
            <img src="https://demo.vaival.com/wp-content/uploads/2024/10/Group-1000005821-297x300.png" alt="CMM" className="h-12 lg:h-24 object-contain" />
            <img src="https://demo.vaival.com/wp-content/uploads/2024/10/Group-1000005824-297x300.png" alt="APICTA" className="h-12 lg:h-24 object-contain" />
            <img src="https://www.vaival.com/wp-content/uploads/2023/11/Group-57873-1.png" alt="P@SHA" className="h-12 lg:h-24 object-contain" />
          </div>
        </div>
  
        <div className="bg-[#F3F8FF] py-16 px-6" data-aos="fade-up" data-aos-delay="200">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              What <span className="text-blue-600 font-bold">Our Clients</span> Are Saying
            </h2>
            <p className="text-gray-600 text-sm mb-12">
              Testimonials gives prospects confidence of a positive experience. Testimonials show that others have
              taken action and it has proved successful for them.
            </p>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="space-y-4">
                <p className="text-sm text-gray-700">
                  Vaival Technologies has proven to be an outstanding partner for SecOps services. Their SecaaS offering
                  provides us with highly skilled security professionals who ensure our digital assets are protected around the clock...
                </p>
                <div className="flex items-center gap-3">
                  <img src="/images.jpg" alt="Jamie" className="h-10 w-10 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold text-blue-600">Jamie Thompson</p>
                    <p className="text-xs text-gray-500">Vulcan Forged</p>
                  </div>
                </div>
              </div>
  
              <div className="space-y-4">
                <p className="text-sm text-gray-700">
                  We required a scalable and secure solution to protect our digital infrastructure, and Vaival’s SecaaS offering proved invaluable...
                </p>
                <div className="flex items-center gap-3">
                  <img src="/images.jpg" alt="Harry" className="h-10 w-10 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold text-blue-600">Harry Arbasa</p>
                    <p className="text-xs text-gray-500">Sendpad</p>
                  </div>
                </div>
              </div>
  
              <div className="space-y-4">
                <p className="text-sm text-gray-700">
                  Vaival’s SecaaS services have been a game-changer for our organization. Their team brought an impressive level of expertise...
                </p>
                <div className="flex items-center gap-3">
                  <img src="/images.jpg" alt="Rick" className="h-10 w-10 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold text-blue-600">Rick</p>
                    <p className="text-xs text-gray-500">Adstaker</p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="mt-10">
              <a href="#calendly" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
                Schedule Your Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  