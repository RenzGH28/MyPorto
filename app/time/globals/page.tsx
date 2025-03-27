"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Header } from "@/components/header";

const timezones = {
  Asia: ["Asia/Jakarta", "Asia/Tokyo", "Asia/Dubai"],
  Eropa: ["Europe/London", "Europe/Paris", "Europe/Berlin"],
  Amerika: ["America/New_York", "America/Los_Angeles", "America/Sao_Paulo"],
};

export default function WorldClock() {
  const [continent, setContinent] = useState("");
  const [timezone, setTimezone] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (!timezone) return;
    const updateTime = () => {
      setTime(new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">World Clock</h1>
      <select onChange={(e) => setContinent(e.target.value)} className="border p-2 mb-2">
        <option value="">Pilih Benua</option>
        {Object.keys(timezones).map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      {continent && (
        <select onChange={(e) => setTimezone(e.target.value)} className="border p-2 mb-2">
          <option value="">Pilih Negara</option>
          {timezones[continent].map((tz) => (
            <option key={tz} value={tz}>{tz}</option>
          ))}
        </select>
      )}
      {time && <p className="text-lg font-mono mt-4">Waktu: {time}</p>}
    </div>
  );
}