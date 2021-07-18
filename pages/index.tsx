import { Container, makeStyles } from '@material-ui/core'
import { Header, Bio, Stage, Education } from '../src/components'
import fetchEntries from '../src/services/contentfulService'

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

const Home = ({ jobs, profile, schools }) => {
  const { root } = useStyles()
  return (
    <Container maxWidth="xl" className={root}>
      <Header avatar={profile[0].avatar} />
      <Bio aboutMe={profile[0].bio} />
      <Stage jobs={jobs} />
      <Education schools={schools} />
    </Container>
  )
}

export default Home

export const getStaticProps = async () => {
  const responseProfile = await fetchEntries('profile')
  const profile = await responseProfile.map((p) => {
    return p.fields
  })

  const responseJob = await fetchEntries('job')
  const jobs = await responseJob.map((p) => {
    return p.fields
  })

  const responseSchool = await fetchEntries('school')
  const schools = await responseSchool.map((p) => {
    return p.fields
  })

  return {
    props: {
      jobs,
      profile,
      schools,
    },
  }
}
