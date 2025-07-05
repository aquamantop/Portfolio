import { Box, Typography, Grid, List, Divider } from '@mui/material'
import { TextSX } from './styles/CustomMui'
import AddEducation from '../components/AddEducation'
import AddTechnologies from '../components/AddTechnologies'
import AddExperience from '../components/AddExperience'

const Home = () => {
  return (
    <Box sx={{ ...TextSX }}>
      <Grid container spacing={2} sx={{ textAlign: 'center', mt: 2 }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" mb={3}>
            Información Personal
          </Typography>
          <Typography variant="body1" lineHeight={2}>
            Busco constantemente oportunidades para crecer profesionalmente,
            aplicar y expandir mis habilidades, y contribuir significativamente
            a proyectos emocionantes. Estoy convencido de que mi pasión por la
            tecnología, mi sólido bagaje técnico y mi enfoque proactivo pueden
            aportar de manera valiosa a cualquier proyecto en el que participe.
          </Typography>

          <Divider
            variant="middle"
            sx={{ backgroundColor: 'text.main', mt: 5 }}
          />

          <Typography variant="h5" mb="2px" mt={6}>
            Experiencia Profesional
          </Typography>
          <List>
            <AddExperience />
          </List>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h5">Formación Académica</Typography>
          <List>
            <AddEducation />
          </List>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h5" mb={2}>
            Tecnologías y Herramientas
          </Typography>
          <AddTechnologies />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
