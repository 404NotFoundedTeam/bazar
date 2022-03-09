import {
  FavoriteBorderOutlined,
  HeadsetMicOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
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
    padding: "0 0 50px",
    "& span": { color: theme.palette.error.main },
    width: "100%",
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
  let dashboardMainData = {
    orders: { text: "Orders", icon: <ShoppingBagOutlined />, link: "orders" },
    // wishlist: {
    //   text: "Wishlist",
    //   icon: <FavoriteBorderOutlined />,
    //   link: "wishlist",
    //   action: {
    //     text: "Add all to cart",
    //   },
    // },
  };
  let accountSettings = {
    "profile-info": {
      text: "Profile Info",
      icon: <PersonIcon />,
      link: "profile-info",
      action: {
        text: "Edit profile",
        func: () => navigate("/user-dashboard/edit-profile"),
      },
    },
    "payment-methods": {
      text: "Payment Methods",
      icon: <PaymentIcon />,
      link: "payment-methods",
      action: {
        text: "Add new payment method",
        func: () => navigate("/user-dashboard/add-method"),
      },
    },
  };
  const location = useLocation();
  const pathname = location.pathname;
  let part = !pathname.endsWith("user-dashboard")
    ? pathname.slice(pathname.lastIndexOf("/") + 1)
    : undefined;
  const getTitle = useMemo(
    () => ({
      ...dashboardMainData,
      ...accountSettings,
      "order-details": {
        text: "Order details",
        icon: <ShoppingBagOutlined />,
        link: "order-details",
        action: {
          text: "Back to orders",
          func: () => navigate("/user-dashboard/orders"),
        },
      },
      "add-method": {
        text: "Add Method",
        icon: <PaymentIcon />,
        link: "add-method",
        action: {
          text: "Back to method list",
          func: () => navigate("/user-dashboard/payment-methods"),
        },
      },
      "edit-method": {
        text: "Edit Method",
        icon: <PaymentIcon />,
        link: "Edit-method",
        action: {
          text: "Back to method list",
          func: () => navigate("/user-dashboard/payment-methods"),
        },
      },
      "edit-profile": {
        text: "Edit profile",
        icon: <PersonIcon />,
        link: "Edit-method",
        action: {
          text: "Back to method list",
          func: () => navigate("/user-dashboard/profile-info"),
        },
      },
    }),
    []
  );
  useEffect(() => {
    if (!part) navigate("orders");
  });

  return (
    <div style={{ padding: "60px 24px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
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
        </Grid>
        <Grid item xs={12} lg={9}>
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
                <Button
                  className={classes.btn}
                  variant="outlined"
                  color="error"
                  onClick={getTitle[part ? part : "orders"]?.action.func}
                >
                  {getTitle[part ? part : "orders"]?.action.text}
                </Button>
              ) : (
                false
              )}
            </Stack>
            <Outlet />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
