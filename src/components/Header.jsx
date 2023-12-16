import React from 'react'
import { AppBar, Typography, Avatar, Grid } from '@mui/material'
import { AppBarSX } from './CustomMui'
import {
  titles,
  complement,
  warning,
} from '../pages/styles/Color'

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
              bgcolor: warning,
              width: 90,
              height: 90,
              mx: 2,
              my: 1,
            }}
            alt="Franco Rampazzo"
            src={props.image}
          />
        </Grid>
        <Grid item>
          <Typography
            sx={{
              color: titles,
            }}
            variant="h5"
          >
            Franco Rodrigo Rampazzo
          </Typography>

          <Typography
            sx={{
              alignContent: 'center',
              color: complement,
            }}
            variant="subtitle1"
          >
            Desarrollador Full-Stack Java || React || MySQL || AWS
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Header
