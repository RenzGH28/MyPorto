"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";

export default function ShopPage() {
  const products = [
    { name: "Produk 1", price: "Rp 100.000" },
    { name: "Produk 2", price: "Rp 200.000" },
    { name: "Produk 3", price: "Rp 300.000" },
  ];

  const productVariants = {
    hidden: { opacity: 0, x: -50 }, // Mulai dari kiri
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Renz Store Page</h1>
        <p className="text-center mb-8">Renz Store</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="p-4 border rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300"
              variants={productVariants}
              initial="hidden"
              animate="visible"
              custom={index} // Bikin efek delay per item
            >
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-yellow-400">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}