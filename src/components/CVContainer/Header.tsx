import Link from 'next/link'
import { Box } from '@mui/material'
import Image from 'next/image'

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
          border: '4px solid black',
          borderRadius: 50,
        }
      }}
    >
      <Link href="/" passHref>
          <Image
            src="/its-a-me.webp"
            alt="Aitor Velasco"
            width={150}
            height={150}
          />
      </Link>
    </Box>
  )
}
