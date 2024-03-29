import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

/******************************** */
/*  Cambiar color del background */
/******************************* */
export const BackgroundSX = {
  backgroundColor: 'background',
}

/********************************************* */
/*  Estilos para subtitulo del header */
/********************************************* */
export const SubtitleSX = {
  alignContent: 'center',
  color: 'complement.main',
}

/******************* */
/*  Color del texto */
/****************** */
export const TextSX = {
  color: 'text.main',
}

/******************************* */
/*  Estilos avatar en el header */
/****************************** */
export const AvatarSX = {
  bgcolor: 'warning.main',
  width: 90,
  height: 90,
  mx: 2,
  my: 1,
}

/************************************************** */
/*  Estilos compartidos de barra de header y footer */
/************************************************** */
export const AppBarSX = {
  position: 'unset',
  top: 'auto',
  bottom: 0,
  backgroundColor: 'primary.main',
}

/**************************************** */
/*  Estilos para iconos de cambio de tema */
/**************************************** */
export const LinkMode = {
  fontSize: 40,
  color: 'text.main',
  '&:hover': {
    color: 'text.title',
  },
}

/**************************************** */
/*  Estilos para link e iconos del footer */
/**************************************** */
export const LinkFooter = {
  fontSize: 40,
  color: 'complement.main',
  textDecoration: 'none',
  '&:visited': {
    color: 'complement.main',
  },
  '&:hover': {
    color: 'text.title',
  },
  '&:actived': {
    color: 'text.main',
  },
}

/************************************************* */
/*  Estilos y estructura para seccion de portflio  */
/************************************************ */
export const PortfolioStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  maxWidth: '100%',
  alignItems: 'center',
  textAlign: 'center',
}
export const PortfolioStyleMobile = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  alignItems: 'center',
  textAlign: 'center',
}

export const ProjectStyle = {
  display: 'grid',
  gridTemplateRows: 'auto auto 2fr auto',
  marginBottom: '20px',
  border: '1px solid text.ligth',
  padding: '20px',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
}

export const ButtonStyle = {
  height: '3rem',
  mb: '1rem',
  mr: '10px',
  textAlign: 'center',
  color: 'complement.main',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: 'complement.main',
  backgroundColor: 'background.button',
  '&:hover': {
    backgroundColor: 'secondary.main',
    color: 'text.title',
  },
}

export const ButtonContainer = {
  justifyContent: 'center',
  gap: '20px',
  marginTop: '2vh',
}

export const CustomButton = ({ buttonText, href, disabled }) => {
  return (
    <Button
      variant="contained"
      component={Link}
      to={href}
      sx={{ ...ButtonStyle }}
      target="_blank"
      disabled={disabled}
    >
      {buttonText}
    </Button>
  )
}

export const BoxImagesContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export const ImageSX = {
  width: '100%',
  height: '100%',
  cursor: 'pointer',
}

/********************************************************* */
/*  Estilos para Tabs (cambiar seccion inicio y portfolio) */
/********************************************************* */
export const TabsStyleSX = {
  backgroundColor: 'background.button',
}

export const TabSX = {
  color: 'text.main',
  '&.Mui-selected': {
    color: 'complement.main',
    backgroundColor: 'primary.main',
  },
  '&:hover': {
    color: 'text.title',
    backgroundColor: 'secondary.main',
  },
}

/*********** */
/* Carousel */
/********** */
export const ModalSX = {
  position: 'absolute',
  top: '5%',
  left: '10%',
  width: '80%',
}

export const ImagesCarousel = {
  width: "100%",
  height: "100%"
}
