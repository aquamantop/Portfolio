import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Link } from '@mui/material'
import GithubIcon from '@mui/icons-material/GitHub'
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import { LinkFooter } from "./CustomMui"

const Footer = () => {
  return (
    <AppBar
      sx={{
        position: 'unset',
        top: 'auto',
        bottom: 0,
        background: 'var(--teal)',
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
            color: '#000',
            textDecoration: 'none',
            '&:visited': {
              color: '#000',
            },
            '&:hover': {
              color: 'var(--light-gray)',
            },
          }}
        >
          <Typography>CV PDF</Typography>
        </Link>

        <div>
          <Link
            target="_blank"
            href="https://github.com/aquamantop"
            underline="none"
          >
            <IconButton>
              <GithubIcon
                sx={{
                  color: 'black',
                  fontSize: 40,
                  color: '#000',
                  textDecoration: 'none',
                  '&:visited': {
                    color: '#000',
                  },
                  '&:hover': {
                    color: 'var(--light-gray)',
                  },
                  '&:actived': {
                    color: '#ffff',
                  },
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
                  fontSize: 45,
                }}
              />
            </IconButton>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
