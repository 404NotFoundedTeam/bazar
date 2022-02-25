import { ShoppingBagOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { MenuList } from "../../components/DashboardComponents";

const useStyles = makeStyles((theme) => ({
  cover: {
    border: "1px solid black",
    display: "flex",
  },
  sidebar: {
    width: "290px",
    // border: "1px solid black",
  },
}));

export default function UserDashboard() {
  const classes = useStyles();
  return (
    <div className={classes.cover}>
      <div className={classes.sidebar}>
        <Typography className={classes.title} color="textSecondary">
          Dashboard
        </Typography>
        <MenuList elevation={3} />
      </div>
    </div>
  );
}
