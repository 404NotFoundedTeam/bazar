import { ShoppingBagOutlined } from "@mui/icons-material";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  "&": {
    margin: "0 0 12px !important",
    padding: "0 24px",
    borderLeft: `4px solid transparent`,
    ".MuiListItemIcon-root": {
      minWidth: "40px",
    },
  },
  "&:hover": {
    borderLeft: `4px solid ${theme.palette.error.main}`,
    backgroundColor: "transparent",
    color: theme.palette.error.main,
    ".MuiSvgIcon-root": { color: theme.palette.error.main },
  },
}));

const useStyles = makeStyles((theme) => ({
  activeStyle: {
    "& .MuiListItemButton-root": {
      borderLeft: `4px solid ${theme.palette.error.main}`,
      backgroundColor: "transparent",
      color: theme.palette.error.main,
      ".MuiSvgIcon-root": { color: theme.palette.error.main },
    },
  },
}));

function DashboardList({ listData }) {
  const classes = useStyles();
  return (
    <List>
      {listData.map(({ text, icon, link }) => {
        return (
          <NavLink
            to={link}
            className={({ isActive }) =>
              isActive ? classes.activeStyle : undefined
            }
          >
            <CustomListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </CustomListItemButton>
          </NavLink>
        );
      })}
    </List>
  );
}

function UserOrders() {
  return <Typography variant="h5">Orders</Typography>;
}
function UserWishlist() {
  return <Typography variant="h5">Wishlist</Typography>;
}
function UserSupport() {
  return <Typography variant="h5">Support</Typography>;
}
function UserProfile() {
  return <Typography variant="h5">Profile</Typography>;
}
function UserAddress() {
  return <Typography variant="h5">Address</Typography>;
}
function UserPayment() {
  return <Typography variant="h5">Payment</Typography>;
}

export {
  DashboardList,
  UserAddress,
  UserOrders,
  UserPayment,
  UserProfile,
  UserSupport,
  UserWishlist,
};
