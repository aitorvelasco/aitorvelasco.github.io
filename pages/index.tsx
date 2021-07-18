import { Container, makeStyles } from '@material-ui/core'
import { Header, Bio, Stage, Education } from '../src/components'

const useStyles = makeStyles(({ palette, spacing, breakpoints }) => ({
  root: {
    margin: 'auto',
    backgroundColor: palette.common.white,
    borderRadius: 10,
    boxShadow: '0 3px 10px black',
    padding: spacing(2),
    [breakpoints.up('md')]: {
      padding: spacing(4),
    },
  },
}))

const Home = () => {
  const { root } = useStyles()
  return (
    <Container maxWidth="xl" className={root}>
      <Header />
      <Bio />
      <Stage />
      <Education />
    </Container>
  )
}

export default Home
