import { timezones, formatTimezone } from "@/lib/config";

interface TimezoneSelectorProps {
  continent: string;
  setContinent: (value: string) => void;
  timezone: string;
  setTimezone: (value: string) => void;
}

export function TimezoneSelector({ continent, setContinent, timezone, setTimezone }: TimezoneSelectorProps) {
  return (
    <div>
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
            value={timezone}
            className="border p-2 mb-2 w-full rounded bg-gray-800 text-white"
          >
            <option value="">-- Pilih Zona Waktu --</option>
            {timezones[continent].map((tz) => (
              <option key={tz} value={tz}>
                {formatTimezone(tz)}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}