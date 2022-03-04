import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Link, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const HomeBlock = ({ title, icon, link, children }) => {
  return (
    <Box>
      <Box display="flex" justifyContent={"space-between"} alignItems="center">
        <ListItem>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>{title}</ListItemText>
        </ListItem>
        <Link to={link}>
          View all <ChevronRight />
        </Link>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default HomeBlock;
