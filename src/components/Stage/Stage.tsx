import { Typography } from '@material-ui/core'
import Job from './Job'

const Stage = ({ jobs }) => {
  return (
    <>
      <Typography variant="h2">Experiencia laboral</Typography>
        {jobs.map((job) => {
          const { company, logo, time, projects } = job
          return (
            <Job
              company={company}
              logo={logo}
              time={time}
              projects={projects}
              key={company}
            />
          )
        })}
    </>
  )
}

export default Stage
