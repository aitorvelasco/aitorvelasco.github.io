import { createMuiTheme } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

import globalStyles from './globalStyles'
import font from './fonts'
import breakpoints from './breakpoints'

const theme = createMuiTheme({
    ...globalStyles,
    palette: {
      primary: {
        main: blue[100],
      },
      grey: {
        500: '#bdbcbc',
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
      body1: {
        fontFamily: font.secondary,
      },
      caption: {
        fontFamily: font.secondary,
      }
    },
    breakpoints,
  })

export default theme