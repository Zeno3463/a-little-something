import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Menu from '../components/Menu'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Component {...pageProps} />
    <Menu />
  </div>
}

export default MyApp
