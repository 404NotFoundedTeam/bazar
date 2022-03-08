import { Badge, Fab, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { changeOpenCart } from "../../../redux/actions/userActions";

const UserIconsHeader = () => {
  const carts = useSelector((state) => state.user.korzina);
  const cart = Object.values(carts);
  return (
    <Box
      sx={{
        fontSize: "16px",
        display: "flex",
        gap: "20px",
        width: "100%",
      }}
    >
      <NavLink to={"/login"}>
        <Fab
          variant="contained"
          size="medium"
          sx={{
            bgcolor: (theme) => theme.palette.info.dark,
            boxShadow: "none !important",
            fontSize: "20px",
          }}
        >
          <FaRegUser />
        </Fab>
      </NavLink>
      <Box
        onClick={() => {
          changeOpenCart(true);
        }}
      >
        <Badge badgeContent={cart.length} color={"error"} max={99}>
          <Fab
            variant="contained"
            size="medium"
            sx={{
              bgcolor: (theme) => theme.palette.info.dark,
              boxShadow: "none !important",
              fontSize: "20px",
            }}
          >
            <FiShoppingBag />
          </Fab>
        </Badge>
      </Box>
    </Box>
  );
};

export default UserIconsHeader;
