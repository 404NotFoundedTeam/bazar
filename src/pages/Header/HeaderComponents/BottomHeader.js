import { Box, Container, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";
import Categories from "./Categories";

const BottomHeader = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        paddingY: (theme) => theme.spacing(1),
        boxShadow: (theme) => theme.shadowsHeader.header,
      }}
    >
      <Container
        sx={{
          display: { md: "block", xs: "none" },
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} md={4} lg={3} sx={{ position: "relative" }}>
            <Categories />
          </Grid>
          <Grid item>
            <Box display="flex" gap={3} component={"ul"}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/salepage">Sale</NavLink>
              </li>
              <li>
                <NavLink to="/user-dashboard">User dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/vendor-dashboard">Vendor dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/allVendor">All Vendors</NavLink>
              </li>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BottomHeader;
