"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function RenzPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 100));
    }, 150);

    const timeout = setTimeout(() => {
      router.push("https://rztech.vercel.app/pesanuntukmu.html");
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-semibold mb-4">Halo Hira, Bentar ya Reren Alihin Dulu...</h2>
      <div className="w-3/4 h-2 bg-gray-700 rounded-full overflow-hidden mt-4">
        <motion.div
          className="h-full"
          style={{
            background: "linear-gradient(to right, blue, navy, cyan, green)",
          }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.15 }}
        />
      </div>
    </div>
  );
}