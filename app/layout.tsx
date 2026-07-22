import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { PageTransition } from '@/components/page-transition'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'RS Concierge | Private Lifestyle & Business Assistance in Dubai',
  description: 'Luxury concierge, relocation support, premium automotive sourcing and trusted local connections in the UAE. Personal approach, discretion, and real local support.',
  keywords: ['Dubai concierge', 'luxury lifestyle', 'relocation Dubai', 'business assistance UAE', 'premium automotive', 'private concierge'],
  authors: [{ name: 'Radomir Sverckov' }],
  openGraph: {
    title: 'RS Concierge | Private Lifestyle & Business Assistance in Dubai',
    description: 'Luxury concierge, relocation support, premium automotive sourcing and trusted local connections in the UAE.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <PageTransition>{children}</PageTransition>
        <WhatsAppFloat />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
