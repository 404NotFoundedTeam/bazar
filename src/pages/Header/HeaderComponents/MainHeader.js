import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";
import UserIconsHeader from "./UserIconsHeader";

function MainHeader() {
  const [scrollClass, setScrollClass] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        setScrollClass(true);
      } else setScrollClass(false);
    };
  }, []);
  const navigate = useNavigate();

  return (
    <Box
      className={scrollClass ? "stickyH" : ""}
      component={"header"}
      sx={{
        "&.stickyH": {
          position: "sticky",
          top: 0,
          left: 0,
          boxShadow: (theme) => theme.shadows.header,
        },
        position: "relative",
        paddingY: (theme) => theme.spacing(2),
        zIndex: "9999",
        bgcolor: "#fff",
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
            component={"button"}
            onClick={() => navigate("/")}
            item
            sx={{ display: { xs: "none", md: "block" } }}
            className="logo"
          >
            <img
              className="w-[100px]"
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
