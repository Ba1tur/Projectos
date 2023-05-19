import Layouts from '@/components/Layouts/Layouts'
import '@/styles/globals.css'
import '../styles/Questions.css'

export default function App({ Component, pageProps }) {
  return (
<Layouts>
  <Component {...pageProps} />
</Layouts>
  )
}
