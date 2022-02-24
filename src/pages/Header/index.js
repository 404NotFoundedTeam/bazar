import { Box, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import BottomHeader from "./HeaderComponents/BottomHeader";
import MainHeader from "./HeaderComponents/MainHeader";
import TopHeader from "./HeaderComponents/TopHeader";

function Header() {
  const [scrollClass, setScrollClass] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        setScrollClass(true);
      } else setScrollClass(false);
    };
  }, []);
  return (
    <>
      <TopHeader />
      <MainHeader />
      <BottomHeader />

      <Slide
        in={scrollClass}
        direction="down"
        timeout={300}
        container={document.querySelector("body")}
      >
        <Box
          sx={{
            position: "fixed",
            width: "100%",
            top: "0",
            left: "0",
            bgcolor: "white",
            zIndex: "50",
            boxShadow: (theme) => theme.shadows.header,
          }}
        >
          <MainHeader />
        </Box>
      </Slide>
    </>
  );
}

export default Header;
