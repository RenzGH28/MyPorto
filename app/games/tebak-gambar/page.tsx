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
      setHasil('Benar! Kamu hebat!')
    } else {
      setHasil(`Salah. Jawaban yang benar: ${data.jawaban}`)
    }
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tebak Gambar</h1>

      {loading ? (
        <p>Loading soal...</p>
      ) : (
        <>
          <img src={data.img} alt="Tebak Gambar" className="rounded mb-4" />

          <input
            type="text"
            value={jawabanUser}
            onChange={(e) => setJawabanUser(e.target.value)}
            className="border p-2 w-full rounded mb-2"
            placeholder="Masukkan jawabanmu..."
          />
          <button
            onClick={cekJawaban}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Cek Jawaban
          </button>

          {hasil && (
            <div className="mt-4 p-2 bg-gray-100 rounded border">
              {hasil}
            </div>
          )}

          <button
            onClick={fetchSoal}
            className="mt-4 text-sm text-blue-500 hover:underline"
          >
            Soal Berikutnya
          </button>
        </>
      )}
    </div>
  )
}