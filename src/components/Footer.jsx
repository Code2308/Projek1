import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      {/* Section Quote */}
      <section className=" text-black text-center px-6 py-2">
        <h1 className="text-2xl font-bold mb-2">ZIMDI KUNFAYACUN</h1>
        <h2 className="italic text-sm font-normal mb-4">
          Hiking mode: ON, signal: OFF.
        </h2>
        <p className="text-gray-300 text-xs">
          “Senja itu kamu, selalu kunantikan, meski aku sadar tak pernah benar-benar jadi milikmu.”
        </p>
      </section>

      {/* Footer Utama */}
      <footer className="bg-[#2F5D50] text-white pt-16 pb-8">
        <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-4 gap-12">

          {/* Tentang Kami */}
          <div>
            <h3 className="text-lg font-bold border-b-2 border-white/40 pb-2 mb-4">
              TENTANG KAMI
            </h3>

            <p className="mb-1"><b>Salvo Hiking</b> +62 8385-2102-835</p>
            <p><b>Travel License:</b>---</p>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-lg font-bold border-b-2 border-white/40 pb-2 mb-4">
              LAYANAN
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Photography Tour</li>
              <li>Company Outing & Team Building</li>
              <li>Wisata Sekolah</li>
              <li>MICE</li>
              <li>Tour & Trip Planner</li>
            </ul>
          </div>

          {/* Bantuan */}
          <div>
            <h3 className="text-lg font-bold border-b-2 border-white/40 pb-2 mb-4">
              BANTUAN
            </h3>
            <ul className="space-y-2 text-sm">
              <li>FAQ</li>
              <li>Syarat dan Ketentuan</li>
              <li>Cara Pemesanan</li>
              <li>Upcoming Trip</li>
              <li>Request Private Trip</li>
              <li>Why Travel With Us</li>
              <li>Privacy Policy</li>
              <li>Term Of Service</li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h3 className="text-lg font-bold border-b-2 border-white/40 pb-2 mb-4">
              IKUTI KAMI
            </h3>
            <p className="text-sm mb-4">
              Tetap terhubung dengan informasi terbaru melalui media sosial kami:
            </p>
              <div className="flex space-x-5 text-2xl">
                <a href="https://www.facebook.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transform hover:scale-110 transition"><FaFacebookF /></a>
                <a href="https://www.instagram.com/dika.sihotang/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transform hover:scale-110 transition"><FaInstagram /></a>
                <a href="https://www.youtube.com/@channelname" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transform hover:scale-110 transition"><FaYoutube /></a>
                <a href="https://wa.me/6283852102835" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transform hover:scale-110 transition"><FaWhatsapp /></a>
                <a href="https://www.tiktok.com/@username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transform hover:scale-110 transition"><FaTiktok /></a>
              </div>

          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/30"></div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-xs text-gray-200 relative">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Hiking Indonesia</span> | All rights reserved.
          
          {/* Scroll Top */}
          <a
            href="#"
            className="absolute right-4 -top-5 bg-black w-9 h-9 flex justify-center items-center rounded-full text-white hover:bg-[#4e8185] transition"
          >
            ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
