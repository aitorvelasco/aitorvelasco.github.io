import Image from 'next/image'

import { CVInfo } from '../../data'
import { greyPalette } from '../../../styles/theme'

import { Box, Link, Grid, Typography, makeStyles } from '@material-ui/core'

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

const Stage = () => {
  const { stageListItem, projectList, projectListItem } = useStyles()
  return (
    <ul>
      {CVInfo.map((stage) => {
        const { company, logo, time, projects } = stage
        return (
          <Grid container className={stageListItem} key={company}>
            <Typography variant="h4" component="h2">
              {company}
            </Typography>
            {/* <Box position="relative" pl={4}>
              <Image src={`/portfolio/${logo}`} layout="fill" />
            </Box> */}
            <Typography variant="caption" display="block" color="textSecondary">
              {time}
            </Typography>
            <Grid container item className={projectList}>
              {projects.map((project) => {
                const { name, description, image, url } = project
                return (
                  <Grid item className={projectListItem} key={name}>
                    <Typography variant="h5" component="h3">
                      {name}
                    </Typography>
                    {image && (
                      <Link href={url} target="_blank">
                        <Image
                          src={`/portfolio/${image}`}
                          width="1280"
                          height="640"
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
