import { Typography, makeStyles } from '@material-ui/core'

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
    <>
      <Typography className={name}>Aitor&nbsp;Velasco</Typography>

      <Typography component="p" variant="caption">
        Aitor Velasco
      </Typography>
      <Typography component="p" variant="caption">
        Front-End Developer
      </Typography>
      <Typography gutterBottom component="p" variant="caption">
        aitorvelascodev@gmail.com
      </Typography>
    </>
  )
}

export default Aside
