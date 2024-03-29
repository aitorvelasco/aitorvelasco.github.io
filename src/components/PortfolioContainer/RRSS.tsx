import { Box, Link, Typography } from '@mui/material'

import { LinkedInIcon, GithubIcon, EmailIcon } from '../assets'

export default function RRSS () {
  return (
  <Box
    py={1.5}
    display="flex"
    flexDirection="column"
    alignItems="center"
    bgcolor="black"
    color="white"
  >
    <Box>
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
    <Typography>
      <Typography color="inherit" component="span" className="bold">
        {(new Date).getFullYear()} - Aitor Velasco |{' '}
      </Typography>
      Made it with ❤️
    </Typography>
  </Box>
  )
}
