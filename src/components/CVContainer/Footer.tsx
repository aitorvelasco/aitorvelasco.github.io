import { Box, BoxProps } from '@mui/material'

export default function Footer(boxProps: BoxProps) {
  return (
    <Box {...boxProps} sx={{
      '& img': {
        transform: 'translateY(-50%)',
        border: '2px solid',
        borderRadius: 50,
      }
    }}>
      <img
        src="/logo-w.webp"
        alt="Aitor Velasco - Senior Front End Developer"
        width={150}
        height={150}
      />
    </Box>
  )
}
