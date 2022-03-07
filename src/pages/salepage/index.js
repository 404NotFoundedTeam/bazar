import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import SalePageWrapper from "./SalePageWrapper";
import SaleTab from "../../components/SaleTabs";
import {
  Box,
  createTheme,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import MainCard from "../../components/card";

import { useSelector } from "react-redux";

export default function SalePage() {
  const reduxProducts = useSelector((state) => {
    console.log("state  = >", state.products);
    return state.products;
  });

  const products = Object.values(reduxProducts);
  const [currentProducts, setCurrentProducts] = useState(products);
  console.log(currentProducts);

  // data.sort((a, b) => b.off - a.off);
  var _ = require("lodash");
  const data2 = _.chunk(currentProducts, 4);

  const [page, setPage] = useState(0);
  return (
    <SalePageWrapper>
      <CssBaseline />
      <Container maxWidth="lg">
        <SaleTab />
        {/* <Checkout /> */}
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {data2[0].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MainCard key={index} data={item} />
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            my: 5,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <Typography>
            Showing {data2[0].length} of {currentProducts.length} products
          </Typography>
          <Stack spacing={2}>
            <Pagination
              count={currentProducts.length - data2.length}
              page={page}
              variant="outlined"
              color="secondary"
            />
          </Stack>
        </Box>
      </Container>
    </SalePageWrapper>
  );
}
