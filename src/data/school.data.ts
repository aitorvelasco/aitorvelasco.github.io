import urjc from '../../public/portfolio/urjc.jpeg'
import cice from '../../public/portfolio/cice.jpeg'

import { School } from '../model/school.model'

const schools: School[] = [
  {
    site: 'CICE',
    logo: cice,
    time: 'Noviembre 2014 - Junio 2015',
    description: 'Master en Desarrollo de Proyectos Web',
  },
  {
    site: 'Universidad Rey Juan Carlos',
    logo: urjc,
    time: 'Octubre 2010 - Julio 2014',
    description: 'Ingeniería Informática',
  },
]

export default schools