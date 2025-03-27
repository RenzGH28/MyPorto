import { useState, useEffect } from "react";

export function useWorldClock(defaultTimezone: string) {
  const [timezone, setTimezone] = useState(defaultTimezone);
  const [time, setTime] = useState("");

  useEffect(() => {
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

  return { timezone, setTimezone, time };
}