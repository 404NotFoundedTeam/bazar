import { ArrowRightAlt } from "@mui/icons-material";
import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Pagination,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      flexWrap: "wrap",
      width: "100%",
      "& p": { width: "auto", fontWeight: 100, margin: 0 },
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

export const Dashboard = () => {
  const vendorData = [];
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <Paper
            sx={{
              minWidth: { xs: "250px", md: "290px" },
              padding: "24px",
              textAlign: "center",
            }}
          >
            <Typography color="textSecondary">
              Earnings (before taxes)
            </Typography>
            <Typography variant="h4" fontWeight="bold" sx={{ my: 1 }}>
              $30450.00
            </Typography>
            <Typography color="textSecondary">
              after associated vendor fees
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper
            sx={{
              minWidth: { xs: "250px", md: "290px" },
              padding: "24px",
              textAlign: "center",
            }}
          >
            <Typography color="textSecondary">Your balance</Typography>
            <Typography variant="h4" fontWeight="bold" sx={{ my: 1 }}>
              $4000.00
            </Typography>
            <Typography color="textSecondary">
              processed on Feb 15, 2021
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper sx={{ padding: "24px", textAlign: "center" }}>
            <Typography color="textSecondary">Pending Orders</Typography>
            <Typography variant="h4" fontWeight="bold" sx={{ my: 1 }}>
              08
            </Typography>
            <Typography color="textSecondary">7/3/2020 - 8/1/2020</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Paper sx={{ padding: "24px" }}>
            <Typography fontWeight="bold">Sale</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper
            sx={{ minWidth: { xs: "250px", md: "290px" }, padding: "24px" }}
          >
            <Typography fontWeight="bold">Top countries</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export const VendorProducts = () => {
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
};
export const AddProduct = () => {
  return (
    <div>
      <Paper sx={{ padding: "24px" }}>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <TextField required id="outlined-required" label="Name" fullWidth />
          </Grid>
          <Grid item lg={6}>
            <TextField
              required
              id="outlined-required"
              label="Brand"
              fullWidth
            />
          </Grid>
          <Grid item lg={6}>
            <TextField
              label="Stock"
              id="outlined-start-adornment"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">pcs.</InputAdornment>
                ),
              }}
              fullWidth
            />
          </Grid>
          <Grid item lg={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={12}
                label="Category"
                onChange={() => {}}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={12}
                onChange={() => {}}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
              />
            </FormControl>
          </Grid>
          <Grid item lg={6}>
            <TextField
              label="Discount"
              id="outlined-start-adornment"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">%</InputAdornment>
                ),
              }}
              fullWidth
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
              required
              id="outlined-required"
              label="Description"
              rows={4}
              fullWidth
              multiline
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
              required
              id="outlined-required"
              label="Image link"
              fullWidth
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export const VendorSettings = () => {
  return <div>"hello world" what is goin on</div>;
};
export const VendorOrders = () => {
  return <div>"hello world" what is goin on</div>;
};
