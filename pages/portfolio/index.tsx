import { Container, makeStyles } from '@material-ui/core'

import { About, Hero, NavBar, Portfolio, Skills, RRSS } from '../../src/components'

const useStyles = makeStyles(() => ({
  section: {
    scrollMarginTop: '64px',
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
      <RRSS />
    </>
  )
}

export default PortfolioContainer
