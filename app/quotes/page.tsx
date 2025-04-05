import QuotesPage from './QuotesClient'

export const metadata = {
  title: 'Random Quotes - RzDev',
  description: 'Dapatkan kutipan inspiratif setiap saat dari API LOLHuman!',
  openGraph: {
    title: 'Random Quotes - RzDev',
    description: 'Kutipan inspiratif setiap saat dari tokoh terkenal!',
    url: 'https://rztech.vercel.app/quotes',
    images: [
      {
        url: '/quote-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Random Quote Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Random Quotes - RzDev',
    description: 'Kutipan inspiratif dari tokoh terkenal!',
    images: ['/quote-banner.jpg'],
  },
}

export default function Page() {
  return <QuotesPage />
}