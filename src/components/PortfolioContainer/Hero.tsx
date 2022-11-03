import { Box, Typography, Link } from '@mui/material'

import Image from 'next/image'

import { LinkedInIcon, GithubIcon, EmailIcon } from '../assets'

export default function Hero() {
  return (
    <Box 
      id="hero"
      display="grid"    
      alignItems="center"
      justifyItems="center"
      gridTemplateColumns="50% 50%"
      minHeight={320}
      sx={{
        background: ({ palette }) => `linear-gradient(110deg, ${palette.secondary.main} 50%, ${palette.common.black} 50%)`,
        height: { xs: "calc(70vh - 56px)", md: "calc(100vh - 64px)" },
        '& img': {
          borderRadius: 50,
          // alignSelf: 'flex-end',
          // justifySelf: 'end',
          // maxWidth: '70vw',
        }
      }}
    >
      <Box pl={2} pt={4}>
        <Typography variant="h1" color="textSecondary">
          Hola, soy Aitor Velasco
        </Typography>
        <Typography variant="h2" color="primary">
          Front End Developer
        </Typography>
        <Box display="flex" gap={1} justifyContent={{md: 'flex-end'}}>
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
      <Image
        alt="me"
        width={150}
        height={150}
        src="/its-a-me.webp"
      />
    </Box>
  )
}
