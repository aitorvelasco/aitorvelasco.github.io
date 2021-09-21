import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  logo: {
    transform: 'translateY(-50%)',
    border: '4px solid',
    borderRadius: '50%',
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
      <img
        className={logo}
        src="/logo.jpg"
        alt="Aitor Velasco - Senior Front End Developer"
        width="150"
        height="150"
      />
    </Box>
  )
}

export default Footer
