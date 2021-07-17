import Image from 'next/image'
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"

import Project from './Project'

const useStyles = makeStyles(({ spacing, palette }) => ({
    jobItem: {
      padding: spacing(1, 0),
      '&:not(:last-of-type)': {
        borderBottom: `2px solid ${palette.grey[500]}`,
      },
    },
    projectList: projectsLength => ({
      display: 'grid',
      gridTemplateColumns: `repeat(${projectsLength}, 1fr)`,
      padding: 0,
    }),
  }))

const Job = ({ company, time, logo, projects }) => {
    const { jobItem, projectList } = useStyles(projects.length)
    return (
      <Grid container className={jobItem}>
        <Grid container item alignItems="center" spacing={1}>
          <Grid container item direction="column" xs={4}>
            <Grid item>
              <Typography variant="h3">{company}</Typography>
            </Grid>
  
            <Grid item>
              <Typography variant="caption" display="block" color="textSecondary">
                {time}
              </Typography>
            </Grid>
          </Grid>
  
          <Grid item>
            <Box position="relative" width={120} height={25}>
              <Image
                src={`https:${logo.fields.file.url}`}
                alt={company}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container item className={projectList}>
          {projects.map((project) => {
            const projectFields = project.fields
            const { name, description, imagePreview, url } = projectFields
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