import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import {
  changeSoniProduct,
  addProduct__K,
  deleteProduct__K,
} from "../../redux/actions/userActions";
import RatingSIze from "../rating";

export default function MainCard({ data, id }) {
  const cart = useSelector((state) => state.user.korzina);
  const value = cart[id] || 0;
  const changeSoni = (isTrue) => {
    if (cart[id]) {
      if (!isTrue && cart[id] === 1) deleteProduct__K(id);
      else changeSoniProduct(id, isTrue);
    } else {
      addProduct__K(id);
    }
  };

  return (
    <Card
      sx={{
        width: "100%",
        boxShadow: "rgb(3 0 71 / 9%) 0px 1px 3px",
        fontFamily: "roboto !important",
      }}
    >
      {(data.off || 0) > 0 && (
        <Box
          component={"div"}
          color="primary"
          variant="contained"
          sx={{
            background: "rgb(210, 63, 87)",
            px: "8px",
            py: "4px",

            display: "flex",
            alignItems: "center",
            position: "absolute",
            borderRadius: "16px",
            color: "white",
            fontSize: "10px",
            fontWeight: "600",
          }}
        >
          <Typography>{data.off || 0}%</Typography>
          <Typography sx={{ fontSize: "12px" }}> off</Typography>
        </Box>
      )}
      <CardMedia
        component="img"
        alt="green iguana"
        image={
          data.productsImg ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3-HBdZNC4ZdhEpF3H-QcM8XzYXsBbjWMrg&usqp=CAU"
        }
        sx={{ height: "150px", objectFit: "cover" }}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={6}>
            <Typography gutterBottom variant="body1" component="div">
              {data.name || "undefined"}
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mt: 1 }}
            >
              <RatingSIze score={data.rating()} />
              <Typography color="primary" variant="body1">
                ${data.price || 0}
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column-reverse",
                justifyContent: "space-between",
                alignItems: "flex-end",
                width: "100%",
                height: "80px",
              }}
              aria-label="outlined primary button group"
            >
              <Button
                variant="outlined"
                sx={{
                  minWidth: "0px",
                  px: "8px",
                  py: "4px",
                  svg: {
                    fontSize: "16px",
                    fontWeight: "bold",
                  },
                }}
                onClick={() => {
                  changeSoni(true);
                }}
              >
                <GoPlus />
              </Button>

              {value > 0 && (
                <>
                  <Typography
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      pr: "10px",
                      justifyContent: "flex-end",
                    }}
                  >
                    {value}
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      changeSoni(false);
                    }}
                    sx={{
                      minWidth: "0px",
                      px: "8px",
                      py: "4px",
                      svg: {
                        fontSize: "16px",
                        fontWeight: "bold",
                      },
                    }}
                  >
                    <HiMinus />
                  </Button>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
