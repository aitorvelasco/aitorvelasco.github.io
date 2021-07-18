import Image from 'next/image'
import { Grid, Link, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(({ spacing, palette }) => ({
  projectListItem: {
    padding: spacing(2),
    '& img': {
      transition: 'transform 0.5s',
      '&:hover': {
        transform: 'scale(0.9)',
      },
    },
  },
  project: {
    border: `3px solid ${palette.primary.main} !important`,
  }
}))

const Project = ({ name, description, imagePreview, url }) => {
  const { projectListItem, project } = useStyles()
  return (
    <Grid item className={projectListItem}>
      <Typography variant="h3">{name}</Typography>
      {imagePreview && (
        <Link href={url} target="_blank">
          <Image
            className={project}
            src={imagePreview}
            alt={name}
            width={1280}
            height={640}
            placeholder="blur"
          />
        </Link>
      )}
      <Typography>{description}</Typography>
    </Grid>
  )
}

export default Project
