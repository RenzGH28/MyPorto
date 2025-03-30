"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Ganti dari 'next/router' ke 'next/navigation'

export default function RenzPage() {
  const router = useRouter();
  const [dots, setDots] = useState(".");

  useEffect(() => {
    // Efek loading "..."
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);

    // Redirect setelah 3 detik
    const timeout = setTimeout(() => {
      router.push("https://rztech.vercel.app/kasyfia/special-message");
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-semibold mb-4">Halo Hira, Bentar ya Reren Alihin Dulu...</h2>
      <p className="text-lg">Tunggu sebentar<span>{dots}</span></p>
    </div>
  );
}