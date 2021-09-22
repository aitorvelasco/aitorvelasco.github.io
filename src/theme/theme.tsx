import { createTheme } from '@material-ui/core'

import globalStyles from './globalStyles'
import font from './fonts'
import breakpoints from './breakpoints'

const theme = createTheme({
    ...globalStyles,
    palette: {
      primary: {
        main: '#95b7df',
      },
      secondary: {
        main: '#8e8e8e',
      },
      text: {
        secondary: '#24558a'
      },
      grey: {
        500: '#202327'
      }
    },
    typography: {
      h1: {
        fontFamily: font.primary,
        fontSize: '48px',
        lineHeight: 0.75,
        [breakpoints.up('lg')]: {
          fontSize: '75px',
        }
      },
      h2: {
        fontFamily: font.primary,
        fontSize: '36px',
        [breakpoints.up('lg')]: {
          fontSize: '48px'
        }
      },
      h3: {
        fontFamily: font.primary,
        fontSize: '30px',
        [breakpoints.up('lg')]: {
          fontSize: '36px'
        }
      },
      h4: {
        fontFamily: font.primary,
      },
      h5: {
        fontFamily: font.primary,
      },
      h6: {
        fontFamily: font.primary,
      },
      subtitle1: {
        fontFamily: font.secondary,
      },
      body1: {
        fontFamily: font.secondary,
      },
      caption: {
        fontFamily: font.secondary,
      },
      button: {
        fontFamily: font.secondary,
      }
    },
    breakpoints,
  })

export default theme