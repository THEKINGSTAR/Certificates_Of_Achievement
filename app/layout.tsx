import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Khaled Fathallah | Professional Certificates & Learning Journey',
  description: 'Explore a comprehensive portfolio of professional certificates, credentials, and continuous learning achievements across cloud infrastructure, software development, and AI.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
