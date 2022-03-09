import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  let data = products[id ? id : 0];
  return (
    <Box sx={{ py: 10 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={6}>
          <img
            style={{
              width: "80%",
              display: "block",
              margin: "0 auto",
              borderRadius: "10px",
            }}
            src={data.productsImg}
            alt=""
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography fontWeight="bold" fontSize={36}>
            {data.name}
          </Typography>
          <Typography>Brand: {data.brand}</Typography>
          <Typography>
            Rated: {data.rating} ({data.rated})
          </Typography>
          <Typography
            fontWeight="bold"
            color="error"
            fontSize={28}
            sx={{ margin: "5px 0 0" }}
          >
            ${data.price}
          </Typography>
          <Typography fontSize="12" color="textSecondary">
            {data.stock > 0 ? "Stock available" : "Stock not available"}
          </Typography>
          <Button variant="outlined" color="error" sx={{ margin: "20px 0" }}>
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
