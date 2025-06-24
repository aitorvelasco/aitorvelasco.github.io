import { Container, Grid } from '@mui/material'

import { Aside, Curriculum, Footer, Header } from '../../src/components'

export default function Home() {
  return (
    <Container maxWidth={false}>
      <Container maxWidth="lg" disableGutters sx={{ boxShadow: '-10px 10px', bgcolor: 'white', overflow: 'hidden', my: 4}}>
      <Header />
      <Container maxWidth={false}>
        <Grid
          columnGap={1}
          display="grid"
          gridTemplateColumns={{ xs: '1fr', lg: '2fr 9fr'}}
        >
          <Grid display={{ xs: 'none', lg: 'block' }}>
            <Aside />
          </Grid>

          <Grid>
            <Curriculum />
          </Grid>
        </Grid>
      </Container>
        <Footer justifyContent="center" bgcolor="common.black" mt={8.5} display={{ xs: 'flex', lg: 'none' }} />
      </Container>
    </Container>
  )
}
