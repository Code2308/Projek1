import React from 'react';
import ArticleCard from '../components/ArticleCard';

const sampleArticles = [
  {
    id: 1,
    title: "Menikmati Keindahan Alam di Pantai Kuta Bali",
    excerpt: "Pantai Kuta adalah salah satu destinasi wisata paling populer di Bali yang menawarkan pemandangan matahari terbenam yang spektakuler dan ombak yang cocok untuk berselancar...",
    imageUrl: "https://i.pinimg.com/1200x/59/74/74/597474d7588838c5ab9926ac4e5630ed.jpg",
    location: "Bali, Indonesia",
    category: "Pantai",
    rating: 4.8,
    author: "Rina Wijaya",
    authorAvatar: "https://example.com/rina.jpg",
    publishDate: "15 Mei 2025",
    likes: 245
  },
  {
    id: 2,
    title: "Petualangan Seru di Gunung Bromo",
    excerpt: "Nikmati pengalaman tak terlupakan menyaksikan matahari terbit dari puncak Gunung Bromo dengan latar belakang lautan pasir yang eksotis...",
    imageUrl: "https://i.pinimg.com/1200x/30/59/49/305949ef402764ef5e04e49e86932354.jpg",
    location: "Jawa Timur, Indonesia",
    category: "Gunung",
    rating: 4.9,
    author: "Ahmad Fauzi",
    authorAvatar: "https://example.com/ahmad.jpg",
    publishDate: "22 Mei 2025",
    likes: 312
  },
  {
    id: 3,
    title: "Eksplorasi Keajaiban Bawah Laut Raja Ampat",
    excerpt: "Raja Ampat surganya para penyelam dengan keanekaragaman hayati laut terkaya di dunia. Temukan lebih dari 1.500 spesies ikan dan 600 jenis karang...",
    imageUrl: "https://i.pinimg.com/1200x/97/71/d9/9771d92b82dd9258253e86bb23255958.jpg",
    location: "Papua Barat, Indonesia",
    category: "Bawah Laut",
    rating: 4.9,
    author: "Budi Santoso",
    authorAvatar: "https://example.com/budi.jpg",
    publishDate: "30 Mei 2025",
    likes: 428
  }
];

export default function ArticleList() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background animasi */}
      <div className="absolute inset-0 bg-animate"></div>

      {/* Overlay biar konten tetap kebaca */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Konten */}
      <div className="relative z-10 flex flex-col min-h-screen py-8 px-4">
        <h1 className="text-3xl font-bold text-left mb-8 text-white drop-shadow-lg">
          Artikel Wisata Terbaru
        </h1>

        <div className="space-y-6">
          {sampleArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
