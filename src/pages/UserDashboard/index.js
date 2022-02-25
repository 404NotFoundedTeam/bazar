import { ShoppingBagOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { MenuList } from "../../components/DashboardComponents";

export default function UserDashboard() {
  return (
    <div>
      <div>
        <Typography>Dashboard</Typography>
        <MenuList />
      </div>
    </div>
  );
}
