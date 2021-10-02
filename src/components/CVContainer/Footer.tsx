import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Image from 'next/image'

const useStyles = makeStyles(() => ({
  logo: {
    transform: 'translateY(-50%)',
    border: '4px solid !important',
    borderRadius: '50%',
    overflow: 'auto !important'
  },
}))

const Footer = () => {
  const { logo } = useStyles()
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={8.5}
      bgcolor="black"
      height="150px"
    >
      <Image
        className={logo}
        src="/logo-w.webp"
        alt="Aitor Velasco - Senior Front End Developer"
        width={150}
        height={150}
      />
    </Box>
  )
}

export default Footer
