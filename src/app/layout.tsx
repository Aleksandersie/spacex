import './globals.scss'
import { Inter } from 'next/font/google'
import {MuseoModerno} from 'next/font/google'
import StoreProvider from './store/StoreProvider'


const inter = Inter({ subsets: ['latin'] })
const museo = MuseoModerno({subsets:['latin'], weight: ['100', '700']})
 
export const metadata = {
  title: 'SpaceX',
  description: 'SpaceX test site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={museo.className}>
        <StoreProvider>
        {children}
        </StoreProvider>
        
        
        </body>
   
    </html>
  )
}
