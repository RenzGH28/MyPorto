import { NextResponse } from "next/server";
import axios from "axios";

interface QuoteResult {
  by: string;
  quote: string;
}

interface LolResponse {
  status: number;
  message: string;
  result: QuoteResult;
}

export async function GET() {
  try {
    const res = await axios.get<LolResponse>(
      "https://api.lolhuman.xyz/api/random/quotes?apikey=9f21be6daa0ba504c2108f6e"
    );

    return NextResponse.json({
      success: true,
      data: res.data.result,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Gagal ambil quotes" },
      { status: 500 }
    );
  }
}