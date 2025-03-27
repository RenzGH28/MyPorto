"use client";

import { useState, useEffect } from "react";
import { useWorldClock } from "@/hooks/useWorldClock";
import { TimezoneSelector } from "@/components/TimezoneSelector";
import { WorldClockDisplay } from "@/components/WorldClockDisplay";

export default function WorldClockPage() {
  const [continent, setContinent] = useState("");
  const [defaultTimezone, setDefaultTimezone] = useState("Asia/Jakarta");

  useEffect(() => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setDefaultTimezone(userTimezone);
  }, []);

  const { timezone, setTimezone, time } = useWorldClock(defaultTimezone);

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">🌍 World Clock</h1>
      <TimezoneSelector
        continent={continent}
        setContinent={setContinent}
        timezone={timezone}
        setTimezone={setTimezone}
      />
      {time && <WorldClockDisplay time={time} />}
    </div>
  );
}