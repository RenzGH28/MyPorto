"use client";

import { useState } from "react";
import { LebaranMessage } from "@/components/LebaranMessage";
import { QrGenerator } from "@/components/QrGenerator";

export default function LebaranPage() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-center p-4">
      <h1 className="text-2xl font-bold text-green-700">🌙 Selamat Idul Fitri! 🌙</h1>
      <p className="text-gray-700 mt-2">Minal Aidzin Wal Faizin, mohon maaf lahir & batin!</p>

      {/* Tombol untuk menampilkan pesan interaktif */}
      <button
        onClick={() => setShowMessage(true)}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
      >
        Ketuk untuk Lihat Lebih
      </button>

      {/* Pesan Lebaran Interaktif */}
      {showMessage && <LebaranMessage />}

      {/* Kode QR untuk halaman ini */}
     {/* <div className="mt-6">
        <QrGenerator url="https://rztech.vercel.app/kasyfia/pesan-spesial" />
      </div>*/}

      {/* Tombol ke WhatsApp */}
      <a
        href="https://wa.me/6283845201171?text=Selamat%20Idul%20Fitri!"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Balas Pesan
      </a>
    </div>
  );
}