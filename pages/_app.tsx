import Head from 'next/head'

import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '../src/theme'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aitor Velasco | Front End Developer</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
