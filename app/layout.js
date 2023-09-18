import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SOUSTA',
  description: 'Asset Tokenization',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
        style={{
          background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
        }}
      >
        {children}
      </body>
    </html>
  )
}
