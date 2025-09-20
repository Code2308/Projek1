import { FaGlobeAsia, FaTag, FaUsers, FaClipboardCheck, FaHeadset, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaGlobeAsia className="text-white text-2xl" />,
      title: "Destinasi Menarik",
      desc: "Pesona Indonesia Tour menawarkan berbagai destinasi wisata menarik di Indonesia yang wajib untuk dikunjungi"
    },
    {
      icon: <FaTag className="text-white text-2xl" />,
      title: "Harga Terjangkau",
      desc: "Pesona Indonesia Tour memberikan pelayanan prima dengan harga murah yang proporsional dan rasional"
    },
    {
      icon: <FaUsers className="text-white text-2xl" />,
      title: "Tim Profesional",
      desc: "Pesona Indonesia Tour memiliki tim profesional yang kompak dan solid dalam memandu perjalanan wisata Anda"
    },
    {
      icon: <FaClipboardCheck className="text-white text-2xl" />,
      title: "Pemesanan Mudah",
      desc: "Pesona Indonesia Tour memiliki sistem reservasi online terintegrasi yang mudah digunakan dan user friendly"
    },
    {
      icon: <FaHeadset className="text-white text-2xl" />,
      title: "Pelayanan Terbaik",
      desc: "Pesona Indonesia Tour berkomitmen memberikan pelayanan terbaik dan menjamin kepuasan pelanggan"
    },
    {
      icon: <FaShieldAlt className="text-white text-2xl" />,
      title: "Keamanan",
      desc: "Pesona Indonesia Tour menjamin keamanan, keselamatan dan kenyamanan pelanggan selama dalam perjalanan wisata"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-16">
      {/* Judul */}
      <motion.h2
        className="text-3xl font-extrabold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        WHY CHOOSE US
      </motion.h2>

      <motion.div
        className="w-20 h-1 bg-green-800 mb-12 mx-auto rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      />

      {/* Grid fitur */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-start space-y-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Icon bulat */}
            <div className="flex items-center justify-center w-14 h-14 bg-green-800 rounded-full shadow-md">
              {feature.icon}
            </div>

            {/* Teks */}
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
