import { Box, Typography } from '@mui/material'
import React from 'react'
import {
  PortfolioStyleMobile,
  PortfolioStyle,
  ProjectStyle,
  ImagePortfolio,
  CustomButton,
  TextSX,
  SubtitleSX,
  ButtonContainer,
} from './styles/CustomMui'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ProyectsData } from '../data/Data'
import CarouselComponent from '../components/Carousel'

const projects = ProyectsData

const Portfolio = () => {
  const isMobile = useMediaQuery('(max-width:768px)')

  return (
    <section
      style={isMobile ? { ...PortfolioStyleMobile } : { ...PortfolioStyle }}
    >
      {projects.map((p) => (
        <article
          key={p.id}
          style={{
            ...ProjectStyle,
          }}
        >
          <Typography
            variant="h6"
            sx={{ ...SubtitleSX, textDecoration: 'underline', mb: 2 }}
          >
            {p.titulo}
          </Typography>

          <CarouselComponent images={p.images} />

          <Typography variant="body2" sx={{ ...TextSX }}>
            {p.descripcion}
          </Typography>

          <Box sx={{ ...ButtonContainer }}>
            <CustomButton
              buttonText="Repositorio"
              href={p.linkCodigo}
              disabled={p.linkCodigo == null}
            />
            <CustomButton
              buttonText="Página web"
              href={p.linkWeb}
              disabled={p.linkWeb == null}
            />
          </Box>
        </article>
      ))}
    </section>
  )
}

export default Portfolio
