import { useState } from "react";
import { motion } from "framer-motion";

export default function OpenTrip() {
  const trips = [
    { name: "Pulau Pahawang", schedule: "Berangkat setiap hari Sabtu-Minggu", price: 500000 },
    { name: "Bromo Midnight", schedule: "Berangkat setiap hari Sabtu-Minggu", price: 350000 },
    { name: "Dieng Midnight", schedule: "Berangkat setiap hari Sabtu-Minggu", price: 300000 },
    { name: "Sailing Komodo", schedule: "Berangkat setiap hari Jumat", price: 1200000 },
    { name: "Rinjani Adventure", schedule: "Berangkat setiap hari Sabtu", price: 950000 },
    { name: "Gunung Semeru Trek", schedule: "Berangkat setiap Minggu", price: 800000 },
    { name: "Bunaken Diving", schedule: "Berangkat setiap hari Rabu", price: 700000 },
    { name: "Pulau Weh Trip", schedule: "Berangkat setiap Sabtu-Minggu", price: 600000 },
    { name: "Labuan Bajo Cruise", schedule: "Berangkat setiap Jumat", price: 1500000 },
    { name: "Tanjung Lesung Beach", schedule: "Berangkat setiap Sabtu", price: 450000 },
    { name: "Pulau Seribu Expedition", schedule: "Berangkat setiap Minggu", price: 550000 },
    { name: "Mount Ijen Blue Fire", schedule: "Berangkat setiap Sabtu", price: 650000 },
    { name: "Bali Sunrise Trekking", schedule: "Berangkat setiap Minggu", price: 500000 },
    { name: "Gili Trawangan Diving", schedule: "Berangkat setiap Jumat", price: 700000 },
    { name: "Pulau Komodo Trek", schedule: "Berangkat setiap Sabtu", price: 1300000 },
    { name: "Mount Kerinci Climb", schedule: "Berangkat setiap Minggu", price: 900000 },
    { name: "Bangka Belitung Tour", schedule: "Berangkat setiap Sabtu-Minggu", price: 600000 },
    { name: "Toba Lake Adventure", schedule: "Berangkat setiap Minggu", price: 750000 },
    { name: "Bali Nusa Penida", schedule: "Berangkat setiap Sabtu", price: 650000 },
    { name: "Bromo Sunrise & Jeep", schedule: "Berangkat setiap Jumat", price: 400000 },
    { name: "Pulau Derawan", schedule: "Berangkat setiap Sabtu", price: 1200000 },
    { name: "Ternate Tidore", schedule: "Berangkat setiap Minggu", price: 850000 },
    { name: "Raja Ampat Diving", schedule: "Berangkat setiap Jumat", price: 2500000 },
    { name: "Mount Lawu Trek", schedule: "Berangkat setiap Sabtu", price: 500000 },
    { name: "Mount Merbabu Trek", schedule: "Berangkat setiap Minggu", price: 450000 },
    { name: "Pulau Karimunjawa", schedule: "Berangkat setiap Sabtu", price: 750000 },
    { name: "Bangka Diving Trip", schedule: "Berangkat setiap Jumat", price: 550000 },
    { name: "Gunung Leuser Trek", schedule: "Berangkat setiap Sabtu-Minggu", price: 950000 },
    { name: "Mount Jayawijaya Expedition", schedule: "Berangkat setiap Minggu", price: 3000000 },
    { name: "Sailing Flores", schedule: "Berangkat setiap Jumat", price: 1800000 },
    { name: "Ternate Island Tour", schedule: "Berangkat setiap Sabtu", price: 850000 },
    { name: "Pulau Belitung Trip", schedule: "Berangkat setiap Minggu", price: 650000 },
    { name: "Bali Mount Batur Trek", schedule: "Berangkat setiap Sabtu", price: 400000 },
    { name: "Pulau Padar", schedule: "Berangkat setiap Jumat", price: 1200000 },
  ];

  const [form, setForm] = useState({
    nama: "",
    email: "",
    trip: "",
    jumlah: 1,
  });
  const [struk, setStruk] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedTrip = trips.find((t) => t.name === form.trip);
    if (!selectedTrip) return alert("Pilih destinasi dulu wak!");

    const total = selectedTrip.price * form.jumlah;
    setStruk({ ...form, harga: total });
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background animasi */}
      <div className="absolute inset-0 bg-animate"></div>

      {/* Overlay biar konten tetap kebaca */}
      <div className="absolute inset-0 "></div>

      {/* Konten */}
      <div className="relative z-10 flex flex-col min-h-screen">

      {/* 🔹 Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/5f/1e/bb/5f1ebb399cb7ba19553cb14814e22fa9.jpg') ",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          className="relative z-10 max-w-2xl px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            OPEN TRIP PESONA INDO
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Jelajahi keindahan alam dan budaya Indonesia dengan berbagai pilihan
            open trip seru. Nikmati pengalaman berkesan bersama sahabat, keluarga,
            dan komunitasmu!
          </p>
        </motion.div>
      </section>

      {/* 🔹 FORM PEMESANAN */}
      <section className="py-10 px-6 md:px-16 ">
        <h2 className="text-2xl font-bold text-white mb-6">Form Pemesanan</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 space-y-4"
        >
          <div>
            <label className="block text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              id="nama"
              value={form.nama}
              onChange={handleChange}
              required
              className=" px-3 py-2 w-full p-3 rounded-md bg-white shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              className=" px-3 py-2 w-full p-3 rounded-md bg-white shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Pilih Destinasi</label>
            <select
              id="trip"
              value={form.trip}
              onChange={handleChange}
              required
              className="px-3 py-2 w-full p-3 rounded-md bg-white text-black shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">-- Pilih --</option>
              {trips.map((t, i) => (
                <option key={i} value={t.name}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Jumlah Orang</label>
            <input
              type="number"
              id="jumlah"
              min="1"
              value={form.jumlah}
              onChange={handleChange}
              required
              className=" px-3 py-2 w-full p-3 rounded-md bg-white shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="bg-[#697565] text-white px-4 py-2 rounded-md hover:bg-[#5b6b5a] transition"
          >
            Pesan Sekarang
          </button>
        </form>

        {/* 🔹 STRUK */}
        {struk && (
          <div className="mt-8 shadow rounded-lg p-6 bg-white">
            <h3 className="text-black font-bold mb-4">Struk Pemesanan</h3>
            <p>
              <b>Nama:</b> {struk.nama}
            </p>
            <p>
              <b>Email:</b> {struk.email}
            </p>
            <p>
              <b>Destinasi:</b> {struk.trip}
            </p>
            <p>
              <b>Jumlah Orang:</b> {struk.jumlah}
            </p>
            <p>
              <b>Total Harga:</b> Rp {struk.harga.toLocaleString("id-ID")}
            </p>
            <button
              onClick={() => window.print()}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              🖨 Cetak Struk
            </button>
          </div>
        )}
      </section>

      {/* 🔹 Content Section */}
      <section className="py-12 px-6 md:px-16 ">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-white leading-relaxed">
            Siap untuk menjelajah Indonesia bersama{" "}
            <span className="font-bold">Pesona Indo?</span>
          </p>
          <p className="text-white leading-relaxed mt-4">
            Silahkan dipilih jadwal open trip Pesona Indo Tour and Travel. Semua
            destinasi di seluruh Indonesia ada di sini seperti Sabang, Danau Toba,
            Padang, Mentawai, Belitung, Sailing Komodo, Raja Ampat, Sumba,
            Lombok, Bromo, Ijen, Ternate, Ora, Alor, Toraja, Rinjani, Jogja,
            Papua, Maluku, Sulawesi, dan masih banyak lagi.
          </p>
        </motion.div>

        <h2 className="text-xl font-bold text-white mb-4">
  Jadwal Open Trip Reguler
</h2>
<ul className="space-y-4">
  {trips.slice(0, 5).map((trip, i) => (
    <motion.li
      key={i}
      className="border-b pb-3"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: i * 0.2 }}
      viewport={{ once: true }}
    >
      <span className="text-cyan-500 font-semibold">{trip.name}</span>
      <p className="text-white text-sm">{trip.schedule}</p>
    </motion.li>
  ))}
</ul>
      </section>
    </div>
    </div>
  );
}
