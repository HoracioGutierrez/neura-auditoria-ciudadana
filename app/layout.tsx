import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import LayoutFooter from '@/components/LayoutFooter';
import LayoutHeader from '@/components/LayoutHeader';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auditoria Ciudadana - Neura',
  description: 'Generated by create next app',
  authors: [{ name: "Horacio Gutierrez" }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={cn(inter.className, "flex flex-col h-full")}>
        <LayoutHeader />
        {children}
        <LayoutFooter />
      </body>
    </html>
  )
}
