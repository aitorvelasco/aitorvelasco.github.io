import { createTheme } from '@material-ui/core'

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
          backgroundColor: '#E5E5E5',
          padding: '16px',
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
        li: {
          listStyle: 'none',
        },
        '.lighter': {
          fontWeight: 100,
        },
        '.light': {
          fontWeight: 300,
        },
        '.normal': {
          fontWeight: 400,
        },
        '.regular': {
          fontWeight: 500,
        },
        '.semibold': {
          fontWeight: 600,
        },
        '.bold': {
          fontWeight: 700,
        },
        '.bolder': {
          fontWeight: 800,
        }
      },
    },
  },
})

export default globalStyles
