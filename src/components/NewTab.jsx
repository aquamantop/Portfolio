import React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link, useLocation } from 'react-router-dom'
import { styled } from '@mui/system'
import {
  text,
  titles,
  primary,
  secondary,
  complement,
  backgroundBTN,
} from '../pages/styles/Color'

const StyledTabs = styled(Tabs)(() => ({
  backgroundColor: backgroundBTN,
}))

const StyledTab = styled(Tab)(() => ({
  color: text,
  '&.Mui-selected': {
    color: complement,
    backgroundColor: primary,
  },
  '&:hover': {
    color: titles,
    backgroundColor: secondary,
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
