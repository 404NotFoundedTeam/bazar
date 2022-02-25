import { ShoppingBagOutlined } from "@mui/icons-material";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import React from "react";

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  "&": {
    marginBottom: `${theme.spacing(1)} !important`,
    borderLeft: `2px solid transparent`,
    ".MuiListItemIcon-root": {
      minWidth: "40px",
      ".MuiSvgIcon-root": { color: theme.palette.error.main },
    },
  },
  "&:hover": {
    borderLeft: `2px solid ${theme.palette.error.main}`,
  },
}));

function MenuList() {
  return (
    <List>
      <CustomListItemButton>
        <ListItemIcon>
          <ShoppingBagOutlined />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </CustomListItemButton>
    </List>
  );
}

export { MenuList };
