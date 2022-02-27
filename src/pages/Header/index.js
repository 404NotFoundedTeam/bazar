import { Box, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import BottomHeader from "./HeaderComponents/BottomHeader";
import MainHeader from "./HeaderComponents/MainHeader";
import TopHeader from "./HeaderComponents/TopHeader";

function Header() {
  return (
    <>
      <TopHeader />

      <MainHeader />
      <BottomHeader />
      {/* <Slide
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
            bgcolor: "white",auto
            zIndex: "50",
            boxShadow: (theme) => theme.shadowsHeader.header,
          }}
        >
          <MainHeader />
        </Box>
      </Slide> */}
    </>
  );
}

export default Header;
