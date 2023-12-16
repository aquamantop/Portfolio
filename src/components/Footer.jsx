import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Link, Box } from '@mui/material'
import GithubIcon from '@mui/icons-material/GitHub'
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import { LinkFooter } from "./CustomMui"
import { AppBarSX } from './CustomMui'

const Footer = () => {
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
        <Link
          target="_blank"
          href="https://drive.google.com/file/d/1J8RURLmzWD4ghNEHeZByauPh0_AB1WrI/view"
          sx={{
            ... LinkFooter,
          }}
        >
          <Typography>CV PDF</Typography>
        </Link>

        <Box>
          <Link
            target="_blank"
            href="https://github.com/aquamantop"
            underline="none"
          >
            <IconButton>
              <GithubIcon
                sx={{
                  ...LinkFooter,
                }}
              />
            </IconButton>
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/franco-rampazzo/"
            underline="none"
          >
            <IconButton>
              <LinkedinIcon
                sx={{
                  ...LinkFooter,
                }}
              />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
