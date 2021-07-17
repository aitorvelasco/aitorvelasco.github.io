import { Header, Stage } from '../src/components'
import { Box } from '@material-ui/core'

import fetchEntries from '../src/services/contentfulService'


const Home =({jobs}) => {
  return (
    <Box maxWidth="1200" m="auto" p={4} bgcolor="common.white" borderRadius={10} boxShadow="0px 3px 10px black">
      <Header />
      {/* <Bio /> */}
      <Stage jobs={jobs} />
    </Box>
  )
}

export default Home

export const getServerSideProps = async () => {
  const res = await fetchEntries('job')
  const jobs = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      jobs,
    },
  }
}