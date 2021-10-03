import { useState } from 'react'
import Link from 'next/link'
import {
  AppBar,
  Box,
  Drawer,
  Hidden,
  Toolbar,
  Button,
  useScrollTrigger,
} from '@mui/material'

import { makeStyles } from '@mui/styles'

import { MenuIcon } from '../assets'

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  navBar: (scrolled) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: scrolled ? spacing(0) : spacing(2),
    backgroundColor: scrolled ? palette.common.white : 'transparent',
    transition: '0.25s',
    justifyContent: 'space-between',
  }),
  navBarItems: {
    display: 'flex',
    [breakpoints.up('md')]: {
      gap: spacing(5),
    },
  },
  auxToolbar: {
    justifyContent: 'space-between',
  },
}))

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
      Habilidades
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
    <Link href="/curriculum" passHref>
      <Button
        variant={mobile ? 'contained' : 'outlined'}
        color={top || mobile ? 'secondary' : 'primary'}
        onClick={() => handleOpen(false)}
      >
      Ver CV
      </Button>
    </Link>
  </>
)}

const NavBar = () => {
  const [open, setOpen] = useState(false)

  function HasScrolled() {
    return useScrollTrigger({
      disableHysteresis: true,
      threshold: 64,
    })
  }

  const { navBar, navBarItems, auxToolbar } = useStyles(HasScrolled())

  return (
    <AppBar>
      <Toolbar className={navBar}>
        <Button onClick={() => document.getElementById('hero').scrollIntoView()}>
          <img
            src="/logo-t.webp"
            alt="Aitor Velasco - Front End Developer"
            width={50}
            height={50}
          />
        </Button>
        <Box className={navBarItems}>
          <Hidden mdUp>
            <Button aria-label="menu" onClick={() => setOpen(!open)}>
              <MenuIcon />
            </Button>
            <Drawer
              variant="persistent"
              anchor="top"
              open={open}
              onClose={() => setOpen(false)}
            >
              <Toolbar className={auxToolbar}>
                <Button onClick={() => {
                  document.getElementById('hero').scrollIntoView() 
                  setOpen(false) 
                  }}>
                  <img
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
          </Hidden>
          <Hidden mdDown>
            <MenuItems top={HasScrolled()} handleOpen={setOpen} />
          </Hidden>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
