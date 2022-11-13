import './globals.css'
import publicSans from '../components/Fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${publicSans.className} overflow-x-hidden`}>{children}</body>
    </html>
  )
}
