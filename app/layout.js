import './globals.css'
import { ReducedMotionSync } from '../components/ReducedMotionSync'

export const metadata = {
  title: 'Zoqta - AI-First Tools for Engineering Teams',
  description:
    'Building practical, AI-first tools that solve real problems for engineering and productivity-focused teams.',
  alternates: {
    canonical: 'https://www.zoqta.com/',
    types: {
      'text/markdown': [{ url: '/api/markdown-home', title: 'Homepage as Markdown' }],
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReducedMotionSync />
        {children}
      </body>
    </html>
  )
}
