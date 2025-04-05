'use client';
import { useEffect, useState } from 'react';

interface Quote {
  by: string;
  quote: string;
}

export default function QuotesPage() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    const res = await fetch('/api/quote');
    const data = await res.json();
    if (data.success) {
      setQuote(data.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full text-center space-y-4">
        <h1 className="text-2xl font-bold text-indigo-600">Random Quote</h1>
        {loading ? (
          <p className="text-gray-500 italic">Loading...</p>
        ) : (
          <>
            <p className="text-lg italic">"{quote?.quote}"</p>
            <p className="text-sm text-gray-600">~ {quote?.by}</p>
          </>
        )}
        <button
          onClick={fetchQuote}
          className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition"
        >
          Get New Quote
        </button>
      </div>
    </main>
  );
}