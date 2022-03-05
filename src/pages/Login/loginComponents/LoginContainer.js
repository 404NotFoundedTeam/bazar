import { Box, Grid } from "@mui/material";
import React from "react";

const LoginContainer = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflowY: "auto",
        position: "fixed",
        top: 0,
        left: 0,
        bgcolor: "#fff",
        zIndex: "9999999999",
        paddingY: "20px",
      }}
    >
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: "100%" }}
      >
        <Grid item sx={11} sm={8} md={6} lg={4}>
          <Box
            sx={{
              width: "100%",
              borderRadius: 5,
              boxShadow: (theme) => theme.shadowsHeader.card,
              padding: "30px",
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginContainer;
