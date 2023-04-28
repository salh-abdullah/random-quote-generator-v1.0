import Image from 'next/image'
import { Inter } from 'next/font/google'
import QuoteBox from '@jquery/components/QuoteBox'
import { useState } from 'react'
import Footer from '@jquery/components/Footer'
import SocialIcons from '@jquery/components/SocialIcons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const [darkMode, setDarkMode] = useState(true);


  return (
    <div className={darkMode && "dark"}>

      <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>

        <QuoteBox />
        <SocialIcons />
        <Footer />
      </main>
    </div>
  )
};
