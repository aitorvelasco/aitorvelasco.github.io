import { CVInfoProps } from '../model/cv.model'

const CVInfo: CVInfoProps[] = [
  {
    company: 'BQ (Mundo Reader S.L.)',
    logo: 'logo-bq.png',
    time: '4 de noviembre de 2015 - 10 de febrero de 2019',
    projects: [
      {
        name: 'Store BQ',
        image: '',
        description: 'Tienda online principal de BQ. Basado en Magento',
      },
      {
        name: 'BQcom',
        image: '',
        description: 'Website principal de BQ. Usa un CMS customizado.',
      },
      {
        name: 'DIWO',
        image: '',
        description: 'Sitio enfocado a la divulgación tecnológica, con cursos.',
      },
    ],
  },
  {
    company: 'Grupo Masmovil',
    logo: 'logo-mm.png',
    time: '11 de febrero de 2019 - Actualidad',
    projects: [
      {
        name: 'Llamaya',
        image: 'llamaya.png',
        url: 'https://www.llamaya.com',
        description: 'eShop de la marca Llamaya. Creada en React 16.8, NextJS 9.4 y Typescript y apoyado en Contentful como CMS.',
      },
      {
        name: 'Másmóvil',
        image: 'masmovil.png',
        url: 'https://www.masmovil.es',
        description: 'eShop de la marca Masmovil. Creada en React 16.8, NextJS 9.4 y Typescript.',
      },
    ],
  },
]

export default CVInfo
