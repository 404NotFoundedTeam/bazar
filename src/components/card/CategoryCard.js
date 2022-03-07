import { Chip } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CategoryCard = ({ data, id }) => {
  return (
    <Box>
      <Box display={"flex"} justifyContent="space-between">
        <Chip label={data.name} color={"primary"} size={"small"} />
        <Chip label={data.products?.length} />
      </Box>
      <img src={data.img || ""} />
    </Box>
  );
};

export default CategoryCard;
