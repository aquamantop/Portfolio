import React from 'react'
import { AppBar, Typography, Avatar, Grid } from '@mui/material'
import { AppBarSX } from './CustomMui'

const Header = (props) => {
  return (
    <AppBar
      sx={{
        ...AppBarSX,
      }}
    >
      <Grid container alignItems="center">
        <Grid item>
          <Avatar
            sx={{
              bgcolor: 'var(--warning)',
              width: 90,
              height: 90,
              mr: 2,
              my: 1,
            }}
            alt="Franco Rampazzo"
            src={props.image}
          />
        </Grid>
        <Grid item>
          <Typography
            sx={{
              color: 'var(--black)',
            }}
            variant="h5"
          >
            Franco Rodrigo Rampazzo
          </Typography>

          <Typography
            sx={{
              alignContent: 'center',
              color: 'var(--ligth-gray)',
            }}
            variant="subtitle1"
          >
            Full-Stack Developer
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Header
