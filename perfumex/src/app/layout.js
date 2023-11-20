import { Inter } from 'next/font/google'
import './globals.css'
import Home from './page'
import Navbar from './navbar/page'
import BecomeSeller from './become_a_seller/become_seller'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PerfumeX',
  description: 'You want perfumes? Come here!',
}

export default function RootLayout({ children }) {
  return (
   <>
      
      <Navbar/>
      <BecomeSeller/>
      </>
  )
}
