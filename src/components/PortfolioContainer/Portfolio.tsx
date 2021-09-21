import { Box, Container, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(({ breakpoints }) => ({
  section: {
    scrollMarginTop: '64px',
  },
  portfolio: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    [breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr',
    },

    '& img': {
      width: '100%',
      '&:hover': {
          opacity: 0.2
      }
    },
  },
}))

const Portfolio = () => {
  const { section, portfolio } = useStyles()
  return (
    <>
      <Container maxWidth="md" id="portfolio" className={section}>
        <Typography variant="h2">Portfolio</Typography>
      </Container>
      <Box className={portfolio}>
        <img src="/portfolio/llamaya.png" />
        <img src="/portfolio/masmovil.png" />
        <img src="/portfolio/bq-store.png" />
        <img src="/portfolio/diwo.png" />
        <img src="/portfolio/bqcom.png" />
        <img src="/portfolio/sara-foto.jpg" />
      </Box>
    </>
  )
}

export default Portfolio
