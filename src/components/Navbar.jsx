import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Tour", path: "/tour" },
    { name: "Open Trip", path: "/opentrip" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full  z-50 transition-all duration-500 ${
        scrolled
          ? " text-black shadow-md"
          : " text-red backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide">
           <span className="text-white">HIKING</span>
           <span className="text-red-600">ID</span>
          </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium items-center">
          {menuItems.map((item, i) => (
            <motion.li
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Link to={item.path} className="hover:text-red transition">
                {item.name}
              </Link>
            </motion.li>
          ))}

          {/* CTA */}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Link
              to="/opentrip"
              className={`px-4 py-2 rounded-full font-semibold shadow transition ${
                scrolled
                  ? "bg-[#374C35] text-white hover:bg-green-600"
                  : "bg-green-700 text-white hover:bg-green-600"
              }`}
            >
              Book Now
            </Link>
          </motion.li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl focus:outline-none"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } ${scrolled ? "bg-white text-white" : "bg-black/90 text-white"}`}
      >
        <ul className="flex flex-col space-y-6 p-6 text-center font-medium">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={toggleMenu}
                className="hover:text-green-400 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/opentrip"
              onClick={toggleMenu}
              className="px-4 py-2 bg-[#374C35] text-white rounded-full font-semibold shadow hover:bg-green-600 transition inline-block"
            >
              Book Now
            </Link>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  );
}
