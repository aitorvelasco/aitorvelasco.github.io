import { Box, Typography, Link, makeStyles } from '@material-ui/core'

import { LinkedInIcon, GithubIcon, EmailIcon } from '../assets'

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  hero: {
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    gridTemplateColumns: '50% 50%',
    height: `calc(70vh - ${spacing(7)}px)`,
    background: `linear-gradient(110deg, ${palette.secondary.main} 50%, ${palette.common.black} 50%)`,
    [breakpoints.up('md')]: {
      height: `calc(100vh - ${spacing(8)}px)`,
    },
  },
  hey: {
    gap: 8,
    display: 'flex',
    [breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    }
  },
  me: {
    alignSelf: 'flex-end',
    justifySelf: 'end',
    maxWidth: '70vw',
  },
}))

const Hero = () => {
  const { hero, hey, me } = useStyles()
  return (
    <Box className={hero} id="hero">
      <Box pl={2} pt={4}>
        <Typography variant="h1" color="textSecondary">
          Hola, soy Aitor Velasco
        </Typography>
        <Typography variant="h2" color="primary">
          Front End Developer
        </Typography>
        <Box className={hey}>
          <Link href="mailto:aitorvelascodev@gmail.com">
            <EmailIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aitor-velasco-ovejero-91a0094b"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          <Link href="https://github.com/aitorvelasco" target="_blank">
            <GithubIcon />
          </Link>
        </Box>
      </Box>
      <img className={me} src="/hero-pic.png" />
    </Box>
  )
}

export default Hero
