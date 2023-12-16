import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export const AppBarSX = {
  position: 'unset',
  top: 'auto',
  bottom: 0,
  backgroundColor: 'primary.main',
}

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
      sx={{...ButtonStyle}}
      target='_blank'
    >
      {buttonText}
    </Button>
  )
}