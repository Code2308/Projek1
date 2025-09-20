 import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background animasi */}
      <div className="absolute inset-0 bg-animate"></div>

      {/* Overlay biar konten tetap kebaca */}
      <div className="absolute inset-0"></div>

      {/* Konten */}
      <div className="relative z-10 flex flex-col min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="text-lg mt-2">We’d love to share our story with you</p>
        </motion.div>
      </div>

      {/* Sekilas Tentang Kami */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Sekilas Tentang Kami
        </h2>
        <p className="text-white mb-6">
          Pesona Indo Tour & Travel adalah Tour Operator yang berbasis di
          Yogyakarta, Indonesia dan memiliki tim operator hampir di seluruh
          Indonesia. Kami sudah terdaftar resmi sebagai CV. Pesona Indo Wisata.
        </p>

        <div className="space-y-2 text-white">
          <p>
            <b>Brand Name:</b> Pesona Indo Tour & Travel Agency
          </p>
          <p>
            <b>Legal Name:</b> CV. Pesona Indo Wisata
          </p>
          <p>
            <b>Company Licensed Number:</b> 120537903240
          </p>
          <p>
            <b>Travel Licensed Number:</b> 0026/BPW.TR/2016
          </p>
        </div>

        <p className="mt-6 text-white">
          Kami berusaha memberikan pelayanan terbaik. Pengalaman yang diperoleh
          dengan wisatawan nasional dan internasional adalah prasyarat ideal
          selama tour di Indonesia.
        </p>
      </section>

      {/* Accordion Info */}
      <section className="max-w-6xl mx-auto px-6 pb-12 text-black">
        <details className="mb-3 border rounded-lg p-4 cursor-pointer bg-[#DFD0B8]">
          <summary className="font-semibold ">Kami Memikirkan Rencana Anda</summary>
          <p className="mt-2 ">
            Tujuan kami adalah mengurus semua kerepotan perjalanan agar Anda
            bebas konsentrasi pada liburan Anda...
          </p>
        </details>
        <details className="mb-3 border rounded-lg p-4 cursor-pointer bg-[#DFD0B8]">
          <summary className="font-semibold ">Kami Tahu Lokasi Terbaik</summary>
          <p className="mt-2 ">
            Dengan pemandu berpengalaman, kami tahu spot paling indah dan unik.
          </p>
        </details>
        <details className="mb-3 border rounded-lg p-4 cursor-pointer bg-[#DFD0B8]">
          <summary className="font-semibold ">Sustainable Tourism</summary>
          <p className="mt-2 ">
            Kami mendukung pengembangan pariwisata berkelanjutan.
          </p>
        </details>
      </section>

      {/* Contact Section */}
      <section className=" py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Details</h3>
            <p className="text-white">
              Petinggen TR II No.1197, Karangwaru, Tegalrejo, Yogyakarta
            </p>
            <p className="mt-2 text-white">📞 +62 813 2922 8505</p>
            <p className="text-white">📞 +62 856 259 7899</p>
            <div className="flex space-x-4 mt-4">
              {/* Facebook */}
              <a href="#" className="text-white hover:text-white-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.876v-6.987h-2.54v-2.889h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.261c-1.243 0-1.631.771-1.631 1.562v1.875h2.773l-.443 2.889h-2.33v6.987C18.343 21.127 22 17 22 12z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.5.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="text-sky-500 hover:text-sky-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.87-2.72 1.07A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.19 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.83 1.92 3.61-.71-.02-1.38-.22-1.97-.54v.05c0 2.09 1.49 3.83 3.47 4.23-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 0 1 2 19.54c-.56 0-1.11-.03-1.65-.1A12.13 12.13 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Get in Touch Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Get in Touch</h3>
            <form className="space-y-4">
              <div className="flex space-x-2 bg-white shadow-md">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-1/2 border p-2 rounded   bg-white shadow-md  border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-md bg-white shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-md bg-white shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 rounded-md bg-white shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-green-600 text-white px-6 py-2 rounded shadow"
              >
                Send
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </div>
    </div>);
}
