import { Header, Stage } from '../src/components'
import { Box } from '@material-ui/core'

const Home =() => {
  return (
    <Box maxWidth="1200" m="auto" p={4} bgcolor="#FFF" borderRadius={10} boxShadow="0px 3px 10px black">
      <Header />
      <Stage />
    </Box>
  )
}

export default Home