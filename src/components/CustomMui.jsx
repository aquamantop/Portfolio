export const LinkFooter = {
  color: '#000',
  textDecoration: 'none',
  '&:visited': {
    color: '#000',
  },
  '&:hover': {
    color: 'var(--light-gray)',
  },
  '&:actived': {
    color: '#ffff',
  },
}

export const LinkPortfolio = {
  color: 'var(--light-gray)',
  textDecoration: 'none',
  '&:visited': {
    color: 'var(--light-gray)',
  },
  '&:hover': {
    color: 'var(--light-teal)',
  },
  '&:actived': {
    color: '#000',
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
  border: '1px solid var(--light-gray)',
  padding: '20px',
  width: '100%',
  boxSizing: 'border-box',
}

export const ButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
}

export const ImagePortfolio = {
  width: '100%',
  marginBottom: '10px',
}
