/* eslint-disable no-unused-vars */
import { FaCube } from "react-icons/fa"; 
import { MdSecurity, MdOutlineGroups, MdAccessTime } from "react-icons/md";

const AdvantageCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-start text-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
    <div className="text-4xl text-blue-600">
      <Icon />
    </div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default function BlockchainAdvantages() {
  return (
    <section className="py-16 px-4 bg-blue-600"  data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-7xl  mx-auto text-start mb-12">
        <h2 className="text-3xl text-white text-center md:text-4xl font-bold"  data-aos="fade-up" data-aos-delay="200">
          <span className="font-normal ">Advantages of</span> Blockchain Technology
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 xl:w-[70%] lg:mx-auto"  data-aos="fade-up" data-aos-delay="300">
        <AdvantageCard
          icon={FaCube}
          title="Decentralization"
          description="Decentralization eliminates reliance on a single authority, fostering transparency and reducing the risk of system failures in blockchain networks."
        />
        <AdvantageCard
          icon={MdSecurity}
          title="Security"
          description="Utilizing advanced cryptographic techniques, blockchain provides robust security, protecting sensitive data and ensuring secure transactions."
        />
        <AdvantageCard
          icon={MdAccessTime}
          title="Transparency"
          description="Blockchain streamlines processes, reducing the need for intermediaries and increasing transaction speed, fostering efficiency in various industries."
        />
        <AdvantageCard
          icon={MdOutlineGroups}
          title="Efficiency"
          description="By removing intermediaries and automating processes, blockchain significantly reduces transaction costs, and offers a cost-effective solution for businesses."
        />
      </div>
    </section>
  );
}
