import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { BiCategory, BiHome, BiShoppingBag, BiUser } from "react-icons/bi";

const Bottom = () => {
  const [value, setValue] = useState(0);
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        zIndex: "50",
        bottom: "0",
        left: "0",
        bgcolor: "#fff",
        display: { xs: "block", md: "none" },
      }}
    >
      <Container>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            "& .Mui-selected ": {
              color: (theme) => theme.palette.error.main + " !important",
            },
          }}
        >
          <BottomNavigationAction label="Home" value="home" icon={<BiHome />} />
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
      </Container>
    </Box>
  );
};

export default Bottom;
