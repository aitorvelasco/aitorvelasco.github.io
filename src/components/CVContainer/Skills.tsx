import { Box, Typography } from '@mui/material'

import { skills } from '../../data'

export default function Skills () {
  return (
    <>
      <Typography variant="h2">
        Habilidades
      </Typography>
      <Box 
        display="grid" 
        justifyItems="center" 
        gridTemplateColumns={{xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }}
        mb={2}
        sx={{ gridRowGap: 24}}
      >
        {skills.map(({ name, img }) => (
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
            {img}
            <Typography lineHeight={2.5}>{name}</Typography>
          </Box>
        ))}
      </Box>
    </>
  )
}
