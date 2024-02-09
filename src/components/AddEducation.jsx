import React from 'react'
import { EducationData } from '../data/Data'
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'

const AddEducation = () => {
  return EducationData.map((item, index) => (
    <List key={index}>
      <ListItem
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ListItemText
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="subtitle1">{item.title}</Typography>
        </ListItemText>
        <ListItemText
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="subtitle1">
            {item.institution} | {item.date}
          </Typography>
        </ListItemText>
        <ListItemText
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="body1">{item.description}</Typography>
        </ListItemText>
      </ListItem>
      {index < EducationData.length - 1 && <Divider variant="middle" sx={{ backgroundColor:"text.main" }} />}
    </List>
  ))
}

export default AddEducation
