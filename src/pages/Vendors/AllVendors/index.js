import React, { useState } from "react";
import VendorCard from "../../../components/VendorCard";
import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import BasicPagination from "../../../components/Mini-components/Pagination";
import { vendors } from "../../../data/data";
import { database } from "../../../data/data";

export default function AllVendors({ obj }) {
  // console.log(database.seller);
  const vendors = Object.entries(database.seller);
  return (
    <Container>
      <Box>
        <Typography
          component="h2"
          sx={{
            fontWeight: "bold",
            fontSize: "28px",
            color: "#2B3445",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          All Shops
        </Typography>
        <Grid container spacing={3}>
          {vendors.map((item, i) => {
            return (
              <Grid item xs={12} sm={6} md={6} lg={4} sx={{ margin: "auto" }}>
                <VendorCard obj={item[1]} key={i} />
              </Grid>
            );
          })}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Typography className="text-slate-400 text-base">
            Showing 1-9 of 300 Shops
          </Typography>
          <BasicPagination />
        </Box>
      </Box>
    </Container>
  );
}
