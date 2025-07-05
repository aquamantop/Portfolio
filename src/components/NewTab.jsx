import React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link, useLocation } from 'react-router-dom'
import { TabsStyleSX, TabSX } from '../pages/styles/CustomMui'

export default function NavTab() {
  const location = useLocation()
  const [value, setValue] = React.useState(location.pathname)

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        sx={{ ...TabsStyleSX }}
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        centered
      >
        <Tab
          sx={{ ...TabSX }}
          component={Link}
          to="/"
          label="Inicio"
          value="/"
        />
        <Tab
          sx={{ ...TabSX }}
          component={Link}
          to="/proyectos"
          label="Proyectos"
          value="/proyectos"
        />
      </Tabs>
    </Box>
  )
}
