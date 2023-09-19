import { createTheme, ThemeOptions } from '@mui/material'
import { Josefin_Sans, Jomhuria as JomhuriaFont } from 'next/font/google'
import globalStyles from './globalStyles'

const overrides: ThemeOptions['components'] = {
  MuiTextField: {
    defaultProps: {
      variant: 'filled',
    },
  },
  MuiAlert: {
    defaultProps: {
      variant: 'filled',
    }
  }
}

const JosefinSans = Josefin_Sans({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap'
})

const Jomhuria = JomhuriaFont({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap'
})

const theme = createTheme({
    ...globalStyles,
    components: {
      ...overrides,
    },
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
      fontFamily: [JosefinSans.style.fontFamily, Jomhuria.style.fontFamily].join(','),
      h1: {
        fontFamily: Jomhuria.style.fontFamily,
        fontSize: '48px',
        lineHeight: 0.75,
        '@media (min-width:992px)': {
          fontSize: '75px',
        }
      },
      h2: {
        fontFamily: Jomhuria.style.fontFamily,
        fontSize: '36px',
        '@media (min-width:992px)': {
          fontSize: '48px'
        }
      },
      h3: {
        fontFamily: Jomhuria.style.fontFamily,
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