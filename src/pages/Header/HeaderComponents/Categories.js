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
  ListItemButton,
} from "@mui/material";

import { BiCategory } from "react-icons/bi";
import { FaAccusoft } from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const Categories = ({ variant = "big" }) => {
  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
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
          <List
            component="nav"
            aria-label="main mailbox folders"
            sx={{
              "& .Mui-selected": {
                // bgcolor: (theme) => theme.palette.error.light,
                color: (theme) => theme.palette.error.main,
              },
            }}
          >
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemText primary="Inbox" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </List>
        </Box>
      </Zoom>
    </>
  );
};

export default Categories;
