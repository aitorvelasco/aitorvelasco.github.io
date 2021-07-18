import bq from '../../public/portfolio/logo-bq.png'
import gmm from '../../public/portfolio/logo-mm.png'

import mm from '../../public/portfolio/masmovil.png'
import lly from '../../public/portfolio/llamaya.png'

import bqstore from '../../public/portfolio/bq-store.png'
import bqcom from '../../public/portfolio/bqcom.png'
import diwo from '../../public/portfolio/diwo.png'

import saraphoto from '../../public/portfolio/sara-foto.jpg'

import { Job } from '../model'

const jobs: Job[] = [
    {
      company: 'Grupo Masmovil',
      time: '11 de febrero de 2019 - Actualidad',
      logo: gmm,
      projects: [
        {
          name: 'MasMovil',
          description:
            'eShop de la marca Masmovil. Creada en React, NextJS y Typescript y apoyado en Contentful como CMS.',
          imagePreview: mm,
          url: 'https://www.masmovil.es',
        },
        {
          name: 'Llamaya',
          description:
            'eShop de la marca Llamaya. Creada en React, NextJS y Typescript y apoyado en Contentful como CMS.',
          imagePreview: lly,
          url: 'https://www.llamaya.com',
        },
      ],
    },
    {
      company: 'BQ',
      time: '4 de noviembre 2015 - 10 de febrero de 2019',
      logo: bq,
      projects: [
        {
          name: 'Store BQ',
          description: 'Tienda online principal de BQ. Basado en Magento.',
          imagePreview: bqstore,
          url: 'http://web.archive.org/web/20170515081151/https://store.bq.com/es/',
        },
        {
          name: 'BQcom',
          description: 'Website principal de BQ. Usa un CMS customizado',
          imagePreview: bqcom,
          url: 'http://web.archive.org/web/20180730044702/https://www.bq.com/es/',
        },
        {
          name: 'DIWO',
          description:
            'Wordpress enfocado a la divulgación tecnológica, con posibilidad de ofrecer cursos.',
          imagePreview: diwo,
          url: 'http://web.archive.org/web/20170520061706/http://diwo.bq.com/',
        },
      ],
    },
    {
      company: 'Otros proyectos',
      projects: [
        {
          name: 'Sara Montoya Fotografía',
          description:
            'Proyecto final de Master. Wordpress enfocado a reportajes fotográficos',
          imagePreview: saraphoto,
          url: 'https://www.saramontoyafotografia.com',
        },
      ],
    },
  ]

export default jobs