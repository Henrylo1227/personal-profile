import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from '@/components/nav/navBar';
import Footer from '@/components/footer/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Henry LO',
  description: `Henry Lo's Personal Page`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
