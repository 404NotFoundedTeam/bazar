import { ShoppingBagOutlined } from "@mui/icons-material";
import { Grow, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { changeOpenCart } from "../../redux/actions/userActions";

const AsideCart = ({ open }) => {
  return (
    <>
      <Grow timeout={10} in={open}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            bgcolor: "rgba(0, 0, 0, 0.5)",
            width: "100%",
            height: "100vh",
            zIndex: 99999,
          }}
          onClick={() => {
            changeOpenCart(false);
          }}
        ></Box>
      </Grow>
      <Slide timeout={300} direction="left" in={open}>
        <Box
          sx={{
            width: "100%",
            maxWidth: "400px",
            minHeight: "100vh",
            position: "fixed",
            bgcolor: "#fff",
            top: 0,
            padding: "20px",
            right: 0,
            boxShadow: (theme) => theme.shadowsHeader.card,
            zIndex: 999999,
          }}
        >
          <Box display={"flex"} alignItems="center">
            <ShoppingBagOutlined />
            <Typography ml={2}>0 Item</Typography>
          </Box>
        </Box>
      </Slide>
    </>
  );
};

export default AsideCart;
