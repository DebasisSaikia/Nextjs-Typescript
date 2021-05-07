import './globals.css' //it will not work in a page or any other file..it will work only on _app.tsx file
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </>)
}

export default MyApp
