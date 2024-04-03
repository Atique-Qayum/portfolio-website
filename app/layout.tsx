import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Atique | Personal Portfolio',
  description: 'Atique is a Data Scientist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={'${inter.className} bg-gray-50 text-gray-950'}>
        
        
        {children}</body>
    </html>
  )
}
