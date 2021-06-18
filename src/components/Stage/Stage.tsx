import Image from 'next/image'

import { Box, Link, Grid, Typography, makeStyles } from '@material-ui/core'

import { Job, Project } from '../../model'
import { greyPalette } from '../../../styles/theme'

import profilePic from '../../../public/its-a-me.jpg'

const useStyles = makeStyles({
  stageListItem: {
    padding: '8px 0',
    '&:not(:last-of-type)': {
      borderBottom: `2px solid ${greyPalette}`,
    },
  },
  projectList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    padding: 0,
  },
  projectListItem: {
    padding: '16px',
    '& img': {
      transition: 'transform 0.5s',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
  },
})

const Stage = ({ jobs }) => {
  const { stageListItem, projectList, projectListItem } = useStyles()
  return (
    <ul>
      {jobs.map((job: Job) => {
        const { company, logo, time, projects } = job
        return (
          <Grid container className={stageListItem} key={company}>
            <Typography variant="h4" component="h2">
              {company}
            </Typography>
            <Box position="relative" pl={4}>
              <Image src={`https:${logo.fields.file.url}`} alt={company} layout="fill" />
            </Box>
            <Typography variant="caption" display="block" color="textSecondary">
              {time}
            </Typography>
            <Grid container item className={projectList}>
              {projects.map((project) => {
                const projectFields: Project = project.fields
                const { name, description, imagePreview, url } = projectFields
                return (
                  <Grid item className={projectListItem} key={name}>
                    <Typography variant="h5" component="h3">
                      {name}
                    </Typography>
                    {imagePreview && (
                      <Link href={url} target="_blank">
                        <Image
                          src={`https:${imagePreview.fields.file.url}`}
                          width="1280"
                          height="640"
                          placeholder="blur"
                          blurDataURL={profilePic}
                          alt={name}
                        />
                      </Link>
                    )}
                    <Typography>{description}</Typography>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        )
      })}
    </ul>
)
}

export default Stage
