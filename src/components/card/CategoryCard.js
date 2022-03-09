import { Chip } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CategoryCard = ({ data, id }) => {
  const products = Object.values(data.products);
  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: 10,
          top: "15px",
          px: 2,
          width: "100%",
        }}
        display={"flex"}
        justifyContent="space-between"
      >
        <Chip label={data.name} color={"primary"} size={"small"} />
        <Chip color="error" size={"small"} label={products.length} />
      </Box>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: "0",
          left: "0",
        }}
        src={data.img || ""}
      />
    </Box>
  );
};

export default CategoryCard;
