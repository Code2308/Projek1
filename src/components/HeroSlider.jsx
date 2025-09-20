import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "https://i.pinimg.com/1200x/d5/fa/66/d5fa660d2e02cb8b5f2c3e1489919426.jpg",
    title: "Gunung Bromo",
    desc: "Saksikan sunrise paling indah di Indonesia.",
  },
  {
    image: "https://i.pinimg.com/736x/73/be/41/73be417530176dcf85c22ba53435f325.jpg",
    title: "Raja Ampat",
    desc: "Surga dunia bawah laut yang memukau.",
  },
  {
    image: "https://i.pinimg.com/1200x/e8/bb/98/e8bb98328dc40e420f5e356cbb486f47.jpg",
    title: "Gunung Rinjani",
    desc: "Petualangan mendaki dengan pemandangan spektakuler.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto ganti slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden pt-16 pb-50">
      {/* Background Slide */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: current === index ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Konten Tengah */}
      <motion.div
        key={current}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
          {slides[current].title}
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl">
          {slides[current].desc}
        </p>

        {/* Tombol CTA */}
        <Link
          to="/Tour"
          className="mt-6 px-8 py-3 bg-[#374C35] rounded-full font-semibold shadow-lg hover:bg-[#374C35]/80 transition"
        >
          Mulai Petualangan
        </Link>
      </motion.div>
    </section>
  );
}
