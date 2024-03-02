import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/main/StarBackground'
import Navbar from "@/components/main/Navbar"
import Footer from "@/components/main/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InnoTechCloud - Cloud Storage Solutions, Data Management & Security',
  description: "Discover InnoTechCloud's cutting-edge cloud storage solutions, offering scalable disk space, secure data backups, and efficient file synchronization for diverse industries...",
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en">
<body className={`${inter.className} bg-gradient-to-r from-[#BCE3F9] via-[#B2D7EC] to-[#A9CCE0] overflow-y-scroll overflow-x-hidden`}>




      
        {/* <StarsCanvas /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}