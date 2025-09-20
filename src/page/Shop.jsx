import { useState, useRef } from "react";
import { motion } from "framer-motion";

// 🔹 Data produk (pakai yang punyamu lengkap)
const products = [
  { id: 1, name: "Sepatu Gunung", price: 550000, image: "https://i.pinimg.com/1200x/51/c4/4d/51c44d7f1e3970fa28a345e1cde386b4.jpg" },
  { id: 2, name: "Carrier 60L", price: 850000, image: "https://i.pinimg.com/1200x/84/1a/5e/841a5e92ad463f19e78f227505ba21bc.jpg" },
  { id: 3, name: "Jaket Gunung Waterproof", price: 450000, image: "https://i.pinimg.com/736x/a5/2e/f0/a52ef0ce77854072699daab75e7a14b7.jpg" },
  { id: 4, name: "Tenda Dome 4 Orang", price: 1200000, image: "https://i.pinimg.com/736x/3c/ce/17/3cce17cd8088936e8480b2d3ab9f067a.jpg" },
  { id: 5, name: "Headlamp LED", price: 150000, image: "https://i.pinimg.com/736x/46/cd/34/46cd3416d39a1da67bb77132818462e2.jpg" },
  { id: 6, name: "Trekking Pole", price: 200000, image: "https://i.pinimg.com/1200x/89/71/b1/8971b1cd75e7dab88272f55c75e7e959.jpg" },
  { id: 7, name: "Sleeping Bag Hangat", price: 300000, image: "https://i.pinimg.com/1200x/d9/bd/0f/d9bd0fc3f15efda650b67172e294e745.jpg" },
  { id: 8, name: "Matras Lipat", price: 100000, image: "https://i.pinimg.com/1200x/d5/35/19/d5351977e2fb365f9260a628e2fb67f0.jpg" },
  { id: 9, name: "Kompor Portable Gas", price: 250000, image: "https://i.pinimg.com/736x/07/4e/1a/074e1ab93f5d30c4b5af223b41142a8c.jpg" },
  { id: 10, name: "Nesting Cooking Set", price: 220000, image: "https://i.pinimg.com/736x/00/2a/c2/002ac2c3d48b0abc98730cb783d1fc42.jpg" },
  { id: 11, name: "Hammock Single", price: 180000, image: "https://i.pinimg.com/736x/b7/e8/39/b7e8393ffaa5c36cb2ac5d254418baa5.jpg" },
  { id: 12, name: "Jas Hujan Poncho", price: 120000, image: "https://i.pinimg.com/1200x/98/b9/87/98b987f8b5d45b9003625de0d0ca515f.jpg" },
  { id: 13, name: "Botol Minum Outdoor 1L", price: 90000, image: "https://i.pinimg.com/736x/05/b9/d0/05b9d070c39605bdf54bb5c7d22c72e6.jpg" },
  { id: 14, name: "Sarung Tangan Gunung", price: 75000, image: "https://i.pinimg.com/1200x/13/13/c4/1313c4547d48ba992e37e0cc281d0ac8.jpg" },
  { id: 15, name: "Topi Outdoor Anti UV", price: 95000, image: "https://i.pinimg.com/1200x/b7/81/5d/b7815db2e822704e0b14e61601664f53.jpg" },
  { id: 16, name: "Kursi Lipat Camping", price: 300000, image: "https://i.pinimg.com/1200x/54/cf/46/54cf46d642b102d3e6085c192ef9f882.jpg" },
  { id: 17, name: "Meja Lipat Aluminium", price: 350000, image: "https://i.pinimg.com/1200x/94/74/1b/94741bc089f89af4cdb017a51c08d1a0.jpg" },
  { id: 18, name: "Lampu Tenda Rechargeable", price: 130000, image: "https://i.pinimg.com/736x/be/31/44/be3144add9195789995018b4a4b01e77.jpg" },
  { id: 19, name: "Pisau Lipat Outdoor", price: 160000, image: "https://i.pinimg.com/736x/70/95/ca/7095ca39c28a15b7858f6c40146f51d4.jpg" },
  { id: 20, name: "Raincover Tas 60L", price: 80000, image: "https://i.pinimg.com/1200x/cf/52/8c/cf528c2c60671e424bc29a75096b0d5c.jpg" },
];

export default function Shop() {
  const [form, setForm] = useState({ nama: "", email: "", product: "", jumlah: 1 });
  const [submitted, setSubmitted] = useState(false);
  const [total, setTotal] = useState(0);

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const barang = products.find((p) => p.name === form.product);
    if (!barang) return;
    setTotal(barang.price * form.jumlah);
    setSubmitted(true);
  };

  const handlePilihBarang = (namaBarang) => {
    setForm({ ...form, product: namaBarang });
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background animasi */}
      <div className="absolute inset-0 bg-animate"></div>

      {/* Overlay biar konten tetap kebaca */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Konten */}
      <div className="relative z-10 flex flex-col min-h-screen">

      {/* Produk Section */}
      <section className="py-16 px-6 md:px-16 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Perlengkapan Hiking
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              className=" rounded-2xl shadow-lg overflow-hidden group border hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                />
                <span className="absolute top-3 right-3 bg-green-700 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  Rp {p.price.toLocaleString()}
                </span>
              </div>

              <div className="p-5 flex flex-col justify-between h-36">
                <h3 className="font-bold text-white text-lg line-clamp-1">{p.name}</h3>
                <motion.button
                  className="mt-4 px-4 py-2 w-full bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePilihBarang(p.name)}
                >
                  Pilih Barang
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form Pemesanan */}
      <section ref={formRef} className=" py-12 px-6 md:px-16">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Form Pemesanan</h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto  p-6 rounded-lg shadow-md space-y-4"
        >
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full p-3 rounded-md bg-white shadow-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-white shadow-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <select
            className="w-full p-3 rounded-md bg-white shadow-md text-black border  focus:outline-none focus:ring-2 focus:ring-green-500"
            value={form.product}
            onChange={(e) => setForm({ ...form, product: e.target.value })}
            required
          >
            <option value="">-- Pilih Barang --</option>
            {products.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            min="1"
            className="w-full p-3 rounded-md bg-white shadow-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            value={form.jumlah}
            onChange={(e) => setForm({ ...form, jumlah: parseInt(e.target.value) })}
            required
          />
          <motion.button
            type="submit"
            className="w-full p-3 bg-green-600 text-black font-bold rounded-md hover:bg-green-700 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Pesan Sekarang
          </motion.button>
        </form>

        {/* Struk */}
        {submitted && (
          <motion.div
            className="max-w-xl mx-auto bg-white mt-8 p-6 rounded-lg shadow-md border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-xl font-bold mb-4">Struk Pemesanan</h3>
            <p><b>Nama:</b> {form.nama}</p>
            <p><b>Email:</b> {form.email}</p>
            <p><b>Barang:</b> {form.product}</p>
            <p><b>Jumlah:</b> {form.jumlah}</p>
            <p><b>Total Harga:</b> Rp {total.toLocaleString()}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => window.print()}
            >
              🖨 Cetak Struk
            </button>
          </motion.div>
        )}
      </section>
    </div>
    </div>);
}
