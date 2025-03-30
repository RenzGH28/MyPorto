import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Ambil User-Agent dari request
  const userAgent = request.headers.get("user-agent") || ""

  // List User-Agent yang diperbolehkan (hanya browser)
  const allowedAgents = ["Mozilla", "Chrome", "Safari", "Firefox", "Edge"]

  // Path yang boleh diakses tanpa middleware
  const allowedPaths = [
    "/api/send-email",
    "/api/quotes"
  ]

  // Cek jika URL masuk dalam daftar pengecualian
  const isApiAllowed = allowedPaths.some(path => request.nextUrl.pathname.startsWith(path))

  if (!isApiAllowed) {
    // Cek apakah User-Agent berasal dari browser
    const isAllowed = allowedAgents.some(agent => userAgent.includes(agent))

    if (!isAllowed) {
      return new NextResponse("Access Denied!! Your Browser Not Permission To Access My Web!", {
        status: 403
      })
    }
  }

  // Add security headers
  //response.headers.set('X-Frame-Options', 'ALLOWALL') 
  response.headers.set("X-Frame-Options", "") // Kosongin
response.headers.set("Content-Security-Policy", "frame-ancestors *") // Izinkan semua// DENY OR ALLOWALL
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')

  return response
}

export const config = {
  matcher: '/:path*', // Middleware berlaku di semua halaman
}