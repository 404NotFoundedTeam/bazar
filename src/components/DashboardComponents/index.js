import {
  ArrowRight,
  ArrowRightAlt,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import {
  Button,
  Chip,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import MainCard from "../card";
import * as React from "react";
import PropTypes from "prop-types";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

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
  tableHeader: {
    backgroundColor: "transparent !important",
    padding: "0 18px",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    "& p": { width: "100%", fontSize: 18 },
    "& p:last-child": { width: "20%" },
    color: `${theme.palette.text.secondary} !important`,
    margin: "10px 0",
  },
  ordersBox: {
    "& div": {
      boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px 0px",
      borderRadius: 8,
      padding: "14px 18px",
      marginBottom: "16px",
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      "& p": { width: "100%", fontWeight: 100, margin: 0 },
      "& p:last-child": { width: "20%" },
    },
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    padding: "4px 16px !important",
    fontSize: "12px !important",
    backgroundColor: theme.palette.error.light,
    textTransform: "capitalize !important",
  },
}));

function DashboardList({ listData }) {
  const classes = useStyles();
  return (
    <List>
      {listData.map(({ text, icon, link }) => {
        return (
          <NavLink
            key={text}
            state={{ link }}
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
  const classes = useStyles();
  const orders = [
    {
      order_id: "12sdj2",
      status: "pending",
      date: new Date().getUTCDate(),
      total: 340,
    },
    {
      order_id: "12sdj2",
      status: "pending",
      date: new Date().getUTCDate(),
      total: 340,
    },
    {
      order_id: "12sdj2",
      status: "pending",
      date: new Date().getUTCDate(),
      total: 340,
    },
    {
      order_id: "12sdj2",
      status: "pending",
      date: new Date().getUTCDate(),
      total: 340,
    },
    {
      order_id: "12sdj2",
      status: "pending",
      date: new Date().getUTCDate(),
      total: 340,
    },
    {
      order_id: "12sdj2",
      status: "pending",
      date: new Date().getUTCDate(),
      total: 340,
    },
    {
      order_id: "12sdj2",
      status: "pending",
      date: new Date().getUTCDate(),
      total: 340,
    },
    {
      order_id: "12sdj2",
      status: "pending",
      date: new Date().getUTCDate(),
      total: 340,
    },
  ];
  const [currentOrders, setCurrentOrders] = useState(orders);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(5);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const presentOrders = currentOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );
  const pageNumbers = Math.ceil(currentOrders.length / ordersPerPage);
  return (
    <div>
      <Paper className={classes.tableHeader} elevation={0}>
        <Typography>Order #</Typography>
        <Typography>Status</Typography>
        <Typography>Date purchased</Typography>
        <Typography>Total</Typography>
        <Typography></Typography>
      </Paper>
      <div className={classes.ordersBox}>
        {presentOrders.map((order) => {
          return (
            <Link to="/order-details">
              <Paper elevation={1}>
                <Typography>{order.order_id}</Typography>
                <Typography>{order.status}</Typography>
                <Typography>{order.date}</Typography>
                <Typography>${order.total.toFixed(2)}</Typography>
                <Typography color="textSecondary">
                  <ArrowRightAlt />
                </Typography>
              </Paper>
            </Link>
          );
        })}
      </div>
      <Pagination
        className={classes.pagination}
        onChange={(e, page) => setCurrentPage(page)}
        variant="outlined"
        count={pageNumbers}
      ></Pagination>
    </div>
  );
}

function OrderDetails() {
  const classes = useStyles();
  return (
    <div style={{ padding: "24px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">
          <span style={{ marginRight: "14px" }}>
            <ShoppingBagOutlined />
          </span>
          Order Details
        </Typography>
        <Button className={classes.btn} variant="outlined" color="error">
          Order Again
        </Button>
      </Stack>
      <Paper elevation={1} sx={{ marginTop: "20px", padding: "40px 24px" }}>
        <CustomizedSteppers />
      </Paper>
    </div>
  );
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function CustomizedSteppers() {
  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={1}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}

function UserWishlist() {
  const [data, setData] = useState([
    {
      id: nanoid(),
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 2,
      off: 0,
    },
    {
      id: nanoid(),
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 1,
      off: 0,
    },
    {
      id: nanoid(),
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 5,
      off: 30,
    },
    {
      id: nanoid(),
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 5,
      off: 30,
    },
    {
      id: nanoid(),
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 5,
      off: 30,
    },
    {
      id: nanoid(),
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 5,
      off: 30,
    },
    {
      id: nanoid(),
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 5,
      off: 30,
    },
    {
      id: nanoid(),
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 5,
      off: 30,
    },
    {
      id: nanoid(),
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 5,
      off: 30,
    },
  ]);
  const classes = useStyles();
  const [currentOrders, setCurrentOrders] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(8);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const presentOrders = currentOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );
  const pageNumbers = Math.ceil(currentOrders.length / ordersPerPage);
  return (
    <div>
      <Grid container spacing={3}>
        {presentOrders.map((item, index) => (
          <MainCard key={index} data={item} />
        ))}
      </Grid>
      <div>
        <Pagination
          className={classes.pagination}
          onChange={(e, page) => setCurrentPage(page)}
          variant="outlined"
          count={pageNumbers}
          sx={{ mt: 5 }}
        ></Pagination>
      </div>
    </div>
  );
}
function UserSupport() {
  return (
    <div style={{ marginTop: "20px" }}>
      <Paper sx={{ padding: "24px", marginBottom: "20px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <div>
            <Typography>My product is broken. I need refund </Typography>
            <div style={{ marginTop: "10px" }}>
              <Chip label="Chip Filled" sx={{ marginRight: "10px" }} />
              <Chip label="Chip Filled" />
            </div>
          </div>
          <Typography color="textSecondary">
            <ArrowRightAlt />
          </Typography>
        </Stack>
      </Paper>
      <Paper sx={{ padding: "24px", marginBottom: "20px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <div>
            <Typography>My product is broken. I need refund </Typography>
            <div style={{ marginTop: "10px" }}>
              <Chip label="Chip Filled" sx={{ marginRight: "10px" }} />
              <Chip label="Chip Filled" />
            </div>
          </div>
          <Typography color="textSecondary">
            <ArrowRightAlt />
          </Typography>
        </Stack>
      </Paper>
    </div>
  );
}
function UserProfile() {
  return <div></div>;
}
function UserAddress() {
  return <div></div>;
}
function UserPayment() {
  return <div></div>;
}

export {
  DashboardList,
  UserAddress,
  UserOrders,
  UserPayment,
  UserProfile,
  UserSupport,
  UserWishlist,
  OrderDetails,
};
