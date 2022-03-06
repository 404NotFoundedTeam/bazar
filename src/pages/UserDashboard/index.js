import {
  FavoriteBorderOutlined,
  HeadsetMicOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import { Button, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { makeStyles } from "@mui/styles";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { DashboardList } from "../../components/DashboardComponents/UserDashboard";

let dashboardMainData = {
  orders: { text: "Orders", icon: <ShoppingBagOutlined />, link: "orders" },
  wishlist: {
    text: "Wishlist",
    icon: <FavoriteBorderOutlined />,
    link: "wishlist",
    action: {
      text: "Add all to cart",
    },
  },
  support: {
    text: "Support Tickets",
    icon: <HeadsetMicOutlined />,
    link: "support",
  },
};

let accountSettings = {
  "profile-info": {
    text: "Profile Info",
    icon: <PersonIcon />,
    link: "profile-info",
    action: {
      text: "Edit profile",
    },
  },
  addresses: {
    text: "Addresses",
    icon: <LocationOnIcon />,
    link: "addresses",
    action: {
      text: "Add new address",
    },
  },
  "payment-methods": {
    text: "Payment Methods",
    icon: <PaymentIcon />,
    link: "payment-methods",
    action: {
      text: "Add new payment method",
    },
  },
};

const useStyles = makeStyles((theme) => ({
  cover: {
    display: "flex",
    padding: "24px",
    alignItems: "start",
  },
  sidebar: {
    minWidth: "290px",
    boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px 0px !important",
    borderRadius: "8px !important",
  },
  main: {
    padding: "0 24px",
    "& span": { color: theme.palette.error.main },
    width: "100%",
    "& div": {
      boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px 0px !important",
    },
  },
  title: {
    padding: "26px 30px 16px",
  },
  btn: {
    padding: "4px 16px !important",
    fontSize: "12px !important",
    textTransform: "capitalize !important",
  },
}));

export default function UserDashboard(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  let part = !pathname.endsWith("user-dashboard")
    ? pathname.slice(pathname.lastIndexOf("/") + 1)
    : undefined;
  const getTitle = useMemo(
    () => ({
      ...dashboardMainData,
      ...accountSettings,
    }),
    []
  );
  useEffect(() => {
    if (!part) navigate("orders");
  });

  return (
    <div className={classes.cover}>
      <Paper className={classes.sidebar} elevation={0}>
        <Typography className={classes.title} color="textSecondary">
          Dashboard
        </Typography>
        <DashboardList listData={Object.values(dashboardMainData)} />
        <Typography className={classes.title} color="textSecondary">
          Account Settings
        </Typography>
        <DashboardList listData={Object.values(accountSettings)} />
      </Paper>
      <div className={classes.main}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ marginBottom: "20px" }}
        >
          <Typography sx={{ fontSize: "28px" }}>
            <span style={{ marginRight: 10 }}>
              {getTitle[part ? part : "orders"].icon}
            </span>
            {getTitle[part ? part : "orders"].text}
          </Typography>
          {getTitle[part ? part : "orders"]?.action ? (
            <Button className={classes.btn} variant="outlined" color="error">
              {getTitle[part ? part : "orders"]?.action.text}
            </Button>
          ) : (
            false
          )}
        </Stack>
        <Outlet />
      </div>
    </div>
  );
}
