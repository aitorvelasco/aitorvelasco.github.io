import { Box } from '@material-ui/core'
import { Header, Bio, Stage, Education } from '../src/components'
import fetchEntries from '../src/services/contentfulService'

const Home = ({ jobs, profile, schools }) => {
  return (
    <Box
      maxWidth="xl"
      m="auto"
      p={{ xs: 2, md: 4 }}
      bgcolor="common.white"
      borderRadius={10}
      boxShadow="0px 3px 10px black"
    >
      <Box mb={4}>
        <Header avatar={profile[0].avatar} />
      </Box>
      <Bio aboutMe={profile[0].bio} />
      <Stage jobs={jobs} />
      <Education schools={schools} />
    </Box>
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
      schools
    },
  }
}
