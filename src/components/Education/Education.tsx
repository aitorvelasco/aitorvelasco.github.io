import Image from 'next/image'
import { Box, Grid, Typography } from '@material-ui/core'

import { schools } from '../../data'

const Education = () => {
  return (
    <>
      <Typography variant="h2">Educación</Typography>
      <Grid container justifyContent="space-around">
        {schools.map((school) => {
          const { site, logo, time, description } = school
          return (
            <Box textAlign="center" my={2} key={site}>
              <Grid container direction="column">
                <Typography variant="h3">{site}</Typography>
                <Typography variant="caption" color="textSecondary">
                  {time}
                </Typography>
              </Grid>
              <Image
                src={logo}
                width={100}
                height={100}
                placeholder="blur"
                alt={site}
              />
              <Typography>{description}</Typography>
            </Box>
          )
        })}
      </Grid>
    </>
  )
}

export default Education
