import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@mui/styles'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta
            name="description"
            content="Portfolio y Curriculum Vitae de Aitor Velasco - Frontend Developer"
          />
          <meta property="og:title" content="Aitor Velasco | Front End Developer" />
          <meta property="og:description" content="Portfolio y Curriculum Vitae de Aitor Velasco - Frontend Developer" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://aitorvelasco.github.io" />
          <meta
            property="og:image"
            content="https://aitorvelasco.github.io/logo.jpg"
          />

          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Jomhuria&family=Josefin+Sans&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}

export default MyDocument
