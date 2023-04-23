import './globals.css'

export const metadata = {
  title: 'Kim Da-mi',
  description: 'My girl Kim Da-mi, a talented actress.',
  openGraph: {
    images: '../public/metaImg.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}