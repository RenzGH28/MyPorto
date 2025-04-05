// app/quotes/head.tsx
export default function Head() {
  return (
    <>
      <title>Quotes by RzDev</title>
      <meta name="description" content="Kumpulan quotes inspiratif yang bisa memotivasi harimu!" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Quotes by RzDev" />
      <meta property="og:description" content="Kumpulan quotes inspiratif yang bisa memotivasi harimu!" />
      <meta property="og:image" content="https://rztech.vercel.app/quote-banner.jpg" />
      <meta property="og:url" content="https://rztech.vercel.app/quotes" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Quotes by RzDev" />
      <meta name="twitter:description" content="Kumpulan quotes inspiratif yang bisa memotivasi harimu!" />
      <meta name="twitter:image" content="https://rztech.vercel.app/quote-banner.jpg" />
    </>
  )
}