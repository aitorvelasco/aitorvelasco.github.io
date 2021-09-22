import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles,
} from '@material-ui/core'

import { works } from '../../data'

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  section: {
    scrollMarginTop: '68px',
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
  },
  portfolio: {
    display: 'grid',
    gap: 8,
    gridTemplateColumns: '1fr',
    [breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  infoBox: {
    position: 'relative',

    '& img': {
      width: '100%',
      '&:hover': {
        opacity: 0.2,
      },
    },
    '&:hover $info': {
      visibility: 'visible',
    },
  },
  info: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    visibility: 'hidden',
  },
}))

const Work = ({ src, name, description, url }) => {
  const { infoBox, info } = useStyles()
  return (
    <Box className={infoBox}>
      <img src={src} alt={name} />
      <Box className={info}>
        <Typography variant="subtitle1">{name}</Typography>
        <Typography gutterBottom>{description}</Typography>
        <Button variant="contained" href={url} target="_blank">
          Descubrir
        </Button>
      </Box>
    </Box>
  )
}

const Portfolio = () => {
  const { section, portfolio } = useStyles()
  return (
    <Box bgcolor="grey.500" color="white">
      <Container maxWidth="md" id="portfolio" className={section}>
        <Typography align="center" variant="h2">
          Portfolio
        </Typography>
      </Container>
      <Box className={portfolio} my={2}>
        {works.map(({ src, name, description, url }) => (
          <Work
            key={name}
            src={src}
            name={name}
            description={description}
            url={url}
          />
        ))}
      </Box>
      <Typography variant="h3" align="center">
        Y más allá
      </Typography>
    </Box>
  )
}

export default Portfolio
