import { Inter } from 'next/font/google'
import './globals.css'
import Home from './page'
import Navbar from './components/navbar/page'
import BecomeSeller from './components/become_a_seller/become_seller'
import StartWithShopping from './components/start_with_shopping/start_with_shopping'
import Footer from './components/footer/page'

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
      <StartWithShopping/>
      <Footer/>
      </>
  )
}
