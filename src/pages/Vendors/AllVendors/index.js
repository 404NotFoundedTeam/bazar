import React from "react";
import VendorCard from "../../../components/VendorCard";
import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import BasicPagination from "../../../components/Mini-components/Pagination";

const vendors = [
  {
    id: 0,
    rating: 4,
    avaImg: "https://bazar-react.vercel.app/assets/images/faces/propic.png",
    img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
    vendorName: "Salauat Yerejepov",
    location: "Allisher Navoiy street 109 , Tashkent city",
    phoneNumber: "(90)651-02-93",
  },
  {
    id: 1,
    rating: 5,
    avaImg: "https://bazar-react.vercel.app/assets/images/banners/banner.png",
    img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
    vendorName: "Keyboard Kiosk",
    location: "Allisher Navoiy street 109 , Tashkent city",
    phoneNumber: "(90)651-02-93",
  },
  {
    id: 2,
    rating: 3,
    avaImg: "https://bazar-react.vercel.app/assets/images/banners/banner-3.png",
    img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
    vendorName: "Anytime Buys",
    location: "Allisher Navoiy street 109 , Tashkent city",
    phoneNumber: "(90)651-02-93",
  },
  {
    id: 3,
    rating: 2,
    avaImg: "https://bazar-react.vercel.app/assets/images/banners/banner-4.png",
    img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
    vendorName: "Word Wide Wishes",
    location: "Allisher Navoiy street 109 , Tashkent city",
    phoneNumber: "(90)651-02-93",
  },
  {
    id: 4,
    rating: 5,
    avaImg: "https://bazar-react.vercel.app/assets/images/faces/propic.png",
    img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
    vendorName: "Cybershop",
    location: "Allisher Navoiy street 109 , Tashkent city",
    phoneNumber: "(90)651-02-93",
  },
  {
    id: 5,
    rating: 5,
    avaImg: "https://bazar-react.vercel.app/assets/images/faces/propic.png",
    img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
    vendorName: "Scarlett Beauty",
    location: "Allisher Navoiy street 109 , Tashkent city",
    phoneNumber: "(90)651-02-93",
  },
];

export default function AllVendors() {
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
          {vendors.map((obj, i) => (
            <Grid item xs={12} sm={6} md={6} lg={4} sx={{ margin: "auto" }}>
              <VendorCard obj={obj} key={i} />
            </Grid>
          ))}
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
