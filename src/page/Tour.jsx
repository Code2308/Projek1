import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaSearch, FaMapMarkerAlt, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import burniTelong from "../assets/Burni telong.jpeg";
import gunungMerbabu from "../assets/Gunung Merbabu.jpeg";
import gunungRinjani from "../assets/Gunung Rinjani.jpeg";
import gunungLeuser from "../assets/Gunung Leuser.jpeg";
import gunungJayawijaya from "../assets/Gunung jayawijaya.jpg";
import gunungGede from "../assets/Gunung Gede.jpeg";
import gunungSemeru from "../assets/Gunung semeru.jpeg";
import gunungSorakmerapi from "../assets/sorak merapi.jpg";
import gunungBromo from "../assets/Gunung bromo.jpeg";
import gunungLawu from "../assets/Gunung lewu.jpeg";

const tours = [
  { id: 1, title: "Gunung Burni Telong", date: "Aceh", rating: 5, image: burniTelong, description: "Pendakian menantang dengan panorama pegunungan Aceh yang memukau." },
  { id: 2, title: "Gunung Merbabu", date: "Jawa Tengah", rating: 5, image: gunungMerbabu, description: "Rute populer, padang savana, sunrise bagus dan dekat Yogyakarta." },
  { id: 3, title: "Gunung Rinjani", date: "Nusa Tenggara Barat", rating: 5, image: gunungRinjani, description: "Trek panjang, Segara Anak, favorit para pendaki nasional." },
  { id: 4, title: "Gunung Leuser", date: "Aceh - Sumatera Utara", rating: 5, image: gunungLeuser, description: "Hutan tropis lebat, habitat orangutan, pengalaman eco-trek." },
  { id: 5, title: "Gunung Jayawijaya (Puncak Carstensz)", date: "Papua  ", rating: 5, image: gunungJayawijaya, description: "Salah satu yang paling ekstrim; salju tropis & tantangan tinggi." },   
  { id: 6, title: "Gunung Gede", date: "Jawa Barat", rating: 5, image: gunungGede, description: "Pendakian singkat, cocok weekend-trip, pemandangan kawah dan savana." },
  { id: 7, title: "Gunung Semeru", date: "Jawa Timur", rating: 5, image: gunungSemeru, description: "Tertinggi di Jawa, terkenal dengan Ranu Kumbolo dan Mahameru." },
  { id: 8, title: "Gunung Sora / Merapi", date: "Jawa Tengah - Yogyakarta", rating: 5, image: gunungSorakmerapi, description: "Gunung aktif dengan pemandangan lava dome dan jalur menantang." },
  { id: 9, title: "Gunung Bromo", date: "Jawa Timur", rating: 5, image: gunungBromo, description: "Sunrise legendaris, lautan pasir, cocok untuk pemula & fotografer." },
  { id: 10, title: "Gunung Lawu", date: "Jawa Tengah - Jawa Timur", rating: 5, image: gunungLawu, description: "Jalur ramah pemula, banyak situs sejarah dan pemandangan hijau." },
];

export default function Tour() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 4;
  const navigate = useNavigate();

  const filteredTours = tours.filter((tour) =>
    tour.title.toLowerCase().includes(search.toLowerCase()) ||
    tour.date.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filteredTours.length / perPage));
  const start = (page - 1) * perPage;
  const currentTours = filteredTours.slice(start, start + perPage);

  // Variants animasi untuk cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background animasi */}
      <div className="absolute inset-0 bg-animate"></div>

      {/* Overlay biar konten tetap kebaca */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Konten */}
      <div className="relative z-10 flex flex-col min-h-screen">

      {/* Konten utama */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <section className="py-10 px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          {/* Sidebar */}
          <motion.aside
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#697565] rounded-lg p-6">
              <h3 className="text-lg italic font-semibold mb-4">Search Tour</h3>
              <p className="text-sm mb-4">Find your dream tour today!</p>
              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Tour"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                    className="w-full px-3 py-2 rounded-md text-black"
                  />
                  <FaSearch className="absolute right-3 top-3 text-gray-400" />
                </div>
                <div className="relative">
                  <input type="text" placeholder="Tour Type" className="w-full px-3 py-2 rounded-md text-black" />
                  <FaMapMarkerAlt className="absolute right-3 top-3 text-gray-400" />
                </div>
                <div className="relative">
                  <input type="text" placeholder="Destination" className="w-full px-3 py-2 rounded-md text-black" />
                  <FaMapMarkerAlt className="absolute right-3 top-3 text-gray-400" />
                </div>
                <button className="w-full py-2 bg-[#697565] text-white rounded-md hover:bg-[#5b6b5a] transition">
                  FIND TOURS
                </button>
              </div>
            </div>
            <div className="bg-green-200 text-gray-800 rounded-lg p-4">
              <h4 className="font-bold text-sm mb-2">DAPATKAN HARGA PROMO</h4>
              <p className="text-xs">Masukkan email di newsletter (setup Mailchimp di backend).</p>
            </div>
          </motion.aside>

          {/* Konten utama */}
          <div className="md:col-span-3">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              <AnimatePresence>
                {currentTours.map((tour) => (
                  <motion.article
                    key={tour.id}
                    className="border rounded-lg shadow-sm bg-white text-black overflow-hidden cursor-pointer hover:shadow-md transition"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: 20 }}
                    onClick={() => navigate("/opentrip", { state: { selectedTour: tour } })}
                  >
                    <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(tour.rating)].map((_, i) => <FaStar key={i} />)}
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">{tour.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{tour.date}</p>
                      <p className="text-gray-700 text-sm">{tour.description}</p>
                    </div>
                    <div className="flex justify-between items-center border-t p-3 text-sm text-gray-600">
                      <span>Explore</span>
                      <FaChevronRight />
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Pagination */}
            <motion.div className="flex justify-center items-center space-x-2 mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }}>
              <button
                className="p-2 border rounded-md text-gray-200 disabled:opacity-50"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
              >
                <FaChevronLeft />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => setPage(num)}
                  className={`px-3 py-1 border rounded-md ${num === page ? "bg-gray-800 text-white" : "text-white"}`}
                >
                  {num}
                </button>
              ))}

              <button
                className="p-2 border rounded-md text-gray-200 disabled:opacity-50"
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={page === totalPages}
              >
                <FaChevronRight />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Konten tambahan */}
        <motion.div className="mt-16 space-y-12 px-6 md:px-16 text-white" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}>
          <div className="bg-green-50/90 p-8 rounded-lg shadow-md text-black">
            <h2 className="text-2xl font-bold mb-4">Tips Mendaki Gunung dengan Aman</h2>
            <p className="mb-4">Sebelum mendaki, pastikan kamu membawa perlengkapan lengkap...</p>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
}
