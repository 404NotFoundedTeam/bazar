import { Chip } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CategoryCard = ({ data, id }) => {
  return (
    <Box>
      <Box display={"flex"} justifyContent="space-between">
        <Chip label={data.name} />
      </Box>
      <img src={data.img || ""} />
    </Box>
  );
};

export default CategoryCard;
