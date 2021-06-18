import { Header, Stage } from '../src/components'
import { Box } from '@material-ui/core'

import fetchEntries from '../src/utils/contentfulData'

const Home =({jobs}) => {
  return (
    <Box maxWidth="1200" m="auto" p={4} bgcolor="#FFF" borderRadius={10} boxShadow="0px 3px 10px black">
      <Header />
      <Stage jobs={jobs} />
    </Box>
  )
}

export default Home

export const getStaticProps = async () => {
  const res = await fetchEntries()
  const jobs = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      jobs,
    },
  }
}