"use client";

import { motion } from "framer-motion";

export function LebaranMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-6 p-4 bg-white shadow-md rounded-md"
    >
      <h2 className="text-lg font-bold text-green-600">Pesan Spesial</h2>
      <p className="text-gray-700 mt-2">
        Semoga di hari yang fitri ini, semua doa dan harapanmu terkabul. Jangan lupa makan ketupat dan rendang! 🍽️
      </p>

      {/* Embed lagu Lebaran */}
      <div className="mt-4">
        <iframe
          src="https://open.spotify.com/embed/track/4YxgOtbkTJKYDShDEdrYnr?utm_source=oembed"
          width="100%"
          height="80"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          className="rounded-md"
        ></iframe>
      </div>
    </motion.div>
  );
}