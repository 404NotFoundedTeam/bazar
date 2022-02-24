import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function TextFieldHiddenLabel() {
  return (
    <Stack
      component="form"
      sx={{
        width: "25ch",
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        type="number"
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
        sx={{
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "gray",
          borderRadius: 1,
        }}
      />
    </Stack>
  );
}
