import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { IconButton, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BiCaretRight } from "react-icons/bi";
import { IconBase } from "react-icons/lib";
import { NavLink } from "react-router-dom";

const HomeBlock = ({ title, icon, link, children }) => {
  return (
    <Box sx={{ py: 7 }}>
      <Box display="flex" justifyContent={"space-between"} alignItems="center">
        <Box display={"flex"} alignItems="center">
          <IconButton size="lg" color="error">
            {icon}
          </IconButton>
          <Typography component="h3" variant="h5" fontWeight={"bold"}>
            {title}
          </Typography>
        </Box>
        <Typography color="primary.light">
          <NavLink
            to={link}
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "16px !important",
            }}
          >
            View all <BiCaretRight style={{ marginLeft: "10px" }} />
          </NavLink>
        </Typography>
      </Box>
      <Box mt={3}>{children}</Box>
    </Box>
  );
};

export default HomeBlock;
