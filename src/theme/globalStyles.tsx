import { createMuiTheme } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'

const globalStyles = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          boxSizing: 'border-box',
        },
        'html, body': {
          padding: '16px 32px',
          margin: 0,
          fontFamily: `'Roboto', sans-serif`,
          backgroundColor: blue[100],
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
