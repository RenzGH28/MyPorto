import { Metadata, Viewport } from 'next'
import type { Metadata as MetadataType } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BackgroundMusic from '@/components/background-music'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rz Developer - Personal Portfolio',
  description: 'Tech Enthusiast skilled in HTML, CSS, JavaScript And Node.js',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.svg',
      type: 'image/svg+xml',
    },
  ],
  manifest: '/manifest.json',
  themeColor: '#000000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Rz Developer - Personal Portfolio',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <BackgroundMusic />
        {children}
      </body>
    </html>
  )
}

