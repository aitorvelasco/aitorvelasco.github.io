import { Container, Grid, makeStyles } from '@material-ui/core'
import { Header, Bio, Stage, Education } from '../src/components'

const useStyles = makeStyles(({ palette, spacing, breakpoints }) => ({
  root: {
    backgroundColor: palette.common.white,
    borderRadius: 10,
    boxShadow: '0 3px 10px black',
    padding: spacing(2),
    gridTemplateColumns: `repeat(2, 1fr)`,
    [breakpoints.up('md')]: {
      padding: spacing(4),
    },
  },
}))

const Home = () => {
  const { root } = useStyles()
  return (
    <Container maxWidth="xl" className={root}>
      <Grid container spacing={6} direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <Bio />
        </Grid>
        <Grid item>
          <Stage />
        </Grid>
        <Grid item>
          <Education />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
