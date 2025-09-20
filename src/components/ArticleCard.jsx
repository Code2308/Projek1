import React, { useState } from 'react';
import { FaMapMarkerAlt, FaStar, FaHeart, FaRegHeart, FaShareAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ArticleCard = ({ article }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(article.likes);

  const handleLike = () => {
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    setIsLiked(!isLiked);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl bg-white rounded-xl shadow-md overflow-hidden mb-8 transform transition duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
    >
      {/* Header Image */}
      <div className="relative">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full flex items-center">
          <FaStar className="text-yellow-500 mr-1" />
          <span className="font-bold">{article.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center text-gray-600 mb-2">
          <FaMapMarkerAlt className="mr-2 text-blue-500" />
          <span className="font-medium">{article.location}</span>
          <span className="mx-2">•</span>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
          {article.title}
        </h2>

        {/* Short description */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {article.excerpt}
        </p>

        {/* Author & Date */}
        <div className="flex items-center mb-4">
          <img 
            src={article.authorAvatar} 
            alt={article.author}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-medium text-gray-800">{article.author}</p>
            <p className="text-sm text-gray-500">{article.publishDate}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex space-x-4">
            <motion.button
              whileTap={{ scale: 1.2 }}
              onClick={handleLike}
              className={`flex items-center space-x-1 ${isLiked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 transition`}
            >
              {isLiked ? <FaHeart /> : <FaRegHeart />}
              <span>{likeCount}</span>
            </motion.button>

            <motion.button
              whileTap={{ scale: 1.2 }}
              className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition"
            >
              <FaShareAlt />
              <span>Bagikan</span>
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-blue-600 font-medium hover:text-blue-800 transition"
          >
            Baca Selengkapnya →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
