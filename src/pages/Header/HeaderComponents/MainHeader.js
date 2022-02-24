import {
  Box,
  Container,
  Grid,
} from "@mui/material";
import React from "react";
import HeaderSearch from "./HeaderSearch";
import UserIconsHeader from "./UserIconsHeader";

function MainHeader() {
  
  return (
    <Box
      component={"header"}
      sx={{
        position: "relative",
        paddingY: (theme) => theme.spacing(3),
        zIndex: "30",
      }}
    >
      <Container>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid
            item
            sx={{ display: { xs: "none", md: "block" } }}
            className="logo"
          >
            <img
              src="https://bazar-react.vercel.app/assets/images/logo2.svg"
              alt="logo"
            />
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <HeaderSearch />
          </Grid>
          <Grid item sx={{ display: { xs: "none", md: "block" } }}>
            <UserIconsHeader />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default MainHeader;
