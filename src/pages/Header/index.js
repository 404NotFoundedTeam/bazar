import { Box, Slide } from "@mui/material";
import React, { useState } from "react";
import Bottom from "./HeaderComponents/Bottom";
import BottomHeader from "./HeaderComponents/BottomHeader";
import MainHeader from "./HeaderComponents/MainHeader";
import TopHeader from "./HeaderComponents/TopHeader";

function Header() {
  return (
    <Box>
      <TopHeader />
      <MainHeader />
      <BottomHeader />
      <Bottom />
    </Box>
  );
}

export default Header;
