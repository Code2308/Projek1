import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaSearch, FaMapMarkerAlt, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const tours = [
  { 
    id: 1, 
    title: "Gunung Burni Telong", 
    description: "Pemandangan indah dari Gunung Burni Telong.", 
    image: "https://i.pinimg.com/1200x/fb/56/7a/fb567aea0d1c74e96c20b1a0ff20ae3c.jpg", 
    duration: "5D4N", 
    rating: 4.5 
  },
  { 
    id: 2, 
    title: "Gunung Merbabu", 
    description: "Suasana tenang di Gunung Merbabu.", 
    image: "https://i.pinimg.com/736x/12/00/d3/1200d3b3d04c6ec0a819109e7ef4b4cb.jpg", 
    duration: "3D2N", 
    rating: 4.8 
  },
  { 
    id: 3, 
    title: "Gunung Rinjani", 
    description: "Keindahan alam Gunung Rinjani.", 
    image: "https://i.pinimg.com/736x/4d/93/76/4d9376326e0c11a2292cf76e6e54114f.jpg", 
    duration: "4D3N", 
    rating: 5 
  },
  { 
    id: 4, 
    title: "Gunung Leuser", 
    description: "Keindahan alam Gunung Leuser.", 
    image: "https://i.pinimg.com/736x/ab/67/27/ab6727fd0ec1f102149275b798e95dfc.jpg", 
    duration: "5D4N", 
    rating: 4.7 
  },
  { 
    id: 5, 
    title: "Gunung Jayawijaya", 
    description: "Pemandangan indah dari Gunung Jayawijaya.", 
    image: "https://i.pinimg.com/1200x/d9/52/f0/d952f076933a6b5d63690ca98bf15851.jpg", 
    duration: "6D5N", 
    rating: 4.9 
  },
  { 
    id: 6, 
    title: "Gunung Gede", 
    description: "Suasana tenang di Gunung Gede.", 
    image: "https://i.pinimg.com/1200x/e3/69/40/e3694037a717e49e1ca46a2f786f9205.jpg", 
    duration: "2D1N", 
    rating: 4.6 
  },
  { 
    id: 7, 
    title: "Gunung Semeru", 
    description: "Keindahan alam Gunung Semeru.", 
    image: "https://i.pinimg.com/1200x/41/b7/8a/41b78a561b24f34ef211e35757d89637.jpg", 
    duration: "3D2N", 
    rating: 5 
  },
  { 
    id: 8, 
    title: "Gunung Sorakmerapi", 
    description: "Keindahan alam Gunung Sorakmerapi.", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4qBqufmtLlrZ8VitR4Oz2LMpuUhVRyRMIyQ&s", 
    duration: "3D2N", 
    rating: 4.4 
  },
  { 
    id: 9, 
    title: "Gunung Sibuatan", 
    description: "Keindahan alam Gunung Sibuatan.", 
    image: "https://i.pinimg.com/1200x/95/19/cb/9519cb698bb6bb5ebfa1967f87b394fa.jpg", 
    duration: "3D2N", 
    rating: 4.4 
  },
  { 
    id: 10, 
    title: "Gunung Sibayak", 
    description: "Keindahan alam Gunung Sibayak.", 
    image: "https://i.pinimg.com/736x/43/fe/25/43fe253941351588bcedb8bd9c2fae51.jpg", 
    duration: "3D2N", 
    rating: 4.4 
  },
];

export default function Tour() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 4;
  const navigate = useNavigate();

  // Filter tours — proteksi kalau field tidak ada (awalnya kamu gunakan tour.date padahal tidak ada)
  const filteredTours = tours.filter((t) => {
    const q = search.toLowerCase().trim();
    if (!q) return true;
    return (
      (t.title && t.title.toLowerCase().includes(q)) ||
      (t.description && t.description.toLowerCase().includes(q)) ||
      (t.duration && t.duration.toLowerCase().includes(q))
    );
  });

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
                        {[...Array(Math.floor(tour.rating))].map((_, i) => <FaStar key={i} />)}
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">{tour.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{tour.duration}</p>
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
