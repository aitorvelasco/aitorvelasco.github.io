import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material'

import { works } from '../../data'

const Work = ({ src, name, description, url }) => {
  return (
    <Box position="relative" sx={{ 
      '& img': { width: 1},
      '&:hover .info-box': {
        transition: '.3s',
        visibility: 'visible',
        backgroundColor: ({ palette }) => palette.grey[500],
        opacity: 0.95,
      },
      }}>
      <picture>
        <source srcSet={src} type="image/webp" />
        <img src={src} alt={name} />
      </picture>
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        position="absolute"
        left={0}
        right={0}        
        top={0}        
        bottom={0}
        visibility="hidden"
        className="info-box"
      >
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

export default function Portfolio () {
  return (
    <Box bgcolor="grey.500" color="common.white">
      <Container maxWidth="md" id="portfolio" sx={{ scrollMarginTop: 68, py: 2 }}>
        <Typography align="center" variant="h2">
          Portfolio
        </Typography>
      </Container>

      <Box display="grid" gap={1} gridTemplateColumns={{xs: '1fr', md: '1fr 1fr'}} my={2}>
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
        👨🏻‍💻
      </Typography>
    </Box>
  )
}
