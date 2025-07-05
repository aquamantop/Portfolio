import { useContext } from 'react'
import {
  AppBar,
  Typography,
  Avatar,
  Grid,
  Toolbar,
  IconButton,
  Tooltip,
} from '@mui/material'
import LightMode from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'
import SoftDarkMode from '@mui/icons-material/Brightness6'
import { AppBarSX, LinkMode, AvatarSX, TextSX, SubtitleSX } from '../pages/styles/CustomMui'
import { ColorModeContext } from '../components/CustomTheme'

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
              sx={{ ...AvatarSX }}
              alt="Franco Rampazzo"
              src={props.image}
            />
          </Grid>

          <Grid item>
            <Typography
              sx={{
                ...TextSX,
              }}
              variant="h5"
            >
              Franco Rodrigo Rampazzo
            </Typography>
            <Typography
              sx={{
                ...SubtitleSX,
              }}
              variant="subtitle1"
            >
              Desarrollador Full-Stack
            </Typography>
          </Grid>
        </Grid>

        <Tooltip title="Modo Claro" arrow>
          <IconButton
            sx={{ ...LinkMode }}
            onClick={() => setThemeMode('light')}
          >
            <LightMode />
          </IconButton>
        </Tooltip>

        <Tooltip title="Modo Semi Oscuro" arrow>
          <IconButton
            sx={{ ...LinkMode }}
            onClick={() => setThemeMode('softDark')}
          >
            <SoftDarkMode />
          </IconButton>
        </Tooltip>

        <Tooltip title="Modo Oscuro" arrow>
          <IconButton sx={{ ...LinkMode }} onClick={() => setThemeMode('dark')}>
            <DarkMode />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  )
}

export { Header }
