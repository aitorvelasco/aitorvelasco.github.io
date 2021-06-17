import { createMuiTheme } from '@material-ui/core'

import { bluePalette } from './theme'

const globalStyle = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          boxSizing: 'border-box',
        },
        'html, body': {
          padding: '16px 32px',
          margin: 0,
          fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
          backgroundColor: bluePalette,
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

export default globalStyle
