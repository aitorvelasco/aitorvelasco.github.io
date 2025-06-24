import { Link, Typography } from "@mui/material"

interface experience {
  company: string
  role: string
  period: string
  site: string
  description: string
}

interface studies {
  school: string
  degree: string
  period: string
  site: string
  description?: string | JSX.Element
}

const experience: experience[] = [
  {
    company: 'Grupo MASORANGE',
    role: 'Senior FrontEnd Developer',
    period: 'Abril 2024 - Actualidad',
    site: 'https://masorange.es',
    description: `Continuando con el stack de las marcas nacionales del Grupo Masmovil, añadimos las marcas
        regionales Euskaltel, Guuk, Telecable, R y Racctel y la marca de prepago Lebara. En esta etapa
        profundizamos en el valor de la estrategia multimarca mientras continua la convergencia entre las
        marcas de Masmovil y Orange.`
  },
  {
    company: 'Grupo Masmovil',
    role: 'Senior FrontEnd Developer',
    period: 'Febrero de 2019 - Abril 2024',
    site: 'https://www.grupomasmovil.com',
    description: `Los primeros meses iniciamos un pequeño proyecto con React, Typescript,
        Material UI y Emotion para facilitar las portabilidades de los clientes
        de Yoigo, Masmovil y Llamaya. Después pasé a formar parte del equipo
        encargado de las eshops de Masmovil y Llamaya donde hicimos una
        renovación completa de la tecnología en la que se basaban, añadiendo una
        solución basada en NextJS. Después nos hicimos responsables de la marca Yoigo
        y la añadimos a nuestro stack.`
  },
  {
    company: 'Mundo Reader (BQ)',
    role: 'FrontEnd Developer',
    period: 'Noviembre 2015 - Febrero de 2019',
    site: 'https://www.bq.com',
    description: `En esta etapa trabajé mayormente en la e-shop de BQ (BQ Store), basada
        en Magento, usando HTML5, Sass y jQuery. Con el tiempo hicimos un portal
        para distruidores basado en Magento 2 y añadiendo KnockoutJS. También
        daba mantenimiento a DIWO, un Wordpress multi idioma que ofrecía cursos
        a los niños para acercarlos a la tecnología. De manera más remota
        ofrecía refuerzo para el blog y el portal principal de la marca, BQcom.`
  }
]

const studies: studies[] = [
  {
    school: 'CICE',
    degree: 'Master en Desarrollo de Proyectos Web',
    period: 'Noviembre 2014 - Junio 2015',
    site: 'https://www.cice.es',
    description: <Typography gutterBottom color="textPrimary" align="justify">
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
  },
  {
    school: 'Universidad Rey Juan Carlos',
    degree: 'Grado en Ingeniería Informática',
    period: 'Octubre 2010 - Julio 2014',
    site: 'https://www.urjc.es'
  }
]

export { experience, studies }
