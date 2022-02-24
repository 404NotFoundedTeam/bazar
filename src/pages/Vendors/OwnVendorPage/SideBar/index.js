import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";
import NestedList from "./NestedList";
import TextFieldHiddenLabel from "./Price";
import CheckboxesGroup from "./CheckedList";
import CheckboxesGroupRating from "./PoRating";

export default function SideBar() {
  return (
    <Box sx={{ background: "#fff", padding: 2 }}>
      <NestedList />
      <hr />
      <Typography>Price Range</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& .MuiFilledInput-root": { background: "none" },
          "& .Mui-focused": { background: "none" },
        }}
      >
        <TextFieldHiddenLabel /> <span style={{ marginInline: "10px" }}>-</span>
        <TextFieldHiddenLabel />
      </Box>
      <CheckboxesGroup />
      <CheckboxesGroupRating />
    </Box>
  );
}
