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
  color: 'background.dark',
  textDecoration: 'none',
  '&:visited': {
    color: 'background.dark',
  },
  '&:hover': {
    color: 'text.light',
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
}

export const ImagePortfolio = {
  width: '100%',
  marginBottom: '10px',
}

export const CustomButton = ({ buttonText, href }) => {
  return (
    <Button
      variant="contained"
      sx={{
        height: '50px',
        backgroundColor: 'background.paper',
        borderColor: 'secondary.light',
        borderWidth: '2px',
        borderStyle: 'solid',
        color: 'text.light',
        '&:hover': {
          backgroundColor: 'secondary.light',
          color: 'background.dark',
        },
      }}
      component={Link}
      to={href}
    >
      {buttonText}
    </Button>
  )
}

export const ButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '20px',
  backgroundColor: 'background.paper',
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
