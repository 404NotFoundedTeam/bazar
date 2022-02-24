import { Container, Grid } from "@mui/material";
import React from "react";
import MainCard from "../../../components/card";
import MediaCard from "./mainSection";
import SideBar from "./SideBar/index";
export default function VendorOwnPage() {
  const obj = {
    id: 5,
    rating: 5,
    avaImg: "https://bazar-react.vercel.app/assets/images/faces/propic.png",
    img: "https://bazar-react.vercel.app/assets/images/banners/shop-cover.png",
    vendorName: "Scarlett Beauty",
    location: "Allisher Navoiy street 109 , Tashkent city",
    phoneNumber: "(90)651-02-93",
  };

  const data = [
    {
      id: 1,
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 2,
      off: 0,
    },
    {
      id: 1,
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 2,
      off: 0,
    },
    {
      id: 1,
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 2,
      off: 0,
    },
    {
      id: 1,
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 2,
      off: 0,
    },
    {
      id: 1,
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 2,
      off: 0,
    },
  ];
  return (
    <Container sx={{ minHeight: "100vh", background: "silver" }}>
      {/* <MediaCard obj={obj} /> */}
      <Grid container spacing={2}>
        <Grid item xs={12} lg={3}>
          <SideBar />
        </Grid>
        <Grid item lg={9}>
          <Grid container spacing={2}>
            {data.map((obj, i) => (
              <Grid item lg={4} md={6}>
                <MainCard key={i} data={obj} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
