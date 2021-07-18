import Head from 'next/head'

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { theme } from '../src/theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aitor Velasco - Portfolio</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
