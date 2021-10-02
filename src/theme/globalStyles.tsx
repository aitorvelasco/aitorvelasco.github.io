import { createTheme } from '@mui/material'

const globalStyles = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        'html, body': {
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
      },
    },
  },
})

export default globalStyles
