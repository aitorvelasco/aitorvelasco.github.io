import Image from 'next/image'
import { Grid, Typography, makeStyles } from '@material-ui/core'

import profilePic from '../../../public/its-a-me.jpg'

const useStyles = makeStyles(({ palette }) => ({
  '@keyframes morphing': {
    '50%': {
      borderRadius: '750px 550px 350px 750px / 350px 750px 550px 450px',
    },
    '100%': {
      borderRadius: '750px 250px 750px 250px / 250px 750px 250px 750px',
    },
  },
  me: {
    borderRadius: '250px 750px 250px 750px / 750px 250px 750px 250px',
    animation: '$morphing 4s ease-in-out alternate infinite',
    border: `4px solid ${palette.primary.main} !important`,
  },
}))

const Header = () => {
  const { me } = useStyles()
  return (
    <Grid container justify="space-around" alignItems="center">
      <Grid item>
        <Typography variant="h1">Hola, soy Aitor Velasco</Typography>
        <Typography variant="h1" component="h2">Front End Developer</Typography>
      </Grid>
      <Grid item>
        <Image
          className={me}
          src={profilePic}
          alt="Aitor Velasco"
          width="200"
          height="200"
          placeholder="blur"
        />
      </Grid>
    </Grid>
  )
}

export default Header
