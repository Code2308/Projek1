import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <div className="relative flex flex-col">
      {/* 🔹 Background animasi */}
      <div className="absolute inset-0 bg-animate"></div>

      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔹 Konten */}
      <section className="relative z-10 py-20 px-6 text-center text-white">
        <motion.p
          className="italic text-lg mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join Our Next Adventure
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-extrabold uppercase mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          OPEN TRIP <span className="text-green-400">HIKING</span>
        </motion.h2>

        <motion.p
          className="max-w-3xl mx-auto mb-10 text-lg text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Nikmati pengalaman mendaki gunung bersama teman-teman baru. 
          Dengan harga terjangkau, fasilitas lengkap, dan pemandu profesional, 
          perjalananmu dijamin seru & berkesan.
        </motion.p>

        {/* 🔹 Tombol */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="/opentrip"
            className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
          >
            Daftar Sekarang
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
