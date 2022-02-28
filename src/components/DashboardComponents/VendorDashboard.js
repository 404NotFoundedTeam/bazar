import { Grid, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({}));

export const Dashboard = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <Paper
            sx={{ minWidth: "300px", padding: "24px", textAlign: "center" }}
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
            sx={{ minWidth: "300px", padding: "24px", textAlign: "center" }}
          >
            <Typography color="textSecondary">Your balance</Typography>
            <Typography variant="h4" fontWeight="bold" sx={{ my: 1 }}>
              $4000.00
            </Typography>
            <Typography color="textSecondary">
              Will be processed on Feb 15, 2021
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper
            sx={{ minWidth: "300px", padding: "24px", textAlign: "center" }}
          >
            <Typography color="textSecondary">Pending Orders</Typography>
            <Typography variant="h4" fontWeight="bold" sx={{ my: 1 }}>
              08
            </Typography>
            <Typography color="textSecondary">7/3/2020 - 8/1/2020</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Paper sx={{ minWidth: "300px", padding: "24px" }}>
            <Typography fontWeight="bold">Sale</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper sx={{ minWidth: "300px", padding: "24px" }}>
            <Typography fontWeight="bold">Top countries</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export const VendorProducts = () => {
  return <div>"hello world" what is goin on</div>;
};
export const AddProduct = () => {
  return <div>"hello world" what is goin on</div>;
};
export const VendorSettings = () => {
  return <div>"hello world" what is goin on</div>;
};
export const VendorOrders = () => {
  return <div>"hello world" what is goin on</div>;
};
