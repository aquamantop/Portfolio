import React from 'react'
import {
  Box,
  Typography,
  Grid,
  List,
} from '@mui/material'
import { TextSX } from '../components/CustomMui'
import AddEducation from '../components/AddEducation'
import AddTechnologies from '../components/AddTechnologies'

const Home = () => {
  return (
    <Box sx={{ ...TextSX }}>
      <Grid container spacing={2} sx={{ textAlign: 'center' }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" my={2} mb={4}>
            Información Personal
          </Typography>
          <Typography variant="body1" lineHeight={2}>
            Busco constantemente oportunidades para crecer profesionalmente,
            aplicar y expandir mis habilidades, y contribuir significativamente
            a proyectos emocionantes. Estoy convencido de que mi pasión por la
            tecnología, mi sólido bagaje técnico y mi enfoque proactivo pueden
            aportar de manera valiosa a cualquier proyecto en el que participe.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h5" my={2}>
            Formación Académica
          </Typography>
          <List>
            <AddEducation />
          </List>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h5" my={2} mb={3}>
            Tecnologías y Herramientas
          </Typography>
          <AddTechnologies />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
