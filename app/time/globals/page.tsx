"use client";

import { useState, useEffect, useMemo } from "react";
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

  // Auto-set timezone dari lokasi user saat pertama kali load
  useEffect(() => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(userTimezone);
  }, []);

  // Pakai useMemo biar daftar timezone nggak dihitung ulang setiap render
  const availableTimezones = useMemo(() => timezones[continent] || [], [continent]);

  // Update waktu tiap frame dengan requestAnimationFrame
  useEffect(() => {
    if (!timezone) return;

    let frame: number;
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
      frame = requestAnimationFrame(updateTime);
    };

    updateTime();
    return () => cancelAnimationFrame(frame);
  }, [timezone]);

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">🌍 World Clock</h1>

      {/* Pilih Benua */}
      <label className="block mb-2 font-semibold">Pilih Benua:</label>
      <select
        onChange={(e) => setContinent(e.target.value)}
        className="border p-2 mb-2 w-full rounded bg-gray-800 text-white"
      >
        <option value="">-- Pilih Benua --</option>
        {Object.keys(timezones).map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Pilih Zona Waktu */}
      {continent && (
        <>
          <label className="block mt-2 mb-2 font-semibold">Pilih Zona Waktu:</label>
          <select
            onChange={(e) => setTimezone(e.target.value)}
            className="border p-2 mb-2 w-full rounded bg-gray-800 text-white"
          >
            <option value="">-- Pilih Zona Waktu --</option>
            {availableTimezones.map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>
        </>
      )}

      {/* Tampilan Waktu */}
      {time && (
        <p className="text-3xl font-mono mt-4 text-center bg-gray-800 p-3 rounded-lg">
          🕒 {time}
        </p>
      )}
    </div>
  );
}