import '../styles/index.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout siteConfig={pageProps.siteConfig}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
