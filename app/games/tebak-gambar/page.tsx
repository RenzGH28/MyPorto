import { Metadata } from 'next'
import TebakGambarPage from './TebakGambar'

export const metadata: Metadata = {
  title: 'Tebak Gambar Games',
  description: 'Permainan Mengasah Otak Melalui Tebak Kata Dalam Gambar',
  openGraph: {
    title: 'Tebak Gambar - AVA Entertainment',
    description: 'Permainan Mengasah Otak Melalui Tebak Kata Dalam Gambar',
    url: 'https://rztech.vercel.app/games/tebak-gambar',
    images: [
      {
        url: 'https://rztech.vercel.app/tebakgambar.jpg',
        width: 1200,
        height: 630,
        alt: 'Tebak Gambar Game Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tebak Gambar Games',
    description: 'Permainan Mengasah Otak Melalui Tebak Kata Dalam Gambar',
    images: ['https://rztech.vercel.app/tebakgambar.jpg'],
  },
}

export default function Page() {
  return <TebakGambarPage />
}