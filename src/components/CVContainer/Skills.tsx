import { Box, Typography, Link } from '@mui/material'

import { skills } from '../../data'
import { futureSkills } from '../../data/skills.data'

export default function Skills() {
  return (
    <>
      <Typography variant="h2">Habilidades</Typography>
      <Typography paragraph>
        Estas son algunas de las herramientas con las que he trabajado en los
        últimos años:
      </Typography>
      <Box
        display="grid"
        justifyItems="center"
        gridTemplateColumns={{
          xs: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        mb={2}
        sx={{ gridRowGap: 24 }}
      >
        {skills.map(({ name, icon, url }) => (
          <Box
            key={name}
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              '&:hover svg': {
                transform: 'scale(1.2)',
              },
            }}
          >
            <Link href={url} target="_blank">
              {icon}
            </Link>
            <Typography lineHeight={2.5}>{name}</Typography>
          </Box>
        ))}
      </Box>
      <Typography paragraph>
        Estoy empezando a incorporar a mi stack estas otras soluciones:
      </Typography>
      <Box
        display="grid"
        justifyItems="center"
        gridTemplateColumns={{
          xs: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        mb={2}
        sx={{ gridRowGap: 24 }}
      >
        {futureSkills.map(({ name, icon, url }) => (
          <Box
            key={name}
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              '&:hover svg': {
                transform: 'scale(1.2)',
              },
            }}
          >
            <Link href={url} target="_blank">
              {icon}
            </Link>
            <Typography lineHeight={2.5}>{name}</Typography>
          </Box>
        ))}
      </Box>
    </>
  )
}
