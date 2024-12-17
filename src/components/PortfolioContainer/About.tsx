import { Box, Container } from '@mui/material'
import { AboutMe } from '../common'

export default function About() {
  return (
    <Box color="white" sx={{ background: ({ palette }) => `linear-gradient(57deg, ${palette.common.black} 50%, ${palette.secondary.main} 50%)` }} py={2}>
      <Container maxWidth="md" id="aboutme" sx={{ scrollMarginTop: 76 }}>
        <AboutMe />
      </Container>
    </Box>
  )
}
