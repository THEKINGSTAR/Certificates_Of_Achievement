import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certificate of Achievement - Professional Learning Journey',
  description: 'Explore my comprehensive collection of professional certificates showcasing expertise in cloud infrastructure, full-stack development, AI, and continuous learning across multiple platforms including AWS, Udacity, Microsoft, and more.',
  keywords: ['certificates', 'learning', 'portfolio', 'AWS', 'development', 'skills'],
  authors: [{ name: 'Khaled Fathallah' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#3b82f6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏆</text></svg>" />
      </head>
      <body className="bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
