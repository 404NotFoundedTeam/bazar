import {
  Dashboard,
  FavoriteBorderOutlined,
  HeadsetMicOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import { Button, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { makeStyles } from "@mui/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { DashboardList } from "../../components/DashboardComponents/UserDashboard";

let dashboardMainData = {
  dashboard: {
    text: "Dashboard",
    icon: <Dashboard />,
    link: "dashboard",
  },
  products: {
    text: "Products",
    icon: <AssignmentOutlinedIcon />,
    link: "products",
  },
  "add-product": {
    text: "Add new product",
    icon: <AddchartOutlinedIcon />,
    link: "add-product",
    action: {
      text: "Back to product list",
    },
  },
  orders: {
    text: "Orders",
    icon: <ShoppingCartOutlinedIcon />,
    link: "orders",
  },
  "account-settings": {
    text: "Account settings",
    icon: <SettingsOutlinedIcon />,
    link: "account-settings",
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
    paddingBottom: "24px",
    boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px 0px !important",
    borderRadius: "8px !important",
  },
  main: {
    padding: "0 24px",
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

export default function VendorDashboard(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  let part = !pathname.endsWith("vendor-dashboard")
    ? pathname.slice(pathname.lastIndexOf("/") + 1)
    : undefined;
  const getTitle = useMemo(
    () => ({
      ...dashboardMainData,
    }),
    []
  );
  useEffect(() => {
    if (!part) navigate("dashboard");
  }, []);

  return (
    <div className={classes.cover}>
      <Paper className={classes.sidebar} elevation={0}>
        <DashboardList listData={Object.values(dashboardMainData)} />
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
              {getTitle[part ? part : "dashboard"].icon}
            </span>
            {getTitle[part ? part : "dashboard"].text}
          </Typography>
          {getTitle[part ? part : "dashboard"]?.action ? (
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
