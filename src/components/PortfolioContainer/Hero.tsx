import { Box, Typography, Link } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { LinkedInIcon, GithubIcon, EmailIcon } from '../assets'

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  hero: {
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    gridTemplateColumns: '50% 50%',
    height: `calc(70vh - ${spacing(7)})`,
    minHeight: '320px',
    background: `linear-gradient(110deg, ${palette.secondary.main} 50%, ${palette.common.black} 50%)`,
    [breakpoints.up('md')]: {
      height: `calc(100vh - ${spacing(8)})`,
    },
  },
  hey: {
    gap: 8,
    display: 'flex',
    [breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
  me: {
    // alignSelf: 'flex-end',
    // justifySelf: 'end',
    // maxWidth: '70vw',
    borderRadius: '50%',
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
          <Link href="mailto:aitorvelascodev@gmail.com" aria-label="Email">
            <EmailIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aitor-velasco-ovejero-91a0094b"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="https://github.com/aitorvelasco"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </Link>
        </Box>
      </Box>
      <img
        className={me}
        alt="me"
        width={150}
        height={150}
        src="/its-a-me.webp"
      />
    </Box>
  )
}

export default Hero
