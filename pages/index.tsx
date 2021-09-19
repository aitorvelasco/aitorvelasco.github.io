import { Container, Grid, Hidden, makeStyles } from '@material-ui/core'

import { Aside, Curriculum, Footer, Header } from '../src/components'

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  wrapper: {
    boxShadow: '-10px 10px',
    backgroundColor: palette.common.white,
    padding: 0,
    overflow: 'hidden',
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
    <Container maxWidth="lg" className={wrapper}>
      <Header />
      <Container maxWidth={false} className={container}>
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
