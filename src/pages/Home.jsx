import React from 'react'
import {
  Box,
  Typography,
  Grid,
  List,
  ListItemText,
  ListItemIcon,
  ListItem,
} from '@mui/material'
import { TextSX } from '../components/CustomMui'
import { GrServerCluster } from 'react-icons/gr'
import { BsServer } from 'react-icons/bs'
import { BiSolidDevices } from 'react-icons/bi'
import { MdCloudDone } from 'react-icons/md'

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
            <ListItem
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <ListItemText>CERTIFIED TECH DEVELOPER</ListItemText>
              <ListItemText>
                Digital House | May 2021 - December 2022
              </ListItemText>
              <ListItemText
                sx={{
                  textAlign: 'center',
                }}
              >
                Beca otorgada por Digital House, Mercado Libre y Globant, quien
                en conjunto desarrollaron el programa de la carrera.
              </ListItemText>
            </ListItem>
            <ListItem
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <ListItemText>BACKEND SPECIALIST</ListItemText>
              <ListItemText>
                Digital House | Febrero 2023 - Diciembre 2023
              </ListItemText>
              <ListItemText
                sx={{
                  textAlign: 'center',
                }}
              >
                Continuación del Certified Tech Developer, especializándome en
                el área del backend, aprendiendo desde el desarrollo de
                microservicios con Java (Spring Boot y Spring Cloud) y con Go
                (Gin), la seguridad con IAM (Keycloak)
              </ListItemText>
            </ListItem>
            <ListItem
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <ListItemText>LIC. EN PSICOLOGÍA</ListItemText>
              <ListItemText>
                Universidad de Buenos Aires | 2016 - act.
              </ListItemText>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h5" my={2} mb={3}>
            Tecnologías y Herramientas
          </Typography>
          <List>
            <ListItemIcon sx={{ ...TextSX }}>
              <GrServerCluster />
              <ListItemText sx={{ ml: 1 }} /> Backend:
            </ListItemIcon>
            <ListItemText /> Java
            <ListItemText /> Spring Boot
            <ListItemText /> Go
          </List>

          <List>
            <ListItemIcon sx={{ ...TextSX }}>
              <BiSolidDevices />
              <ListItemText sx={{ ml: 1 }} /> Frontend:
            </ListItemIcon>
            <ListItemText /> HTML/CSS
            <ListItemText /> JavaScript
            <ListItemText /> React
          </List>

          <List>
            <ListItemIcon sx={{ ...TextSX }}>
              <MdCloudDone />
              <ListItemText sx={{ ml: 1 }} /> Infraestructura:
            </ListItemIcon>
            <ListItemText /> AWS
            <ListItemText /> Docker
            <ListItemText /> Github Actions
          </List>

          <List>
            <ListItemIcon sx={{ ...TextSX }}>
              <BsServer />
              <ListItemText sx={{ ml: 1 }} /> Base de datos:
            </ListItemIcon>
            <ListItemText /> MySQL
            <ListItemText /> MongoDB
          </List>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
