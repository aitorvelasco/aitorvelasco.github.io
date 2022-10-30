import { Box, Container, Typography } from '@mui/material'

export default function About() {
  return (
    <Box color="white" sx={{ background: ({ palette }) => `linear-gradient(57deg, ${palette.common.black} 50%, ${palette.secondary.main} 50%)` }} py={2}>
      <Container maxWidth="md" id="aboutme" sx={{ scrollMarginTop: 76 }}>
        <Typography color="inherit" variant="h2">
          Sobre mi
        </Typography>
        <Typography color="inherit" align="justify">
          Tras unos años estudiando un Grado en Ingeniería Informática en la
          Universidad Rey Juan Carlos, me especialicé en el mundo web y me
          preparé en el Máster en Desarrollo y Diseño de Proyectos Web en la
          Escuela CICE. Después pasé a formar parte del departamento e-business
          de BQ donde trabajé en el desarrollo y mantenimiento de la tienda
          online, además de ayudar paralelamente en otros frontales de proyectos
          de la marca (DIWO, Blog BQ, la web principal de BQ...). Actualmente
          desempeño mi trabajo como Senior Frontend Developer en Grupo MASMOVIL,
          donde doy soporte al área pública de las webs de Masmovil y Llamaya,
          además de a otros proyectos más pequeños también de la casa.
        </Typography>
      </Container>
    </Box>
  )
}
