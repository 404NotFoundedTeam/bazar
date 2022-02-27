import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { BiCategory, BiHome, BiShoppingBag, BiUser } from "react-icons/bi";
import { FaAccusoft, FaUserAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FiShoppingBag } from "react-icons/fi";

const Bottom = () => {
  const [value, setValue] = useState(0);
  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: "50",
        bottom: "0",
        left: "0",
        width: "100%",
        bgcolor: "#fff",
        display: { xs: "block", md: "none" },
        padding: "5px",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<BiHome />}
        />
        <BottomNavigationAction
          label="Category"
          value="category"
          icon={<BiCategory />}
        />
        <BottomNavigationAction
          label="Cart"
          value="cart"
          icon={<BiShoppingBag />}
        />
        <BottomNavigationAction
          label="Account"
          value="account"
          icon={<BiUser />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Bottom;
