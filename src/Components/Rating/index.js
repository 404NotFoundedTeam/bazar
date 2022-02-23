import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function BasicRating({ value, ...props }) {
  //   const [value, setValue] = React.useState(5);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      {/* name , value ,  */}
      <Rating
        name="read-only"
        value={value}
        readOnly
        {...props}
        sx={{ fontSize: "1.125rem" }}
        onChange={(event, newValue) => {
          //   setValue(newValue);
        }}
      />
    </Box>
  );
}
