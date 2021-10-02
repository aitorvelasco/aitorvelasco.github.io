import Link from 'next/link'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Image from 'next/image'

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  triangle: {
    height: '300px',
    marginBottom: spacing(-17),
    background: `linear-gradient(0, ${palette.common.white} 50%, ${palette.common.black} 50%)`,
    [breakpoints.up('lg')]: {
      marginBottom: spacing(-4.5),
      background: `linear-gradient(16.8deg, ${palette.common.white} 50%, ${palette.common.black} 50%)`,
    },
  },
  me: {
    border: '4px solid !important',
    borderRadius: '50%',
  },
}))

const Header = () => {
  const { triangle, me } = useStyles()
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={triangle}
    >
      <Link href="/">
        <a>
          <Image
            className={me}
            src="/its-a-me.webp"
            alt="Aitor Velasco"
            width={150}
            height={150}
          />
        </a>
      </Link>
    </Box>
  )
}

export default Header
