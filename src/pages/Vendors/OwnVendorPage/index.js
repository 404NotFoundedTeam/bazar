import { Box, Container, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import MainCard from "../../../components/card";
import MediaCard from "./mainSection";
import SideBar from "./SideBar/index";
import FilterListIcon from "@mui/icons-material/FilterList";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  hiddenAside: {
    position: { sm: "absolute", md: "relative" },
    top: 0,
    left: "-100%",
    zIndex: 100,
  },
  visibleAside: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 100,
  },
});
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

  const classes = useStyles();

  const [isVisible, setIsVisible] = useState(false);
  return (
    <Container sx={{ minHeight: "100vh", background: "#F6F9FC" }}>
      <MediaCard obj={obj} />
      <Box sx={{ textAlign: "right" }}>
        <IconButton
          onClick={() => setIsVisible(!isVisible)}
          sx={{ display: { xs: "inline", sm: "inline", lg: "none" } }}
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
          sx={{ transition: "0.3s" }}
          // className={`${
          //   // isVisible ? classes.hiddenAside : classes.visibleAside
          // }`}
        >
          <SideBar />
        </Grid>
        <Grid item lg={9} md={12} sm={12}>
          <Grid container spacing={2}>
            {data.map((obj, i) => (
              <Grid item lg={4} md={4} sm={6}>
                <MainCard key={i} data={obj} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
