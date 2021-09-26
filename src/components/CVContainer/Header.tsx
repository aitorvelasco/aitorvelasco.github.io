import Link from 'next/link'
import { Box, makeStyles } from '@material-ui/core'

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
    border: '4px solid',
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
          <img
            className={me}
            src="/its-a-me.webp"
            alt="Aitor Velasco"
            width="150"
            height="150"
          />
        </a>
      </Link>
    </Box>
  )
}

export default Header
