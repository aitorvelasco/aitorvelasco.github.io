import { Box, Typography, Link } from '@mui/material'

import { skills, futureSkills } from '../../data'

export default function Skills() {
  return (
    <>
      <Typography variant="h2">Stack</Typography>
      <Typography mb={4}>
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
      <Typography mb={4}>
        Estoy empezando a incorporar a mi stack estas otras herramientas:
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
