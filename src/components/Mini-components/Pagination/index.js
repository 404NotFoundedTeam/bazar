import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ className, ...props }) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={3}
        boundaryCount={3}
        color="secondary"
        className={className}
        {...props}
      />
    </Stack>
  );
}
