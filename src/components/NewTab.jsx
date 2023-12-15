import React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link, useLocation } from 'react-router-dom'
import { styled } from '@mui/system'

const StyledTabs = styled(Tabs)(() => ({
  backgroundColor: 'var(--dark-background)',
}))

const StyledTab = styled(Tab)(() => ({
  color: 'secondary',
  '&.Mui-selected': {
    color: 'var(--dark-background-option)',
    backgroundColor: 'var(--light-teal)',
  },
}))

export default function NavTab() {
  const location = useLocation()
  const [value, setValue] = React.useState(location.pathname)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <StyledTabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        centered
      >
        <StyledTab component={Link} to="/" label="Inicio" value="/" />
        <StyledTab
          component={Link}
          to="/portfolio"
          label="Portfolio"
          value="/portfolio"
        />
      </StyledTabs>
    </Box>
  )
}
