import React from "react";
import { AppBar, Typography, Avatar, Grid } from "@mui/material";

const Header = (props) => {
  return (
    <AppBar
      sx={{
        position: "unset",
        top: "auto",
        bottom: 0,
        background: "var(--teal)",
      }}
    >
      <Grid container alignItems='center'>
        <Grid item>
          <Avatar
            sx={{
              bgcolor: "#ff7300",
              width: 90,
              height: 90,
              mr: 2,
              my: 1,
            }}
            alt='Franco Rampazzo'
            src={props.image}
          />
        </Grid>
        <Grid item>
          <Typography
            sx={{
              color: "#000000",
            }}
            variant="h5"
          >
            Franco Rodrigo Rampazzo
          </Typography>

          <Typography
            sx={{
              alignContent: "center",
              color: "#ffffff",
            }}
            variant="subtitle1"
          >
            Full-Stack Developer
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
