import Link from 'next/link'
import { Box } from '@mui/material'

export default function Header() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: 300,
        mb: { sx: -17, lg: -4.5 },
        background: { xs: `linear-gradient(0, white 50%, black 50%)`, lg: `linear-gradient(16.8deg, white 50%, black 50%)` },
        '& img': {
          border: '4px solid',
          borderRadius: 50,
        }
      }}
    >
      <Link href="/" passHref>
        <a>
          <img
            src="/its-a-me.webp"
            alt="Aitor Velasco"
            width={150}
            height={150}
          />
        </a>
      </Link>
    </Box>
  )
}
