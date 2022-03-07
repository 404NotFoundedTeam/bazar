import { Box, Container, Drawer, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import MainCard from "../../../components/card";
import MediaCard from "./mainSection";
import SideBar from "./SideBar/index";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useParams } from "react-router-dom";
import { database } from "../../../data/data";
import { useSelector } from "react-redux";

export default function VendorOwnPage() {
  const [isOpen, setIsOpen] = useState(false);
  const vendorId = useParams();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  // vendors reducer
  const obj = useSelector((state) => state.vendors?.vendors[`${vendorId?.id}`]);

  const data = obj.products || [];

  //products reducer
  const allProducts = useSelector((state) => state.products?.products);

  // categories and brands
  const ownBrands = [];
  const ctgryProducts = [];

  data.map((id) => {
    ownBrands.push(database.products[id].brand);
    ctgryProducts.push(database.products[id].category);
  });

  const noDuplicateownBrands = [...new Set(ownBrands)];
  const noDuplicateCtgryProducts = [...new Set(ctgryProducts)];

  return (
    <Container
      maxWidth="lg"
      sx={{ minHeight: "100vh", background: "#F6F9FC", py: 2 }}
    >
      <MediaCard obj={obj} />
      <Box sx={{ textAlign: "right" }}>
        <IconButton
          onClick={toggleDrawer("left", true)}
          sx={{ display: { xs: "inline", sm: "inline", md: "none" } }}
        >
          <FilterListIcon />
        </IconButton>
      </Box>
      <Grid container spacing={2} sx={{ position: "relative" }}>
        <Grid
          item
          lg={3}
          md={4}
          sm={4}
          sx={{
            transition: "0.3s",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <SideBar
            brands={noDuplicateownBrands}
            categories={noDuplicateCtgryProducts}
          />
          <Drawer
            anchor="left"
            open={isOpen}
            onClose={toggleDrawer("left", false)}
            sx={{
              display: {
                sm: "block",
                md: "none",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 10000,
              },
            }}
          >
            <SideBar
              brands={noDuplicateownBrands}
              categories={noDuplicateCtgryProducts}
            />
          </Drawer>
        </Grid>
        <Grid item lg={9} md={8} sm={12}>
          <Grid container spacing={2}>
            {data.map((i) => (
              <Grid key={i} item lg={4} md={6} sm={6} xs={12}>
                <MainCard key={i} data={allProducts[`${i}`]} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
