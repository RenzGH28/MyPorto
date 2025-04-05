'use client'

import { useEffect, useState } from 'react'

export default function TebakGambarPage() {
  const [data, setData] = useState<any>(null)
  const [jawabanUser, setJawabanUser] = useState('')
  const [hasil, setHasil] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchSoal = async () => {
    setLoading(true)
    setHasil('')
    setJawabanUser('')
    try {
      const res = await fetch('https://api.siputzx.my.id/api/games/tebakgambar')
      const json = await res.json()
      setData(json.data)
    } catch (err) {
      setHasil('Gagal mengambil soal!')
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchSoal()
  }, [])

  const cekJawaban = () => {
    const input = jawabanUser.trim().toLowerCase()
    const jawabanBenar = data.jawaban.toLowerCase()
    if (input === jawabanBenar) {
      setHasil('✅ Benar! Kamu hebat!')
    } else {
      setHasil(`❌ Salah. Jawaban yang benar: ${data.jawaban}`)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="bg-muted p-6 rounded-xl shadow-md">
        <h1 className="text-xl font-semibold mb-4">Tebak Gambar</h1>

        {loading ? (
          <p>Loading soal...</p>
        ) : (
          <>
            <img
              src={data.img}
              alt="Tebak Gambar"
              className="rounded-lg mb-4 w-full object-cover"
            />

            <p className="mb-4 text-sm text-muted-foreground italic">
              Clue: {data.deskripsi}
            </p>

            <input
              type="text"
              value={jawabanUser}
              onChange={(e) => setJawabanUser(e.target.value)}
              className="w-full p-2 border rounded-lg mb-2"
              placeholder="Masukkan jawabanmu..."
            />

            <button
              onClick={cekJawaban}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Cek Jawaban
            </button>

            {hasil && (
              <div className="mt-4 bg-gray-100 text-center p-3 rounded-lg border font-medium">
                {hasil}
              </div>
            )}

            <button
              onClick={fetchSoal}
              className="mt-4 w-full text-sm text-blue-500 hover:underline"
            >
              Soal Berikutnya
            </button>
          </>
        )}
      </div>
    </div>
  )
}