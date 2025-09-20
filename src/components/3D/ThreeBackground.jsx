import React from "react";

export default function ThreeBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-full bg-cover bg-center animate-bgMove -z-10"
      style={{
        backgroundImage: `url("/src/assets/23.jpg")`, // lokal file
      }}
    >
      {/* overlay biar teks tetap terbaca */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
}
