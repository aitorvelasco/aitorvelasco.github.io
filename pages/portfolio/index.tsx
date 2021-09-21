import { Container, makeStyles } from '@material-ui/core'

import {
  About,
  ContactForm,
  Hero,
  NavBar,
  Portfolio,
  Skills,
  RRSS,
} from '../../src/components'

const useStyles = makeStyles(({ spacing }) => ({
  section: {
    scrollMarginTop: '64px',
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
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
