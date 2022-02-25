import {
  FavoriteBorderOutlined,
  HeadsetMicOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import { Paper, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Link, Outlet } from "react-router-dom";
import { DashboardList } from "../../components/DashboardComponents";

let dashboardMainData = [
  { text: "Orders", icon: <ShoppingBagOutlined />, link: "orders" },
  {
    text: "Wishlist",
    icon: <FavoriteBorderOutlined />,
    link: "wishlist",
  },
  {
    text: "Support Tickets",
    icon: <HeadsetMicOutlined />,
    link: "support",
  },
];

let accountSettings = [
  {
    text: "Profile Info",
    icon: <PersonIcon />,
    link: "profile-info",
  },
  {
    text: "Addresses",
    icon: <LocationOnIcon />,
    link: "addresses",
  },
  {
    text: "Payment Methods",
    icon: <PaymentIcon />,
    link: "payment-methods",
  },
];

const useStyles = makeStyles((theme) => ({
  cover: {
    display: "flex",
    padding: "24px",
  },
  sidebar: {
    width: "290px",
    paddingBottom: "24px",
  },
  title: {
    padding: "26px 30px 16px",
  },
}));

export default function UserDashboard() {
  const classes = useStyles();
  return (
    <div className={classes.cover}>
      <Paper className={classes.sidebar} elevation={2} rounded={1}>
        <Typography className={classes.title} color="textSecondary">
          Dashboard
        </Typography>
        <DashboardList listData={dashboardMainData} />
        <Typography className={classes.title} color="textSecondary">
          Account Settings
        </Typography>
        <DashboardList listData={accountSettings} />
      </Paper>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
