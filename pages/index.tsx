import { Container, Grid, Hidden, makeStyles } from '@material-ui/core'

import { Aside, Curriculum, Footer, Header } from '../src/components'

const useStyles = makeStyles(({ palette }) => ({
  wrapper: {
    boxShadow: '-10px 10px',
    backgroundColor: palette.common.white,
    padding: 0,
    overflow: 'hidden',
  },
}))

const Home = () => {
  const { wrapper } = useStyles()
  return (
    <Container maxWidth="lg" className={wrapper}>
      <Header />
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Hidden mdDown>
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
  )
}

export default Home
