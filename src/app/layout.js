import ClientOnly from '@/_component/ClientOnly'
import './globals.css'
import Head from 'next/head'
// import ClientOnly from '@/_component/ClientOnly'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=Inter:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <ClientOnly>
          {children}
        </ClientOnly>
      </body>
    </html>
  )
}