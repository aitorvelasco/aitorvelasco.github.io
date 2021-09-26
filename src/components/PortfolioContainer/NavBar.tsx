import { useState } from 'react'
import Link from 'next/link'
import {
  AppBar,
  Box,
  Drawer,
  makeStyles,
  Hidden,
  Toolbar,
  Button,
  useScrollTrigger,
} from '@material-ui/core'

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

const MenuItems = ({ mobile = false, top = true, handleOpen }) => (
  <>
    <Button
      variant="text"
      color={top || mobile ? 'default' : 'primary'}
      href="#aboutme"
      onClick={() => handleOpen(false)}
    >
      Sobre mi
    </Button>
    <Button
      variant="text"
      color={top || mobile ? 'default' : 'primary'}
      href="#skills"
      onClick={() => handleOpen(false)}
    >
      Habilidades
    </Button>
    <Button
      variant="text"
      color={top || mobile ? 'default' : 'primary'}
      href="#portfolio"
      onClick={() => handleOpen(false)}
    >
      Portfolio
    </Button>
    <Button
      variant="text"
      color={top || mobile ? 'default' : 'primary'}
      href="#contact"
      onClick={() => handleOpen(false)}
    >
      Contacto
    </Button>
    <Button
      variant={mobile ? 'contained' : 'outlined'}
      color={top || mobile ? 'default' : 'primary'}
      onClick={() => handleOpen(false)}
    >
      <Link href="/curriculum">Ver CV</Link>
    </Button>
  </>
)

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
        <a href="#hero">
          <img
            src="/logo-t.webp"
            alt="Aitor Velasco - Front End Developer"
            width="50"
            height="50"
          />
        </a>
        <Box className={navBarItems}>
          <Hidden mdUp>
            <Button onClick={() => setOpen(!open)}>
              <MenuIcon />
            </Button>
            <Drawer
              variant="persistent"
              anchor="top"
              open={open}
              onClose={() => setOpen(false)}
            >
              <Toolbar className={auxToolbar}>
                <a href="#hero" onClick={() => setOpen(false)}>
                  <img
                    src="/logo-t.webp"
                    alt="Aitor Velasco - Front End Developer"
                    width="50"
                    height="50"
                  />
                </a>
                <Button onClick={() => setOpen(!open)}>
                  <MenuIcon />
                </Button>
              </Toolbar>
              <MenuItems mobile top={HasScrolled()} handleOpen={setOpen} />
            </Drawer>
          </Hidden>
          <Hidden smDown>
            <MenuItems top={HasScrolled()} handleOpen={setOpen} />
          </Hidden>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
