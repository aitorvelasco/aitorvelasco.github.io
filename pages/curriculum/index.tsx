import { Container, Grid } from '@mui/material'
import React from 'react'

import { Aside, Curriculum, Footer, Header } from '../../src/components'

export default function Home() {
  return (
    <Container maxWidth={false}>
      <Container maxWidth="lg" disableGutters sx={{ boxShadow: '-10px 10px', bgcolor: 'white', overflow: 'hidden', my: 4}}>
      <Header />
      <Container maxWidth={false}>
        <Grid container spacing={4}>
            <Grid item xs={2}>
              <Aside display={{ xs: 'none', lg: 'block' }} />
            </Grid>
          <Grid item lg={9}>
            <Curriculum />
          </Grid>
        </Grid>
      </Container>
        <Footer justifyContent="center" bgcolor="common.black" mt={8.5} display={{ xs: 'flex', lg: 'none' }} />
      </Container>
    </Container>
  )
}
