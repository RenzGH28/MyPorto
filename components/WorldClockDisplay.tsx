interface WorldClockDisplayProps {
  time: string;
}

export function WorldClockDisplay({ time }: WorldClockDisplayProps) {
  return (
    <p className="text-3xl font-mono mt-4 text-center bg-gray-800 p-3 rounded-lg">
      🕒 {time}
    </p>
  );
}