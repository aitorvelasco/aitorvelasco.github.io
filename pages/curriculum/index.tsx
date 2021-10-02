import { Container, Grid, Hidden } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { Aside, Curriculum, Footer, Header } from '../../src/components'

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  wrapper: {
    boxShadow: '-10px 10px',
    backgroundColor: palette.common.white,
    overflow: 'hidden',
    padding: 0,
    margin: spacing(4, 'auto'),
  },
  container: {
    [breakpoints.down('xs')]: {
      paddingLeft: spacing(1.5),
      paddingRight: spacing(1.5),
    },
  },
}))

const Home = () => {
  const { wrapper, container } = useStyles()
  return (
    <Container maxWidth={false}>
      <Container maxWidth="lg" className={wrapper}>
      <Header />
      <Container maxWidth={false} className={container}>
        <Grid container spacing={4}>
          <Hidden lgDown>
            <Grid item xs={2}>
              <Aside />
            </Grid>
          </Hidden>
          <Grid item lg={9}>
            <Curriculum />
          </Grid>
        </Grid>
      </Container>
      <Hidden lgUp>
        <Footer />
      </Hidden>
      </Container>
    </Container>
  )
}

export default Home
