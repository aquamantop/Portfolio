import React, { useContext } from 'react'
import {
  AppBar,
  Typography,
  Avatar,
  Grid,
  Toolbar,
  IconButton,
} from '@mui/material'
import LightMode from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'
import SoftDarkMode from '@mui/icons-material/Brightness6'
import { AppBarSX, LinkMode, AvatarSX, TitleSX, SubtitleSX } from './CustomMui'
import { ColorModeContext } from '../components/CustomTheme'; 

const Header = (props) => {
  const { setThemeMode } = useContext(ColorModeContext)

  return (
    <AppBar
      sx={{
        ...AppBarSX,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Grid container alignItems="center">
          <Grid item>
            <Avatar
              sx={{...AvatarSX}}
              alt="Franco Rampazzo"
              src={props.image}
            />
          </Grid>

          <Grid item>
            <Typography
              sx={{
                ...TitleSX
              }}
              variant="h5"
            >
              Franco Rodrigo Rampazzo
            </Typography>
            <Typography
              sx={{
                ...SubtitleSX
              }}
              variant="subtitle1"
            >
              Desarrollador Full-Stack 
            </Typography>
          </Grid>
        </Grid>

        <IconButton sx={{ ...LinkMode }} onClick={() => setThemeMode('light')}>
          <LightMode />
        </IconButton>
        <IconButton
          sx={{ ...LinkMode }}
          onClick={() => setThemeMode('softDark')}
        >
          <SoftDarkMode />
        </IconButton>
        <IconButton sx={{ ...LinkMode }} onClick={() => setThemeMode('dark')}>
          <DarkMode />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export { Header }
