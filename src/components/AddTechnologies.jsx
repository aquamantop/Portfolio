import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { TechData } from '../data/Data'
import { TextSX } from '../pages/styles/CustomMui'

const AddTechnologies = () => {
  return TechData.map((tech, index) => (
    <List key={`list-${index}`}>
      <ListItemIcon sx={{ ...TextSX }} key={`icon-${index}`}>
        {tech.icon}
        <ListItemText sx={{ ml: 1 }} key={`category-text-${index}`}>
          {tech.category}:
        </ListItemText>
      </ListItemIcon>
      {tech.items.map((item, subIndex) => (
        <ListItemText key={`item-text-${index}-${subIndex}`}>
          {item}
        </ListItemText>
      ))}
    </List>
  ))
}

export default AddTechnologies
