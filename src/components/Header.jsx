import React from "react";
import { AppBar, Typography, Avatar } from "@mui/material";

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
      <Avatar
        sx={{ 
            bgcolor: "#ff7300",
            width: 90, 
            height: 90
        }}
        alt='Franco Rampazzo'
        src={props.image}
        />
      <Typography
        sx={{
          flexGrow: 1,
          display: "flex",
          fontSize: { xs: 20, sm: 30 },
          color: "black",
        }}
      >
        Franco Rodrigo Rampazzo
      </Typography>
    </AppBar>
  );
};

export default Header;
