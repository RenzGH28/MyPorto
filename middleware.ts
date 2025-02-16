import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Ambil User-Agent dari request
  const userAgent = request.headers.get("user-agent") || ""

  // List User-Agent yang diperbolehkan (hanya browser)
  const allowedAgents = ["Mozilla", "Chrome", "Safari", "Firefox", "Edge"]

  // Cek apakah User-Agent berasal dari browser
  const isAllowed = allowedAgents.some(agent => userAgent.includes(agent))

  if (!isAllowed) {
    return new NextResponse("Access Denied!! Your Browser Not Permission To Access My Domain!", {
      status: 403
    })
  }

  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')

  return response
}

export const config = {
  matcher: '/:path*', // Berlaku untuk semua halaman
}