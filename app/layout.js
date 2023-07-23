import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/component/navBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Henry LO',
  description: `Henry Lo's Personal Page`,
  icons: {
    icon: '../public/favicon.png'
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
