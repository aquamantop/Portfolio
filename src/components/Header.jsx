import React from 'react'
import { AppBar, Typography, Avatar, Grid } from '@mui/material'
import { AppBarSX } from './CustomMui'
import {
  dark,
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
              color: dark,
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
            Full-Stack Developer
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Header
