import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section className="bg-white py-10 px-4" >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl  mb-12" data-aos="fade-up" data-aos-delay="100">
          <strong className="text-4xl">Get in</strong> touch
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-left px-4 py-6 bg-white  shadow-2xl rounded-[10px]" data-aos="fade-up" data-aos-delay="200">
          <div className=" px-4 py-4">
            <h3 className="text-xl font-semibold mb-4">Phone Number</h3>
            <div className="flex items-start space-x-4 mb-4">
              <FaPhoneAlt className="text-blue-600 text-2xl mt-1" />
              <div>
                <h4 className="font-medium">Pakistan</h4>
                <p className="text-gray-700">(+92) 322 421 8770</p>
              </div>
            </div>
            
          </div>

          <div className=" px-4 py-4">
            <h3 className="text-xl font-semibold mb-4">Email</h3>
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-red-600 text-2xl mt-1" />
              <div>
                <h4 className="font-medium">Mail us</h4>
                <p>
                  <a
                    href="mailto:javedadeel52@gmail.com"
                    className="text-gray-700 hover:underline"
                  >
                    javedadeel52@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className=" px-4 py-4">
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <div className="flex items-start space-x-4 mb-4">
              <FaMapMarkerAlt className="text-green-600 text-2xl mt-1" />
              <p className="text-gray-700">
              581 C,3rd floor, OPF Society,
              Lahore, Pakistan
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
