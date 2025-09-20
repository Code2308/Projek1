import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PostAndReviews() {
  return (
    <section className="py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* 🔹 Latest Post */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center text-xl font-bold text-white mb-2">
            LATEST POST
          </h2>
          <div className="w-16 h-1 bg-green-800 mx-auto mb-6"></div>

          <div className="bg-white shadow-lg rounded-xl overflow-hidden w-full">
            <img
              src="src/assets/Gunung Gede.jpeg"
              alt="Pantai Tercantik di Yogyakarta"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">
                🏔 Gunung Gede
              </h3>
              <p className="text-gray-600 text-sm mt-2 pb-5">
                Gunung Gede adalah gunung berapi yang terletak di Jawa Barat, Indonesia. Dengan ketinggian sekitar 2.958 meter di atas permukaan laut, Gunung Gede merupakan salah satu gunung tertinggi di Pulau Jawa. Gunung ini terkenal dengan keindahan alamnya yang memukau, termasuk hutan tropis yang lebat
              </p>
              <Link
                to="/ArticleList"
                className="mt-4 px-4 py-2 bg-green-800 text-white rounded-full hover:bg-green-700 transition focus:outline-none"
              >
                Read Now
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 🔹 Tour Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-center text-xl font-bold text-white mb-2">
            TOUR REVIEWS
          </h2>
          <div className="w-16 h-1 bg-green-800 mx-auto mb-6"></div>

          {/* Review 1 */}
          <motion.div
            className="flex items-start space-x-4 mb-6 border-b pb-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500 font-bold">J</span>
            </div>
            <div>
              <h4 className="font-semibold text-white">Jason Walker</h4>
              <p className="text-white text-sm mt-1">
                Just got back from doing this amazing trip, Great Boat, Great
                Crew and an amazing experience sailing these beautiful Islands
                of Flores. Thanks Jason and Pixie – Australia
              </p>
              <div className="flex text-yellow-400 mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Review 2 */}
          <motion.div
            className="flex items-start space-x-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">W</span>
            </div>
            <div>
              <h4 className="font-semibold text-white">Windi Sumarli</h4>
              <p className="text-white text-sm mt-1">
                Saya suka dengan keindahan alamnya
              </p>
              <div className="flex text-yellow-400 mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
