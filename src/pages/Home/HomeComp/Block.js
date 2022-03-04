import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  IconButton,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BiCaretRight } from "react-icons/bi";
import { IconBase } from "react-icons/lib";

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
        <Link
          href={link}
          color="primary.light"
          display="flex"
          alignItems={"center"}
          underline="none"
          fontSize={"16px !important"}
        >
          View all <BiCaretRight style={{ marginLeft: "10px" }} />
        </Link>
      </Box>
      <Box mt={3}>{children}</Box>
    </Box>
  );
};

export default HomeBlock;
