import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export const AppBarSX = {
  position: 'unset',
  top: 'auto',
  bottom: 0,
  backgroundColor: 'secondary.main',
}

export const LinkFooter = {
  fontSize: 40,
  color: 'complement.main',
  textDecoration: 'none',
  '&:visited': {
    color: 'complement.main',
  },
  '&:hover': {
    color: 'background.dark',
  },
  '&:actived': {
    color: 'text.main',
  },
}

export const LinkPortfolio = {
  color: 'text.light',
  textDecoration: 'none',
  '&:visited': {
    color: 'text.ligh',
  },
  '&:hover': {
    color: 'secondary.ligth',
  },
  '&:actived': {
    color: 'background.dark',
  },
}

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
  display: 'flex',         // Agregado para alinear proyectos en dos columnas
  flexWrap: 'wrap',        // Agregado para permitir envolver proyectos a la siguiente fila
}

export const ImagePortfolio = {
  width: '100%',
  marginBottom: '10px',
}

export const CustomButton = ({ buttonText, href }) => {
  return (
    <Button
      variant="contained"
      component={Link}
      to={href}
      sx={{...ButtonStyle}}
    >
      {buttonText}
    </Button>
  )
}

export const ButtonStyle = {
  display: 'flex',
  height: '50px',
  justifyContent: 'center',
  mr: '10px',
  textAlign: 'center',
  gap: '20px',
  backgroundColor: 'background.button',
  borderColor: 'secondary.main',
  fontWeight: 700,
  borderWidth: '2px',
  borderStyle: 'solid',
  color: 'secondary.main',
  '&:hover': {
    backgroundColor: 'secondary.light',
    color: 'background.dark',
  },
}
