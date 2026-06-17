import './globals.css'
import { Inter } from 'next/font/google'
import { ReducedMotionSync } from '../components/ReducedMotionSync'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata = {
  title: 'Zoqta - AI-First Tools for Engineering Teams',
  description:
    'Building practical, AI-first tools that solve real problems for engineering and productivity-focused teams.',
  icons: {
    icon: [
      { url: '/zoqtafinallogo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/zoqtafinallogo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/zoqtafinallogo/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/zoqtafinallogo/apple-touch-icon.png',
    shortcut: '/zoqtafinallogo/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.zoqta.com/',
    types: {
      'text/markdown': [{ url: '/api/markdown-home', title: 'Homepage as Markdown' }],
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ReducedMotionSync />
        {children}
      </body>
    </html>
  )
}
