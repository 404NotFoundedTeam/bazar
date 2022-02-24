import { Badge, Fab, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const UserIconsHeader = () => {
  return (
    <Box
      sx={{
        fontSize: "16px",
        display: "flex",
        gap: "20px",
        width: "100%",
      }}
    >
      <Link to={"/user"}>
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
      </Link>
      <Link to={"/card"}>
        <Badge badgeContent={124} color={"error"} max={99}>
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
      </Link>
    </Box>
  );
};

export default UserIconsHeader;
