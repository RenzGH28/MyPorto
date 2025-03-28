"use client";

import { useState } from "react";
import { LebaranMessage } from "@/components/LebaranMessage";

export default function LebaranPage() {
  const [showMessage, setShowMessage] = useState(false);
  const [customMessage, setCustomMessage] = useState("");

  // Fungsi untuk mengarahkan ke WhatsApp dengan pesan custom
  const handleSendMessage = () => {
    const defaultMessage = "Selamat Idul Fitri!"; // Pesan default
    const finalMessage = customMessage.trim() || defaultMessage; // Pakai pesan custom kalau ada
    const encodedMessage = encodeURIComponent(finalMessage); // Encode biar aman di URL
    window.open(`https://wa.me/6283845201171?text=${encodedMessage}`, "_blank");
  };

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

      {/* Input Pesan Custom */}
      <div className="mt-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Ketik pesanmu di sini..."
          value={customMessage}
          onChange={(e) => setCustomMessage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Tombol untuk mengirim pesan ke WhatsApp */}
      <button
        onClick={handleSendMessage}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Kirim ke WhatsApp
      </button>
    </div>
  );
}