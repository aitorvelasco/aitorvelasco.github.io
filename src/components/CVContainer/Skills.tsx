import { Box, makeStyles, Typography } from '@material-ui/core'

import { skills } from '../../data'

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  skillsBox: {
    display: 'grid',
    gridRowGap: spacing(3),
    justifyItems: 'center',
    gridTemplateColumns: 'repeat(2, 1fr)',
    [breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
  skill: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:hover': {
      '&>svg': {
        transform: 'scale(1.2)',
      },
    },
    '&>p': {
      lineHeight: 2.5,
    },
  },
}))

const Skills = () => {
  const { skillsBox, skill } = useStyles()
  return (
    <>
      <Typography paragraph variant="h2">
        Habilidades
      </Typography>
      <Box className={skillsBox} mb={2}>
        {skills.map(({ name, img }) => (
          <Box className={skill} key={name}>
            {img}
            <Typography>{name}</Typography>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default Skills
