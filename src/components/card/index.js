import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";
import { Button, Chip, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import {
  changeSoniProduct,
  addProduct__K,
  deleteProduct__K,
} from "../../redux/actions/userActions";
import RatingSIze from "../rating";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: "100%",
        position: "relative",
        boxShadow: "rgb(3 0 71 / 9%) 0px 1px 3px",
        fontFamily: "roboto !important",
      }}
    >
      {(data.off || 0) > 0 && (
        <Chip
          sx={{ position: "absolute", zIndex: 100, top: "6px", left: "6px" }}
          color={"error"}
          size={"small"}
          label={`${data.off || 0}% off`}
        />
      )}
      <CardMedia
        component="img"
        alt="green iguana"
        onClick={() => {
          navigate(`/products/${id}`);
        }}
        image={
          data.productsImg ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3-HBdZNC4ZdhEpF3H-QcM8XzYXsBbjWMrg&usqp=CAU"
        }
        sx={{ height: "180px", cursor: "pointer", objectFit: "cover" }}
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
                color={"error"}
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
                    color={"error"}
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
