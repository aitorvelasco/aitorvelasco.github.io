import Head from 'next/head'

import GlobalStyle from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aitor Velasco - Portfolio</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
