import Head from 'next/head'

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import globalStyle from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aitor Velasco - Portfolio</title>
      </Head>
      <ThemeProvider theme={globalStyle}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
