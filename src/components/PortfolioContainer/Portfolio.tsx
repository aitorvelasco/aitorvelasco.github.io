import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material'

import { makeStyles } from '@mui/styles'

import { works } from '../../data'

const useStyles = makeStyles(({ spacing, breakpoints, palette }) => ({
  section: {
    scrollMarginTop: '68px',
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
  },
  portfolio: {
    display: 'grid',
    gap: 8,
    gridTemplateColumns: '1fr',
    [breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  infoBox: {
    position: 'relative',
    '& img': {
      width: '100%',
    },
    '&:hover $info': {
      transition: '.3s',
      visibility: 'visible',
      backgroundColor: palette.grey[500],
      opacity: 0.95,
    },
  },
  info: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    visibility: 'hidden',
  },
}))

const Work = ({ src, name, description, url }) => {
  const { infoBox, info } = useStyles()
  return (
    <Box className={infoBox}>
      <img src={src} alt={name} />
      <Box className={info}>
        <Box
          display="flex"
          flexDirection="column"
          textAlign="center"
          alignItems= "center"
          border={1}
          borderRadius={10}
          p={2}
        >
          <Typography variant="subtitle1">{name}</Typography>
          <Typography gutterBottom>{description}</Typography>
          <Button sx={{ bgcolor: '#e0e0e0', color: 'black', ":hover": { bgcolor: '#e0e0e0' }}} variant="contained" href={url} target="_blank" rel="noopener noreferrer">
            Descubrir
          </Button>
        </Box>
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
      <Typography variant="h3" component="p" align="center">
        ???????????????
      </Typography>
    </Box>
  )
}

export default Portfolio
