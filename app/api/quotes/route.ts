import { NextResponse } from 'next/server'

const quotes = [
  { id: 1, quote: "Jangan menyerah, setiap usaha ada hasilnya." },
  { id: 2, quote: "Kesuksesan adalah hasil dari kerja keras." },
  { id: 3, quote: "Hidup adalah petualangan, jalani dengan penuh semangat." }
]

export async function GET() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  
  return NextResponse.json({
    id: randomQuote.id,
    quote: randomQuote.quote,
    status: 'Success To Get Data',
    author: 'RzDev',
    timestamp: new Date().toISOString()
  }, { status: 200 })
}