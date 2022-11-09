import { useState } from 'react'
import Link from 'next/link'
import {
  AppBar,
  Box,
  Drawer,
  Toolbar,
  Button,
  useScrollTrigger,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import Image from 'next/image'

import { MenuIcon } from '../assets'

const MenuItems = ({ mobile = false, top = true, handleOpen }) => {
  return (
  <>
    <Button
      variant="text"
      color={top || mobile ? 'secondary' : 'primary'}
      onClick={() => {
        handleOpen(false)
        document.getElementById('aboutme').scrollIntoView()
      }}
    >
      Sobre mi
    </Button>
    <Button
      variant="text"
      color={top || mobile ? 'secondary' : 'primary'}
      onClick={() => {
        handleOpen(false)
        document.getElementById('skills').scrollIntoView()
      }}
    >
      Stack
    </Button>
    <Button
      variant="text"
      color={top || mobile ? 'secondary' : 'primary'}
      onClick={() => {
        handleOpen(false)
        document.getElementById('portfolio').scrollIntoView()
      }}
    >
      Portfolio
    </Button>
    <Button
      variant="text"
      color={top || mobile ? 'secondary' : 'primary'}
      onClick={() => {
        handleOpen(false)
        document.getElementById('contact').scrollIntoView()
      }}
    >
      Contacto
    </Button>
    <Button
      variant={mobile ? 'contained' : 'outlined'}
      color={top || mobile ? 'secondary' : 'primary'}
      onClick={() => handleOpen(false)}
      sx={{ 'a': { textDecoration: 'none', color: 'inherit'}}}
    >
      <Link href="/curriculum" passHref>
        Ver CV
      </Link>
    </Button>
  </>
)}

function HasScrolled() {
  return useScrollTrigger({
    disableHysteresis: true,
    threshold: 64,
  })
}

export default function NavBar() {
  const [open, setOpen] = useState(false)

  const { breakpoints } = useTheme()
  const downMd = useMediaQuery(breakpoints.down('md'))

  return (
    <AppBar color="transparent">
      <Toolbar sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        transition: '0.25s',
        justifyContent: 'space-between',
        top: HasScrolled() ? 0 : 2,
        backgroundColor: HasScrolled() ? 'white' : 'transparent',
      }}
      >
        <Button onClick={() => document.getElementById('hero').scrollIntoView()}>
          <Image
            src="/logo-t.webp"
            alt="Aitor Velasco - Front End Developer"
            width={50}
            height={50}
          />
        </Button>
        <Box display="flex" gap={{ md: 5 }}>
          {downMd ? (
            <>
            <Button aria-label="menu" onClick={() => setOpen(!open)}>
              <MenuIcon />
            </Button>
            <Drawer
              variant="persistent"
              anchor="top"
              open={open}
              onClose={() => setOpen(false)}
            >
              <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Button onClick={() => {
                  document.getElementById('hero').scrollIntoView() 
                  setOpen(false) 
                  }}>
                  <Image
                    src="/logo-t.webp"
                    alt="Aitor Velasco - Front End Developer"
                    width={50}
                    height={50}
                  />
                </Button>
                <Button aria-label="menu" onClick={() => setOpen(!open)}>
                  <MenuIcon />
                </Button>
              </Toolbar>
              <MenuItems mobile top={HasScrolled()} handleOpen={setOpen} />
            </Drawer>
            </>
          ) : <MenuItems top={HasScrolled()} handleOpen={setOpen} />
          }
        </Box>
      </Toolbar>
    </AppBar>
  )
}
