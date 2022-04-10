import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Menu from '../components/Menu'
import Background from '../components/Background'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Head>
      <title>A Little Something</title>
    </Head>
    <Component {...pageProps} />
    <Menu />
    <Background />
  </div>
}

export default MyApp
