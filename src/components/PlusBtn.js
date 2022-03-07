import React from "react";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";
import { IconButton } from "@mui/material";

const PlusBtn = ({ type, ...props }) => {
  return (
    <IconButton
      color="error"
      size="small"
      {...props}
      sx={{
        borderRadius: "50%",
        border: "1px solid",
      }}
    >
      {type ? <GoPlus /> : <HiMinus />}
    </IconButton>
  );
};

export default PlusBtn;
