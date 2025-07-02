import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s - Spotify XM',
    default: 'Spotify XM - Free Radio Streaming App',
  },
  description:
    'Experience unlimited radio-style music streaming with custom stations, Bluetooth connectivity, and no subscription fees. Free, open-source, and always improving.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx('bg-gray-950 antialiased', inter.variable)}>
      <body>{children}</body>
    </html>
  )
}
