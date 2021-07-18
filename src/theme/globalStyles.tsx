import { createTheme } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'

import breakpoints from './breakpoints'

const globalStyles = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          boxSizing: 'border-box',
        },
        'html, body': {
          margin: 0,
          fontFamily: `'Roboto', sans-serif`,
          backgroundColor: blue[100],
          padding: '8px',
          [breakpoints.up('lg')]: {
            padding: '16px 32px',
          },
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
        li: {
          listStyle: 'none',
        },
      },
    },
  },
})

export default globalStyles
