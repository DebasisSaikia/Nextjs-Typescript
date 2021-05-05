import './globals.css' //it will not work in a page or any other file..it will work only on _app.tsx file

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
