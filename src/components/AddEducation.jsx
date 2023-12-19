import React from 'react'
import { EducationData } from '../data/Data'
import { Divider, ListItem, ListItemText } from '@mui/material'

const AddEducation = () => {
  return EducationData.map((item, index) => (
    <React.Fragment key={index}>
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
          {item.title}
        </ListItemText>
        <ListItemText
          sx={{
            textAlign: 'center',
          }}
        >
          {item.institution} | {item.date}
        </ListItemText>
        <ListItemText
          sx={{
            textAlign: 'center',
          }}
        >
          {item.description}
        </ListItemText>
      </ListItem>
      {index < EducationData.length - 1 && <Divider />}
    </React.Fragment>
  ))
}

export default AddEducation