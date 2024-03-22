import React from 'react'
import { Box, Divider, List, ListItemIcon, ListItemText } from '@mui/material'
import { TechData } from '../data/Data'
import { TextSX } from '../pages/styles/CustomMui'

const AddTechnologies = () => {
  return TechData.map((tech, index) => (
    <List key={tech.id}>
      <Box>
        <ListItemText sx={{ ml: '50px' }} key={`category-text-${index}`}>
          {tech.category}
          <ListItemIcon sx={{ ...TextSX, mx: '10px' }} key={`icon-${index}`}>
            {tech.icon}
          </ListItemIcon>
        </ListItemText>
      </Box>
      {tech.items.map((item, subIndex) => (
        <ListItemText key={`item-text-${index}-${subIndex}`}>
          {item}
        </ListItemText>
      ))}
      {index < TechData.length - 1 && (
        <Divider
          variant="middle"
          sx={{ backgroundColor: 'text.main', mt: 2 }}
        />
      )}
    </List>
  ))
}

export default AddTechnologies
