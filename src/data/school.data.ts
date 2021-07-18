import urjc from '../../public/portfolio/urjc.jpeg'
import cice from '../../public/portfolio/cice.jpeg'
import { School } from '../model/school.model'

const schools: School[] = [
  {
    site: 'CICE',
    time: 'Noviembre 2014 - Junio 2015',
    description: 'Master en Desarrollo de Proyectos Web',
    logo: cice,
  },
  {
    site: 'Universidad Rey Juan Carlos',
    time: 'Octubre 2010 - Julio 2014',
    description: 'Ingeniería Informática',
    logo: urjc,
  },
]

export default schools