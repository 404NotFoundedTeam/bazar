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
  const [page, setPage] = useState(1);
  const reduxProducts = useSelector((state) => {
    console.log("state  = >", state.products);
    return state.products;
  });

  const currentProducts = Object.entries(reduxProducts);

  const _ = require("lodash");
  const data2 = _.chunk(currentProducts, 4);

  return (
    <SalePageWrapper>
      <CssBaseline />
      <Container maxWidth="lg">
        <SaleTab />
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {data2[page - 1].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MainCard key={index} data={item[1]} id={item[0]} />
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
              count={data2.length}
              page={page}
              variant="outlined"
              onChange={(e, p) => setPage(p)}
            />
          </Stack>
        </Box>
      </Container>
    </SalePageWrapper>
  );
}
