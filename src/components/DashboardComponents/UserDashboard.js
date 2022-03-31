import { ArrowRightAlt } from "@mui/icons-material";
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
  TextField,
  Typography,
} from "@mui/material";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
import PaymentIcon from "@mui/icons-material/Payment";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import * as React from "react";
import PropTypes from "prop-types";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InputIcon from "@mui/icons-material/Input";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import {
  deleteMethod,
  addMethod,
  updateMethod,
  updateUserProfile,
  cancelOrder,
} from "../../redux/actions/userActions";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import TransitionAlerts from "./VendorDashboard";

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
      borderRadius: 8,
      padding: "10px",
      "& p": {
        width: "100%",
        fontWeight: 100,
        margin: 0,
        textAlign: "center",
      },
    },
  },
}));

function DashboardList({ listData }) {
  const classes = useStyles();
  return (
    <List
      sx={{
        display: { xs: "flex", lg: "block" },
        flexWrap: "wrap",
        justifyContent: { md: "flex-start" },
        width: { xs: "100%" },
      }}
    >
      {listData.map(({ text, icon, link }) => {
        return (
          <NavLink
            key={text}
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
  const orders = useSelector((state) => state.orders);
  const [currentOrders, setCurrentOrders] = useState(Object.values(orders));
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
        <Typography
          sx={{ display: { xs: "none !important", sm: "flex !important" } }}
        >
          Order #
        </Typography>
        <Typography>Status</Typography>
        <Typography>Date</Typography>
        <Typography>Total</Typography>
        <Typography></Typography>
      </Paper>
      <div className={classes.ordersBox}>
        {presentOrders.map((order) => {
          return (
            <Link to="../order-details" state={`${order.id}`}>
              <Paper elevation={1}>
                <Typography
                  sx={{
                    display: { xs: "none !important", sm: "flex !important" },
                  }}
                >
                  {order.id}
                </Typography>
                <Typography>{order.status}</Typography>
                <Typography>{order?.date?.toLocaleDateString()}</Typography>
                <Typography>${order.price}</Typography>
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
  const location = useLocation();
  const orderId = location.state;
  const orders = useSelector((state) => state.orders);
  const orderData = orders[orderId];
  const products = useSelector((state) => state.products);
  const filteredProducts = [];
  Object.entries(orderData.products).map(([productId, amount]) =>
    filteredProducts.push([products[productId], amount])
  );

  const status =
    orderData.status == "pending" ? 1 : orderData.status == "delivered" ? 2 : 0;
  return (
    <div>
      <Paper elevation={1} sx={{ marginTop: "20px", padding: "40px 24px" }}>
        <CustomizedSteppers step={status} />
        <Paper sx={{ margin: "20px 0 50px" }} elevation={0}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              "& p": { minWidth: "30%", textAlign: "center" },
            }}
            spacing={2}
          >
            <p>Order ID: {orderData.id}</p>
            <p>Date: {orderData.date.toLocaleDateString()}</p>
            <p>Status: {orderData.status}</p>
          </Stack>
        </Paper>
        {filteredProducts &&
          filteredProducts.map(([product, amount]) => {
            return (
              <Paper sx={{ padding: "10px", marginTop: "15px" }} elevation={0}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <img
                      src={product.productsImg}
                      alt=""
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                    <span>{product.name}</span>
                    <span>x</span>
                    <span>{amount}</span>
                    <span>=</span>
                    <span>${amount * product.price}</span>
                  </Stack>
                </Stack>
              </Paper>
            );
          })}
        <Typography
          className="!text-[20px] font-bold"
          sx={{ padding: "10px 0", marginTop: "10px" }}
        >
          Address: {orderData.address}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          flexWrap="wrap"
          justifyContent={"space-between"}
        >
          <h1 class="text-[22px] font-bold mt-4">Total: ${orderData.price}</h1>
          {orderData.status == "pending" ? (
            <Button
              variant="contained"
              color="error"
              onClick={() => cancelOrder({ orderId: orderData.id })}
            >
              Cancel
            </Button>
          ) : (
            false
          )}
        </Stack>
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
    1: <InputIcon />,
    2: <LocalShippingIcon />,
    3: <MarkunreadMailboxIcon />,
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

export default function CustomizedSteppers({ step }) {
  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={step}
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
  const users = useSelector((state) => state.user);
  const userData = users[0];

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={8} sx={{ display: "flex" }}>
          <Paper
            sx={{
              padding: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              sx={{ width: "100%" }}
            >
              <Stack
                direction="row"
                flexWrap="wrap"
                alignItems="center"
                spacing={1}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={userData.img}
                  sx={{ width: 56, height: 56 }}
                />
                <div>
                  <Typography fontWeight="bold">
                    {userData.firstName} {userData.lastName}
                  </Typography>
                  <Typography fontSize={14} color="textSecondary">
                    Balance: {userData.balance}
                  </Typography>
                </div>
              </Stack>
              <Typography color="textSecondary">Silver User</Typography>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ display: "flex" }}>
          <Paper sx={{ padding: "20px", flex: 1 }}>
            <Typography variant="h6" textAlign={"center"} color="error.main">
              {userData.all_orders.length}
            </Typography>
            <Typography color="textSecondary" textAlign="center">
              All Orders
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: "20px" }}>
            <Typography variant="h6" textAlign={"center"} color="error.main">
              {userData.email}
            </Typography>
            <Typography color="textSecondary" textAlign="center">
              User Email
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: "20px" }}>
            <Typography variant="h6" textAlign={"center"} color="error.main">
              {userData.phone}
            </Typography>
            <Typography color="textSecondary" textAlign="center">
              Phone Number
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: "20px" }}>
            <Typography variant="h6" textAlign={"center"} color="error.main">
              {userData.address}
            </Typography>
            <Typography color="textSecondary" textAlign="center">
              Address
            </Typography>
          </Paper>
        </Grid>
      </Grid>
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
              <Grid container alignItems="start">
                <Grid item xs={12} md={6} lg={3}>
                  {order.fullName}
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  {order.address}
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  {order.phone}
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <IconButton aria-label="delete">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          );
        })}
      </div>
    </div>
  );
}

function UserPayment() {
  const userId = 0;
  const users = useSelector((state) => state.user);
  const navigate = useNavigate();
  const methods = users[userId].payment_methods;
  console.log(methods);
  const classes = useStyles();

  const [currentOrders, setCurrentOrders] = useState(methods);
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
        {methods &&
          methods.map((order) => {
            return (
              <Paper elevation={1} sx={{ marginBottom: "15px" }}>
                <Grid container alignItems={"center"}>
                  <Grid item xs={12} md={6} lg={3}>
                    <span style={{ marginRight: "10px" }}>
                      <PaymentIcon />,
                    </span>
                    {order.fullName}
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    {order.number}
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    {order.date}
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        navigate("/user-dashboard/edit-method", {
                          state: order.number,
                        });
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() =>
                        deleteMethod({ userId, number: order.number })
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Paper>
            );
          })}
      </div>
    </div>
  );
}

function AddNewPayment() {
  return <AddMethodForm />;
}

function EditPayment() {
  const location = useLocation();
  const number = location.state;
  console.log("NUMBER", number);
  const userId = 0;
  const users = useSelector((state) => state.user);
  let defVal = users[userId].payment_methods.find(
    (method) => method.number == number
  );
  return (
    <AddMethodForm defVal={defVal} formType={"Update"} message="Updated" />
  );
}

const AddMethodForm = ({ defVal, formType = "Add", message = "Added" }) => {
  const userId = 0;
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { ...(defVal ? defVal : {}) } });
  const onSubmit = (data) => {
    if (defVal) {
      data = {
        id: defVal.id,
        ...data,
      };
      updateMethod({ userId, methodInfo: data });
    } else {
      let id = nanoid();
      data = {
        ...data,
        id,
      };
      addMethod({ userId, methodInfo: data });
    }

    setOpen(true);
    setTimeout(() => setOpen(false), 3000);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ position: "relative" }}>
      <TransitionAlerts
        message={message}
        open={open}
        setOpen={setOpen}
        sx={{
          position: "absolute !important",
          bottom: 0,
          left: "25%",
          trasnform: "translate(-50%, -50%)",
          width: "70%",
          zIndex: 10,
        }}
      />
      <Paper sx={{ padding: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("number", { required: true })}
              id="outlined-required"
              label="Card Number"
              fullWidth
              error={errors["number"]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("fullName", { required: true })}
              id="outlined-required"
              label="Name on Card"
              fullWidth
              error={errors["fullName"]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("date", { required: true })}
              id="outlined-required"
              label="Exp. date"
              fullWidth
              error={errors["date"]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("cvc", { required: true })}
              id="outlined-required"
              label="CVC"
              fullWidth
              error={errors["cvc"]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button type="submit" variant="contained" color="error">
              {formType}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

const EditProfile = ({ formType = "Update", message = "Updated" }) => {
  const userId = 0;
  const users = useSelector((state) => state.user);
  const defVal = users[userId];
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { ...(defVal ? defVal : {}) } });
  const onSubmit = (data) => {
    console.log(data);
    data = {
      ...defVal,
      ...data,
    };
    updateUserProfile({ userId, userInfo: data });
    setOpen(true);
    setTimeout(() => setOpen(false), 3000);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ position: "relative" }}>
      <TransitionAlerts
        message={message}
        open={open}
        setOpen={setOpen}
        sx={{
          position: "absolute !important",
          bottom: 0,
          left: "25%",
          trasnform: "translate(-50%, -50%)",
          width: "70%",
          zIndex: 10,
        }}
      />
      <Paper sx={{ padding: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("firstName", { required: true })}
              id="outlined-required"
              label="First name"
              fullWidth
              error={errors["firstName"]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("lastName", { required: true })}
              id="outlined-required"
              label="Last name"
              fullWidth
              error={errors["lastName"]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("email", { required: true })}
              id="outlined-required"
              label="Email"
              fullWidth
              error={errors["email"]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("phone", { required: true })}
              id="outlined-required"
              label="Phone"
              fullWidth
              error={errors["phone"]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("img", { required: true })}
              id="outlined-required"
              label="Image link"
              fullWidth
              error={errors["img"]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("address", { required: true })}
              id="outlined-required"
              label="Address"
              fullWidth
              error={errors["address"]}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="error">
              {formType}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export {
  DashboardList,
  UserAddress,
  UserOrders,
  UserPayment,
  UserProfile,
  UserSupport,
  UserWishlist,
  OrderDetails,
  AddNewPayment,
  EditPayment,
  EditProfile,
};
