import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaClock, FaStar, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const photos = [
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
];


// Komponen rating
const StarRating = ({ rating }) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  for (let i = 0; i < full; i++) stars.push(<FaStar key={i} className="text-yellow-400" />);
  if (half) stars.push(<FaStar key="half" className="text-yellow-300 opacity-60" />);
  return <div className="flex gap-1">{stars}</div>;
};

export default function Card() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const next = () => setCurrentIndex((p) => (p + 1) % photos.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + photos.length) % photos.length);

  // 🔹 Auto-slide setiap 4 detik
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  // 🔹 Klik card → kirim ke OpenTrip
  const handleSelect = (photo) => {
    navigate("/opentrip", { state: { selectedTrip: photo } });
  };

  return (
    <section className="relative z-10 flex flex-col py-12 text-center mb-10">
      <p className="text-white italic mb-2">Take a Look at Our</p>
      <h2 className="text-3xl font-bold text-white uppercase pb-5">MOST POPULAR TOURS</h2>

      <div className="relative flex items-center justify-center gap-4 w-full max-w-6xl mx-auto">
        {/* Card kiri */}
        <motion.div
          key={photos[(currentIndex - 1 + photos.length) % photos.length].id}
          className="w-1/4 opacity-60 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={prev}
        >
          <img
            src={photos[(currentIndex - 1 + photos.length) % photos.length].image}
            alt="prev"
            className="w-full h-48 object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Card utama */}
        <AnimatePresence mode="wait">
          <motion.div
            key={photos[currentIndex].id}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.6 }}
            className="w-1/2 bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
            onClick={() => handleSelect(photos[currentIndex])}
          >
            <div className="h-72 relative">
              <img
                src={photos[currentIndex].image}
                alt={photos[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
            </div>
            <div className="p-6 text-black">
              <h3 className="text-2xl font-bold">{photos[currentIndex].title}</h3>
              <p className="text-gray-600 mt-2">{photos[currentIndex].description}</p>
              <StarRating rating={photos[currentIndex].rating} />
              <div className="flex justify-between items-center border-t mt-4 pt-3 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <FaClock className="text-green-700" />
                  <span>{photos[currentIndex].duration}</span>
                </div>
                <FaArrowRight className="text-green-700" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Card kanan */}
        <motion.div
          key={photos[(currentIndex + 1) % photos.length].id}
          className="w-1/4 opacity-60 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={next}
        >
          <img
            src={photos[(currentIndex + 1) % photos.length].image}
            alt="next"
            className="w-full h-48 object-cover rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
