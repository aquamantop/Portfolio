import React from 'react'
import { Typography } from '@mui/material'

const Home = () => {
  return (
    <div>
      <div>
        <Typography variant="h5">Información Personal</Typography>
        <Typography variant="body1">
          Contenido de la información personal
        </Typography>
      </div>

      <div>
        <Typography variant="h5">Formación Académica</Typography>
        <Typography variant="body1">
          Contenido de la formación académica
        </Typography>
      </div>

      <div>
        <Typography variant="h5">Tecnologías y Herramientas</Typography>
        <Typography variant="body1">
          Contenido de las tecnologías y herramientas
        </Typography>
      </div>
    </div>
  )
}

export default Home
