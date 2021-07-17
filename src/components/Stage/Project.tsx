import Image from 'next/image'
import { Grid, Link, makeStyles, Typography } from '@material-ui/core'

import profilePic from '../../../public/its-a-me.jpg'

const useStyles = makeStyles(({spacing}) => ({
  projectListItem: {
    padding: spacing(2),
    '& img': {
      transition: 'transform 0.5s',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
  },
}))

const Project = ({ name, description, imagePreview, url }) => {
  const { projectListItem } = useStyles()
  return (
    <Grid item className={projectListItem}>
      <Typography variant="h3">{name}</Typography>
      {imagePreview && (
        <Link href={url} target="_blank">
          <Image
            src={`https:${imagePreview.fields.file.url}`}
            width={1280}
            height={640}
            placeholder="blur"
            blurDataURL={profilePic}
            alt={name}
          />
        </Link>
      )}
      <Typography>{description}</Typography>
    </Grid>
  )
}

export default Project
