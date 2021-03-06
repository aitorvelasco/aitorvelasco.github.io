import { createTheme, Theme } from '@mui/material'

import globalStyles from './globalStyles'

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
    ...globalStyles,
    palette: {
      primary: {
        main: '#4298e2',
      },
      secondary: {
        main: '#585858',
      },
      text: {
        secondary: '#24398a'
      },
      grey: {
        500: '#202327'
      }
    },
    typography: {
      fontFamily: ['Josefin Sans', 'Jomhuria'].join(','),
      h1: {
        fontFamily: 'Jomhuria',
        fontSize: '48px',
        lineHeight: 0.75,
        '@media (min-width:992px)': {
          fontSize: '75px',
        }
      },
      h2: {
        fontFamily: 'Jomhuria',
        fontSize: '36px',
        '@media (min-width:992px)': {
          fontSize: '48px'
        }
      },
      h3: {
        fontFamily: 'Jomhuria',
        fontSize: '30px',
        '@media (min-width:992px)': {
          fontSize: '36px'
        }
      },
      body1: {
        '.semibold': {
          fontWeight: 600,
        },
        '.bold': {
          fontWeight: 700,
        },
      },
    },
    breakpoints: {
      values: {
        xs: 360,
        sm: 540,
        md: 768,
        lg: 992,
        xl: 1200,
      },
    },
  })

export default theme