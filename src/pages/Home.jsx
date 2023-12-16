import React from 'react'
import { Box, Typography } from '@mui/material'

const Home = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h5">Información Personal</Typography>
        <Typography variant="body1">
          Contenido de la información personal
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5">Formación Académica</Typography>
        <Typography variant="body1">
          Contenido de la formación académica
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5">Tecnologías y Herramientas</Typography>
        <Typography variant="body1">
          Contenido de las tecnologías y herramientas
        </Typography>
      </Box>
    </Box>
  )
}

export default Home
