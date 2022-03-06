import { ArrowBack } from "@mui/icons-material";
import { Box, Grid, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginContainer = ({ children }) => {
  const navigate = useNavigate();
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
        <Grid item xs={11} sm={8} md={5} lg={4}>
          <Box
            sx={{
              width: "100%",
              borderRadius: 5,
              boxShadow: (theme) => theme.shadowsHeader.card,
              padding: "30px",
            }}
          >
            {children}
            <Box sx={{ position: "absolute", top: "20px", left: "20px" }}>
              <IconButton onClick={() => navigate("../")}>
                <ArrowBack />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginContainer;
