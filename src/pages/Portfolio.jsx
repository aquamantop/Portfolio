import { Box, Typography, Modal } from '@mui/material'
import { useState } from 'react'
import {
  PortfolioStyleMobile,
  PortfolioStyle,
  ProjectStyle,
  CustomButton,
  TextSX,
  SubtitleSX,
  ButtonContainer,
  BoxImagesContainer,
  ImageSX,
  ModalSX,
} from './styles/CustomMui'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ProyectsData } from '../data/Data'
import CarouselComponent from '../components/Carousel'

const projects = ProyectsData

const Portfolio = () => {
  const isMobile = useMediaQuery('(max-width:768px)')
  const [openModals, setOpenModals] = useState(
    Array(projects.length).fill(false),
  )

  const handleOpenModal = (index) => {
    const newOpenModals = [...openModals]
    newOpenModals[index] = true
    setOpenModals(newOpenModals)
  }

  const handleCloseModal = (index) => {
    const newOpenModals = [...openModals]
    newOpenModals[index] = false
    setOpenModals(newOpenModals)
  }

  return (
    <Box sx={isMobile ? { ...PortfolioStyleMobile } : { ...PortfolioStyle }}>
      {projects.map((p) => (
        <Box
          key={p.id}
          sx={{
            ...ProjectStyle,
          }}
        >
          <Typography
            variant="h6"
            sx={{ ...SubtitleSX, textDecoration: 'underline' }}
          >
            {p.titulo}
          </Typography>

          <Box sx={{ ...BoxImagesContainer }}>
            <img
              style={{ ...ImageSX }}
              src={p.images[0].src}
              alt={p.images[0].alt}
              onClick={() => handleOpenModal(p.id - 1)}
            />
          </Box>

          <Typography mt={2} variant="body2" sx={{ ...TextSX }}>
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

          <Modal
            sx={{ ...ModalSX }}
            open={openModals[p.id - 1]}
            onClose={() => handleCloseModal(p.id - 1)}
          >
            <Box>
              <CarouselComponent images={p.images} />
            </Box>
          </Modal>
        </Box>
      ))}
    </Box>
  )
}

export default Portfolio
