import Image from 'next/image'
import { Box, Grid, Typography } from '@material-ui/core'
import ReactMarkdown from 'react-markdown'

import profilePic from '../../../public/its-a-me.jpg'

const Education = ({ schools }) => {
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
                src={`https:${logo.fields.file.url}`}
                width={100}
                height={100}
                placeholder="blur"
                objectFit="contain"
                layout="fixed"
                blurDataURL={profilePic}
                alt={site}
              />
              <Typography component="span">
                {/* eslint-disable-next-line react/no-children-prop */}
                <ReactMarkdown children={description}></ReactMarkdown>
              </Typography>
            </Box>
          )
        })}
      </Grid>
    </>
  )
}

export default Education
