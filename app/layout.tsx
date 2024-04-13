import type { Metadata } from 'next'
import { Play } from 'next/font/google'
import './globals.css'

const font = Play({
  weight: ['400', '700'],
  preload: true,
  fallback: ['sans-serif'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  )
}
