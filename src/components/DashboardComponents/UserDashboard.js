import {
  ArrowRight,
  ArrowRightAlt,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import {
  Avatar,
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
import PaymentIcon from "@mui/icons-material/Payment";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
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
      "& .MuiSvgIcon-root": {
        color: theme.palette.error.main,
      },
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
    margin: "0 0 10px",
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
    textTransform: "capitalize !important",
  },
  addressBox: {
    "& div": {
      boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px 0px",
      borderRadius: 8,
      padding: "14px 18px",
      marginBottom: "16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      gap: "10px",
      "& p": {
        width: "100%",
        fontWeight: 100,
        margin: 0,
        textAlign: "center",
      },
      "& p:last-child": { width: "50%" },
      "& p:first-child": { width: "50%" },
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
  const classes = useStyles();
  const [currentOrders, setCurrentOrders] = useState([]);
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
    <div>
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
  const classes = useStyles();
  const userData = [
    {
      firstName: "John",
      lastName: "Simth",
      email: "john@gmail.com",
      phone: "998 99 8979883",
      birthDate: new Date(),
    },
  ];
  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
        <Paper
          sx={{
            padding: "20px",
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                sx={{ width: 56, height: 56 }}
              />
              <div>
                <Typography fontWeight="bold">John Smith</Typography>
                <Typography fontSize={14} color="textSecondary">
                  Balance: $500
                </Typography>
              </div>
            </Stack>
            <Typography color="textSecondary">Silver User</Typography>
          </Stack>
        </Paper>
        <Paper sx={{ padding: "20px", width: "13%" }}>
          <Typography variant="h6" textAlign={"center"} color="error.main">
            16
          </Typography>
          <Typography color="textSecondary" textAlign="center">
            All Orders
          </Typography>
        </Paper>
        <Paper sx={{ padding: "20px", width: "13%" }}>
          <Typography variant="h6" textAlign={"center"} color="error.main">
            02
          </Typography>
          <Typography color="textSecondary" textAlign="center">
            Awaiting Payments
          </Typography>
        </Paper>
        <Paper sx={{ padding: "20px", width: "13%" }}>
          <Typography variant="h6" textAlign={"center"} color="error.main">
            16
          </Typography>
          <Typography color="textSecondary" textAlign="center">
            Awaiting Shipment
          </Typography>
        </Paper>
        <Paper sx={{ padding: "20px", width: "13%" }}>
          <Typography variant="h6" textAlign={"center"} color="error.main">
            16
          </Typography>
          <Typography color="textSecondary" textAlign="center">
            Awaiting Delivery
          </Typography>
        </Paper>
      </Stack>
      <Paper sx={{ mt: 4, padding: "24px" }}>
        <Stack direction="row">
          <Typography sx={{ width: "100%", color: "gray" }}>
            First Name
          </Typography>
          <Typography sx={{ width: "100%", color: "gray" }}>
            Last Name
          </Typography>
          <Typography sx={{ width: "100%", color: "gray" }}>Email</Typography>
          <Typography sx={{ width: "100%", color: "gray" }}>Phone</Typography>
          <Typography sx={{ width: "100%", color: "gray" }}>
            Birth Date
          </Typography>
        </Stack>
        <div>
          {userData.map((data) => {
            return (
              <Link to="/order-details">
                <Stack direction="row">
                  <Typography sx={{ width: "100%" }}>
                    {data.firstName}
                  </Typography>
                  <Typography sx={{ width: "100%" }}>
                    {data.lastName}
                  </Typography>
                  <Typography sx={{ width: "100%" }}>{data.email}</Typography>
                  <Typography sx={{ width: "100%" }}>{data.phone}</Typography>
                  <Typography sx={{ width: "100%" }}>
                    {data.birthDate.toDateString()}
                  </Typography>
                </Stack>
              </Link>
            );
          })}
        </div>
      </Paper>
    </div>
  );
}
function UserAddress() {
  const classes = useStyles();
  const orders = [
    {
      fullName: "John Smith",
      address: "777 Brockton Avenue, Abington MA 2351",
      phone: "1927987987498",
      action: "delete",
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
      <div className={classes.addressBox}>
        {presentOrders.map((order) => {
          return (
            <Paper elevation={1}>
              <Typography>{order.fullName}</Typography>
              <Typography>{order.address}</Typography>
              <Typography>{order.phone}</Typography>
              <Typography>
                <IconButton aria-label="delete">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Typography>
            </Paper>
          );
        })}
      </div>
    </div>
  );
}
function UserPayment() {
  const classes = useStyles();
  const orders = [
    {
      icon: <PaymentIcon />,
      fullName: "John Smith",
      cardNumber: "1234 4564 9878 1299",
      date: new Date(),
    },
    {
      icon: <PaymentIcon />,
      fullName: "John Smith",
      cardNumber: "1234 4564 9878 1299",
      date: new Date(),
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
      <div className={classes.addressBox}>
        {presentOrders.map((order) => {
          return (
            <Paper elevation={1}>
              <Typography>
                <span style={{ marginRight: "10px" }}>{order.icon}</span>
                {order.fullName}
              </Typography>
              <Typography>{order.cardNumber}</Typography>
              <Typography>{order.date.toDateString()}</Typography>
              <Typography>
                <IconButton aria-label="delete">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Typography>
            </Paper>
          );
        })}
      </div>
    </div>
  );
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
