import React from "react";

export default function ThreeBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-full bg-cover bg-center animate-bgMove -z-10"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1350&q=80")`, 
      }}
    >
      {/* overlay biar teks tetap terbaca */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
}
