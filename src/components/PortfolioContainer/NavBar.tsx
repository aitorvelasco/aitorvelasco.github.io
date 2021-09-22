import { useState } from 'react'
import {
  AppBar,
  Box,
  Drawer,
  makeStyles,
  Hidden,
  Toolbar,
  Button,
  Link,
  useScrollTrigger,
} from '@material-ui/core'

import { MenuIcon } from '../assets'

const useStyles = makeStyles(({ spacing, palette }) => ({
  navBar: (scrolled) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: scrolled ? spacing(0) : spacing(2),
    backgroundColor: scrolled ? palette.common.white : '',
    transition: '0.25s',
    justifyContent: 'space-between',
  }),
  navBarItems: {
    display: 'flex',
    gap: spacing(5),
  },
}))

const MenuItems = ({ mobile = false, top = true }) => (
  <>
    <Button
      variant="text"
      color={top || mobile ? 'default' : 'primary'}
      href="#aboutme"
    >
      Sobre mi
    </Button>
    <Button
      variant="text"
      color={top || mobile ? 'default' : 'primary'}
      href="#skills"
    >
      Habilidades
    </Button>
    <Button
      variant="text"
      color={top || mobile ? 'default' : 'primary'}
      href="#portfolio"
    >
      Portfolio
    </Button>
    <Button
      variant="text"
      color={top || mobile ? 'default' : 'primary'}
      href="#contact"
    >
      Contacto
    </Button>
    <Button
      variant={mobile ? 'contained' : 'outlined'}
      color={top || mobile ? 'default' : 'primary'}
      href="/"
      target="_blank"
    >
      Ver CV
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

  const { navBar, navBarItems } = useStyles(HasScrolled())

  // TODO: Drawer starts below appbar
  return (
    <AppBar>
      <Toolbar className={navBar}>
        <Link href="#hero">
          <img
            src="/logo.webp"
            alt="Aitor Velasco - Front End Developer"
            width="50"
            height="50"
          />
        </Link>
        <Box className={navBarItems}>
          <Hidden mdUp>
            <Button onClick={() => setOpen(!open)}>
              <MenuIcon />
            </Button>
            <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
              <MenuItems mobile top={HasScrolled()} />
            </Drawer>
          </Hidden>
          <Hidden smDown>
            <MenuItems top={HasScrolled()} />
          </Hidden>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
