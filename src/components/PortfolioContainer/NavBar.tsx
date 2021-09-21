import { AppBar, Toolbar, makeStyles, Button, Link } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  logo: {
    borderRadius: '50%',
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

const NavBar = () => {
  const { logo, navBar } = useStyles()
  return (
    <AppBar color="default">
      <Toolbar className={navBar}>
        <Link href="#hero">
          <img
            className={logo}
            src="/logo.jpg"
            alt="Aitor Velasco - Front End Developer"
            width="50"
            height="50"
          />
        </Link>
        <Button variant="text" color="default" href="#aboutme">
          Sobre mi
        </Button>
        <Button variant="text" color="default" href="#skills">
          Habilidades
        </Button>
        <Button variant="text" color="default" href="#portfolio">
          Portfolio
        </Button>
        <Button variant="text" color="default" href="#contact">
          Contacto
        </Button>
        <Button variant="outlined" color="default" href="/" target="_blank">
          Ver CV
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
