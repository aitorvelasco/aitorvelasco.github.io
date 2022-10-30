import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  name: {
    fontSize: '116px',
    textTransform: 'uppercase',
    writingMode: 'vertical-lr',
    textOrientation: 'upright',
    lineHeight: 1.3,
  },
}))

const Aside = () => {
  const { name } = useStyles()
  return (
    <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
      <Typography component="h1" className={name}>Aitor&nbsp;Velasco</Typography>

      <Typography component="p" variant="caption">
        Aitor Velasco
      </Typography>
      <Typography component="p" variant="caption">
        Front-End Developer
      </Typography>
      <Typography gutterBottom component="p" variant="caption">
        aitorvelascodev@gmail.com
      </Typography>
    </Box>
  )
}

export default Aside
