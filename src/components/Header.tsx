import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  triangle: {
    borderBottom: '50px solid transparent',
    borderTop: `150px solid ${palette.common.black}`,
    [breakpoints.up('lg')]: {
      borderBottom: '150px solid transparent',
      borderLeft: '500px solid transparent',
      borderRight: `500px solid ${palette.common.black}`,
    },
  },
  me: {
    position: 'absolute',
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
      mb={-4.5}
      className={triangle}
    >
      <img
        className={me}
        src="/its-a-me.jpg"
        alt="Aitor Velasco"
        width="150"
        height="150"
      />
    </Box>
  )
}

export default Header
