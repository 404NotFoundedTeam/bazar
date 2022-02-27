import { Box, Button, Container, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";
import Categories from "./Categories";

const BottomHeader = () => {
  return (
    <Box
      sx={{
        bgcolor:"#fff",
        paddingY: (theme) => theme.spacing(1),
        boxShadow: (theme) => theme.shadowsHeader.header,
      }}
    >
      <Container>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item sx={12} md={4} lg={3} sx={{ position: "relative" }}>
            <Categories />
          </Grid>
          <Grid item>
            <ul>
              <li>
                <NavLink to="/">
                  Home Pages User Account Vendor Account Back to Demos
                </NavLink>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BottomHeader;
