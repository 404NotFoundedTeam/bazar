import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Zoom,
  Button,
  Box,
} from "@mui/material";

import { BiCategory } from "react-icons/bi";
import { FaAccusoft } from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const Categories = ({ variant = "big" }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        sx={{
          width: "100%",
          padding: "8px 16px",
          display: "flex !important",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          boxShadow: "none !important",
          bgcolor: (theme) => theme.palette.info.dark,
        }}
        color="info"
        variant="contained"
        onClick={() => setShow((i) => !i)}
      >
        <Box display="flex" alignItems={"center"}>
          <BiCategory style={{ fontSize: "20px", marginRight: "10px" }} />
          <Typography
            variant="p"
            component={"p"}
            sx={{ textTransform: "capitalize" }}
          >
            {variant === "mini" ? "" : "Categories"}
          </Typography>
        </Box>
        {show ? <FiChevronDown /> : <FiChevronRight />}
      </Button>
      <Zoom in={show} timeout={300}>
        <Box
          sx={{
            position: "absolute",
            top: "50px",
            left: "0",
            width: "100%",
            zIndex: "20 !important",
            bgcolor: "#fff",
            boxShadow: (theme) => theme.shadowsHeader.header,
          }}
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <FaAccusoft />
              </ListItemIcon>
              <ListItemText primary="Single-line item" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FaAccusoft />
              </ListItemIcon>
              <ListItemText primary="Single-line item" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FaAccusoft />
              </ListItemIcon>
              <ListItemText primary="Single-line item" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FaAccusoft />
              </ListItemIcon>
              <ListItemText primary="Single-line item" />
            </ListItem>
          </List>
        </Box>
      </Zoom>
    </>
  );
};

export default Categories;
