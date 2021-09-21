import { createTheme } from '@material-ui/core'

const globalStyles = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          boxSizing: 'border-box',
        },
        'html, body': {
          fontFamily: `'Roboto', sans-serif`,
          backgroundColor: '#E5E5E5',
          margin: 0,
          padding: 0,
          scrollBehavior: 'smooth',
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
