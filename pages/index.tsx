import { Container } from '@mui/material'

import {
  About,
  ContactForm,
  Hero,
  NavBar,
  Portfolio,
  Skills,
  RRSS,
} from '../src/components'

export default function PortfolioContainer() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Container maxWidth="md" id="skills" sx={{ py: 2, scrollMarginTop: { xs: 56, md: 64}}}>
        <Skills />
      </Container>
      <Portfolio />
      <ContactForm />
      <RRSS />
    </>
  )
}
