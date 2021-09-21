import { Box, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(({spacing, palette }) => ({
    hero: {
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center',
        gridTemplateColumns: '50% 50%',
        marginTop: spacing(8),
        height: `calc(100vh - ${spacing(8)}px)`,
        background: `linear-gradient(110deg, ${palette.secondary.main} 50%, ${palette.common.black} 50%)`,
      },
      me: {
        alignSelf: 'flex-end',
        justifySelf: 'end',
        maxWidth: '500px',
      },
}))

const Hero = () => {
    const { hero, me } = useStyles()
  return (
    <Box className={hero} id="hero">
        <Box>
          <Typography variant="h1" color="textSecondary">
            Hola, soy Aitor Velasco
          </Typography>
          <Typography variant="h2" color="primary">
            Front End Developer
          </Typography>
        </Box>
        <img className={me} src="/hero-pic.png" />
      </Box>
  )
}

export default Hero
