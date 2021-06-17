
import Image from 'next/image'
import { Box, makeStyles } from '@material-ui/core'

import { bluePalette } from '../../../styles/theme'

const useStyles = makeStyles({
  "@keyframes morphing": {
    "50%": {
      borderRadius: '750px 550px 350px 750px / 350px 750px 550px 450px',
    },
    "100%": {
      borderRadius: '750px 250px 750px 250px / 250px 750px 250px 750px',
    }
  },
  me: {
    borderRadius: '250px 750px 250px 750px / 750px 250px 750px 250px',
    animation: '$morphing 4s ease-in-out alternate infinite',
    border: `4px solid ${bluePalette} !important`,
  }
})

const Header = () => {
  const { me } = useStyles()
    return (
        <Box display="flex" justifyContent="center">
        <Image
          className={me}
          src="/its-a-me.jpeg"
          alt="Aitor Velasco"
          width="200"
          height="200"
        />
      </Box>
    )
}

export default Header