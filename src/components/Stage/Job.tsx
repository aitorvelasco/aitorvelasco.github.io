import Image from 'next/image'
import { Grid, makeStyles, Typography } from '@material-ui/core'

import Project from './Project'

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  jobItem: {
    padding: spacing(1, 0),
    '&:not(:last-of-type)': {
      borderBottom: `2px solid ${palette.grey[500]}`,
    },
  },
  logoImage: {
    textAlign: 'center'
  },
  projectList: (projectsLength) => ({
    [breakpoints.up('lg')]: {
      display: 'grid',
      gridTemplateColumns: `repeat(${projectsLength}, 1fr)`,
    },
  }),
}))

const Job = ({ company, time, logo, projects }) => {
  const { jobItem, logoImage, projectList } = useStyles(projects.length)
  return (
    <Grid container className={jobItem}>
        <Grid container item alignItems="baseline" spacing={2}>
          <Grid item>
            <Typography variant="h3">{company}</Typography>
          </Grid>

          <Grid item>
            <Typography variant="caption" color="textSecondary">
              {time}
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} className={logoImage}>
            <Image
              src={logo}
              alt={company}
              width={150}
              height={35}
              objectFit="contain"
            />
        </Grid>
      <Grid container item className={projectList}>
        {projects.map((project) => {
          const { name, description, imagePreview, url } = project
          return (
            <Project
              name={name}
              description={description}
              imagePreview={imagePreview}
              url={url}
              key={name}
            />
          )
        })}
      </Grid>
    </Grid>
  )
}

export default Job
