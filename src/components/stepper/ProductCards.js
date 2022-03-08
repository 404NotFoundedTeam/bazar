import { Button, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";

export default function ProductCards({
  data,
  deleteProduct__K,
  element,
  changeSoniProduct,
  cart,
  products,
}) {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let s = 0;
    cart.forEach((i) => {
      s += products[i[0]].price * i[1];
    });
    setSum(s);
  }, [cart]);

  console.log("data=>", data);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        px: 2,
        py: 1,
        background: "#fff",
        my: 3,
        borderRadius: "4px",
        boxShadow: "0px 1px 3px rgb(3 0 71 / 9%)",
      }}
    >
      <Grid item xs={3} sx={{ bg: "red" }}>
        <img
          src={data.productsImg}
          width="100%"
          height="100%"
          alt={data.name}
        />
      </Grid>
      <Grid item xs={9}>
        <Box
          sx={{
            px: 1,
            py: 2,
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">{data.name}</Typography>
          <IconButton
            onClick={() => deleteProduct__K(element[0])}
            aria-label="delete"
            color="error"
          >
            <FaTimes />
          </IconButton>
        </Box>
        <Box
          sx={{
            px: 1,
            py: 4,
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body2">${data.price}*</Typography>
            <Typography variant="body2">{element[1]}</Typography>
            <Typography variant="body1" sx={{ mx: 1 }} color={"error"}>
              ${element[1] * data.price}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            aria-label="outlined primary button group"
          >
            <>
              <Button
                variant="outlined"
                color="error"
                disabled={sum <= 0}
                type={false}
                onClick={() => {
                  changeSoniProduct(element[0], false);
                }}
                sx={{
                  minWidth: "0px",
                  px: "8px",
                  py: "0px",
                  svg: {
                    fontSize: "30px",
                    fontWeight: "bold",
                  },
                }}
              >
                <FaMinus />
              </Button>

              <Typography
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: 1,
                }}
              >
                {element[1]}
              </Typography>
            </>

            <Button
              variant="outlined"
              color="error"
              type={true}
              sx={{
                minWidth: "0px",
                px: "8px",
                py: "0px",
                svg: {
                  fontSize: "30px",
                  fontWeight: "bold",
                },
              }}
              onClick={() => {
                changeSoniProduct(element[0], true);
              }}
            >
              <FaPlus />
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
