import '../styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: '3 oldalas Next.js TSX példa',
  description: 'Egyszerű App Router navigáció TypeScript-tel',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  )
}
