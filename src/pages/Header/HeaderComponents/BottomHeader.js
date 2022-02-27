import {
  Box,
  Button,
  Container,
  Grid,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import React, { useRef, useState } from "react";
import Categories from "./Categories";

const BottomHeader = () => {
  const menu = useRef();
  return (
    <Box
      sx={{
        paddingY: (theme) => theme.spacing(1),
        boxShadow: (theme) => theme.shadows.header,
      }}
    >
      <Container>
        <Grid container sx={{display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Grid item md={4} lg={3} sx={{ position: "relative",}}>
            <Categories />
          </Grid>
          <Grid item >
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
