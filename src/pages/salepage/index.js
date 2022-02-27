import React, { useEffect, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import SalePageWrapper from './SalePageWrapper'
import SaleTab from '../../components/SaleTabs'
import {
  Box,
  createTheme,
  Grid,
  Pagination,
  Stack,
  Typography,
} from '@mui/material'
import { spacing, ThemeProvider } from '@mui/system'
import { nanoid } from 'nanoid'
import MainCard from '../../components/card'
import Checkout from '../../components/stepper/Checkout'

const saleTheme = createTheme({
  palette: {
    primary: {
      main: "rgb(210, 63, 87)",
    },
  },
});

export default function SalePage() {
  const [data, setData] = useState([
    {
      id: nanoid(),
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 2,
      off: 0,
    },
    {
      id: nanoid(),
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 1,
      off: 0,
    },
    {
      id: nanoid(),
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 5,
      off: 30,
    },
    {
      id: nanoid(),
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 4,
      off: 30,
    },
    {
      id: nanoid(),
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 2,
      off: 30,
    },
    {
      id: nanoid(),
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 1,
      off: 30,
    },
    {
      id: nanoid(),
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 5,
      off: 30,
    },
    {
      id: nanoid(),
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75",
      name: "Kawasaki 2020",
      price: 20000,
      score: 4,
      off: 30,
    },
  ]);

  data.sort((a, b) => b.off - a.off)
  var _ = require('lodash')
  const data2 = _.chunk(data, 2)
  console.log(data2)

  const [page, setPage] = useState(0)
  return (
    <ThemeProvider theme={saleTheme}>
      <SalePageWrapper>
        <CssBaseline />
        <Container maxWidth="lg">
          <SaleTab />
          <Checkout />
          <Grid container spacing={3} sx={{ mt: 4 }}>
            {data2[0].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <MainCard key={index} data={item} />
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
              Showing {data2[0].length} of {data.length} products
            </Typography>
            <Stack spacing={2}>
              <Pagination
<<<<<<< HEAD
                count={10}
                onChange={(e, page) => {
                  console.log(e);
                  // setData((prev)=>)
                  return (
                    <Grid container spacing={3} sx={{ mt: 4 }}>
                      {data2[page - 1] !== [] ? (
                        data2[page - 1].map((item, index) => (
                          <MainCard key={index} data={item} />
                        ))
                      ) : (
                        <Typography>
                          Not found{console.log("not found")}
                        </Typography>
                      )}
                    </Grid>
                  );
                }}
=======
                count={data.length - data2.length}
                page={page}
>>>>>>> ac12cc675f1755a744d0d2a8234bc46292c4b7a5
                variant="outlined"
                color="secondary"
              />
            </Stack>
          </Box>
        </Container>
      </SalePageWrapper>
    </ThemeProvider>
  );
}
