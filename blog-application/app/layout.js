import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-purple-900 min-h-screen">
          <Header/>
          <main className='mt-10'>{children}</main>
            <Footer/>          
        </div>
      </body>
    </html>
  )
}
