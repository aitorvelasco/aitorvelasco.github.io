import { createMuiTheme } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

import globalStyles from './globalStyles'
import font from './fonts'

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
        fontSize: '75px',
        lineHeight: 0.75
      },
      h2: {
        fontFamily: font.primary,
        fontSize: '48px'
      },
      h3: {
        fontFamily: font.primary,
        fontSize: '36px'
      },
      body1: {
        fontFamily: font.secondary,
      },
      caption: {
        fontFamily: font.secondary,
      }
    },
  })

export default theme