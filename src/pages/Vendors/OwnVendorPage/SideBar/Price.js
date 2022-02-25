import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function TextFieldHiddenLabel({ defaultValue }) {
  return (
    <Stack
      component="form"
      sx={{
        width: "25ch",
        backgroundColor: "#fff !important",
      }}
      // spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        type="number"
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue={defaultValue}
        variant="filled"
        size="small"
        sx={{
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "gray",
          borderRadius: 1,
          "& .MuiInputBase-sizeSmall": {
            backgroundColor: "white !important",
          },
          "& :before": {
            display: "none",
          },
        }}
      />
    </Stack>
  );
}
