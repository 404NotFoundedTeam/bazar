import { Box, Container, Drawer, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import MainCard from "../../../components/card";
import MediaCard from "./mainSection";
import SideBar from "./SideBar/index";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useParams } from "react-router-dom";
import { database } from "../../../data/data";

export default function VendorOwnPage() {
  const [isOpen, setIsOpen] = useState(false);
  const vendorId = useParams();

  console.log(vendorId);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  const obj = database.seller[`seller_${vendorId?.id}`];
  const data = obj.products || [];

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
          {data.length !== 0 && <SideBar />}
          <Drawer
            anchor="left"
            open={isOpen}
            onClose={toggleDrawer("left", false)}
            sx={{ display: { sm: "block", md: "none" } }}
          >
            <SideBar />
          </Drawer>
        </Grid>
        <Grid item lg={9} md={8} sm={12}>
          <Grid container spacing={2}>
            {data.map((obj, i) => (
              <Grid key={i} item lg={4} md={6} sm={6}>
                <MainCard key={i} data={obj} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
