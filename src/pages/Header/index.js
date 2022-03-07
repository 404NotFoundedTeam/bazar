import { Box, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AsideCart from "../cart/AsideCart";
import Bottom from "./HeaderComponents/Bottom";
import BottomHeader from "./HeaderComponents/BottomHeader";
import MainHeader from "./HeaderComponents/MainHeader";
import TopHeader from "./HeaderComponents/TopHeader";

function Header() {
  const openCart = useSelector((state) => state.user.openCart);
  const body = document.querySelector("body");
  useEffect(() => {
    openCart
      ? body.classList.add("open-cart")
      : body.classList.remove("open-cart");
  }, [openCart]);

  return (
    <>
      <TopHeader />
      <MainHeader />
      <BottomHeader />
      <Bottom />
      <AsideCart open={openCart} />
    </>
  );
}

export default Header;
