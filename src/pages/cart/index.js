import { Stepper } from "@mui/material";
import React from "react";
import Checkout from "../../components/stepper/Checkout";

export default function Cart({ ...props }) {
  return (
    <div>
      <Checkout />
    </div>
  );
}
