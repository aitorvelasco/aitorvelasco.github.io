import { Container } from '@mui/material'
import { makeStyles } from '@mui/styles'

import {
  About,
  ContactForm,
  Hero,
  NavBar,
  Portfolio,
  Skills,
  RRSS,
} from '../src/components'

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  section: {
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
    scrollMarginTop: '56px',
    [breakpoints.up('md')]:{
      scrollMarginTop: '64px', 
    }
  },
}))

const PortfolioContainer = () => {
  const { section } = useStyles()
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Container maxWidth="md" id="skills" className={section}>
        <Skills />
      </Container>
      <Portfolio />
      <ContactForm />
      <RRSS />
    </>
  )
}

export default PortfolioContainer
