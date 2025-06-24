import { Link, Typography } from '@mui/material'

import { experience, studies } from '../../data'
import { Fragment } from 'react'

export default function Experience() {
  return (
    <>
      <Typography variant="h2">Experiencia</Typography>
      {experience.map(({ company, role, period, site, description }) => {
        return (
          <Fragment key={period}>
            <Typography variant="h3">{company}</Typography>
            <Typography className="semibold" gutterBottom>{role}</Typography>
            <Typography color="secondary" gutterBottom>{period}</Typography>
            <Typography color="textSecondary" gutterBottom>
              <Link
                color="inherit"
                href={site}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site}
              </Link>
            </Typography>
            <Typography mb={4} align="justify">{description}</Typography>
          </Fragment>
        )
      }
      )}

      <Typography variant="h2">Estudios</Typography>
      {studies.map(({ school, degree, period, site, description }) => {
        return (
          <Fragment key={period}>
            <Typography variant="h3">{school}</Typography>
            <Typography className="semibold" gutterBottom color="textPrimary">{degree}</Typography>
            <Typography color="secondary">{period}</Typography>
            <Typography mb={4} color="textSecondary">
              <Link
                href={site}
                target="_blank"
                color="inherit"
                rel="noopener noreferrer"
              >
                {site}
              </Link>
            </Typography>
            {description}
          </Fragment>
        )
      }
      )}
    </>
  )
}
