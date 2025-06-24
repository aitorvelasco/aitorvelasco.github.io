import { Box, BoxProps, Typography } from '@mui/material'

export default function Aside (boxProps: BoxProps) {
  return (
    <Box {...boxProps}>
      <Typography fontSize={116} textTransform="uppercase" component="h1" lineHeight={1.3} sx={{ writingMode: 'vertical-lr', textOrientation: 'upright' }} >Aitor&nbsp;Velasco</Typography>

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
