import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Link } from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedinIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <AppBar
      sx={{
        position: "unset",
        top: "auto",
        bottom: 0,
        background: "var(--teal)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            fontSize: { xs: 20, sm: 30 },
            color: "black",
          }}
        >
          Portfolio web || PDF
        </Typography>
        <div>
          <Link target="_blank" href='https://github.com/aquamantop' underline='none'>
          <IconButton>
            <GithubIcon sx={{ color: "black", fontSize: 40 }} />
          </IconButton>
          </Link>
          <Link target="_blank" href='https://www.linkedin.com/in/franco-rampazzo/' underline='none'>
          <IconButton>
            <LinkedinIcon sx={{ color: "black", fontSize: 45 }} />
          </IconButton>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
