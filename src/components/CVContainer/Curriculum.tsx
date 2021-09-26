import { Link, Typography } from '@material-ui/core'

import Skills from './Skills'

const Curriculum = () => {
  return (
    <>
      <Typography variant="h2">
        Sobre mi
      </Typography>
      <Typography paragraph align="justify">
        Tras unos años estudiando un Grado en Ingeniería Informática en la
        Universidad Rey Juan Carlos, me especialicé en el mundo web y me preparé
        en el Máster en Desarrollo y Diseño de Proyectos Web en la Escuela CICE.
        Después pasé a formar parte del departamento e-business de BQ donde
        trabajé en el desarrollo y mantenimiento de la tienda online, además de
        ayudar paralelamente en otros frontales de proyectos de la marca (DIWO,
        Blog BQ, la web principal de BQ...). Actualmente desempeño mi trabajo
        como Senior Frontend Developer en Grupo MASMOVIL, donde doy soporte al
        área pública de las webs de Masmovil y Llamaya, además de a otros
        proyectos más pequeños también de la casa.
      </Typography>

      <Skills />

      <Typography variant="h2">
        Experiencia
      </Typography>
      <Typography variant="h3">Grupo Masmovil</Typography>
      <Typography className="semibold" gutterBottom>
        Senior Front End Developer
      </Typography>
      <Typography color="secondary" gutterBottom>
        11 de febrero de 2019 - Actualidad
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        <Link
          color="inherit"
          href="https://www.grupomasmovil.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.grupomasmovil.com
        </Link>
      </Typography>
      <Typography paragraph align="justify">
        Los primeros meses iniciamos un pequeño proyecto con React, Typescript,
        Material UI y Emotion para facilitar las portabilidades de los clientes
        de Yoigo, Masmovil y Llamaya. Después pasé a formar parte del equipo
        encargado de las eshops de Masmovil y Llamaya donde hicimos una
        renovación completa de la tecnología en la que se basaban, añadiendo una
        solución basada en NextJS.
      </Typography>

      <Typography variant="h3">Mundo Reader (BQ)</Typography>
      <Typography className="semibold" gutterBottom>
        Front End Developer
      </Typography>
      <Typography color="secondary" gutterBottom>
        4 de noviembre 2015 - 10 de febrero de 2019
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        <Link
          color="inherit"
          href="https://www.bq.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.bq.com
        </Link>
      </Typography>
      <Typography paragraph align="justify">
        En esta etapa trabajé mayormente en la e-shop de BQ (BQ Store), basada
        en Magento, usando HTML5, Sass y jQuery. Con el tiempo hicimos un portal
        para distruidores basado en Magento 2 y añadiendo KnockoutJS. También
        daba mantenimiento a DIWO, un Wordpress multi idioma que ofrecía cursos
        a los niños para acercarlos a la tecnología. De manera más remota
        ofrecía refuerzo para el blog y el portal principal de la marca, BQcom.
      </Typography>

      <Typography variant="h2">
        Estudios
      </Typography>
      <Typography variant="h3">CICE</Typography>
      <Typography className="semibold" gutterBottom color="textPrimary">
        Master en Desarrollo de Proyectos Web
      </Typography>
      <Typography color="secondary">Noviembre 2014 - Junio 2015</Typography>
      <Typography paragraph color="textSecondary">
        <Link
          href="https://www.cice.es"
          target="_blank"
          color="inherit"
          rel="noopener noreferrer"
        >
          https://www.cice.es
        </Link>
      </Typography>

      <Typography gutterBottom color="textPrimary" align="justify">
        Como proyecto final desarrollé un sitio web de fotografía basado en
        Wordpress:{' '}
        <Link
          color="textSecondary"
          href="https://www.saramontoyafotografia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.saramontoyafotografia.com
        </Link>
      </Typography>

      <Typography variant="h3">Universidad Rey Juan Carlos</Typography>
      <Typography className="semibold" gutterBottom color="textPrimary">
        Grado en Ingeniería Informática
      </Typography>
      <Typography color="secondary">Octubre 2010 - Julio 2014</Typography>
      <Typography paragraph color="textSecondary">
        <Link
          color="inherit"
          href="https://www.urjc.es"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.urjc.es
        </Link>
      </Typography>
    </>
  )
}

export default Curriculum
