import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

/******************************** */
/*  Cambiar color del background */
/******************************* */
export const BackgroundSX = {
  backgroundColor: 'background',
}

/********************************************* */
/*  Estilos para titulo y subtitulo del header */
/********************************************* */
export const TitleSX = {
  color: 'text.title',
}

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
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: '70vw',
  margin: '0 auto',
}

export const ProjectStyle = {
  marginBottom: '20px',
  border: '1px solid text.ligth',
  padding: '20px',
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  flexWrap: 'wrap',
}

export const ImagePortfolio = {
  width: '100%',
  marginBottom: '10px',
}

export const ButtonStyle = {
  display: 'flex',
  height: '3rem',
  justifyContent: 'center',
  mr: '10px',
  textAlign: 'center',
  gap: '20px',
  backgroundColor: 'background.button',
  borderColor: 'complement.main',
  fontWeight: 700,
  borderWidth: '2px',
  borderStyle: 'solid',
  color: 'complement.main',
  '&:hover': {
    backgroundColor: 'secondary.main',
    color: 'text.title',
  },
}

export const CustomButton = ({ buttonText, href }) => {
  return (
    <Button
      variant="contained"
      component={Link}
      to={href}
      sx={{ ...ButtonStyle }}
      target="_blank"
    >
      {buttonText}
    </Button>
  )
}

/******************************************************** */
/*  Estilos para Tabs (cambiar seccion inicio y portfolio */
/******************************************************** */
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