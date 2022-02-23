import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import SalePageWrapper from './SalePageWrapper'
import SaleTab from '../../components/SaleTabs'
import { createTheme, Grid } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { nanoid } from 'nanoid'
import MainCard from '../../components/card'

const saleTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(210, 63, 87)',
    },
  },
})

export default function SalePage() {
  const [data, setData] = useState([
    {
      id: nanoid(),
      img:
        'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75',
      name: 'Kawasaki 2020',
      price: 20000,
      score: 2,
      off: 30,
    },
    {
      id: nanoid(),
      img:
        'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75',
      name: 'Kawasaki 2020',
      price: 20000,
      score: 1,
      off: 30,
    },
    {
      id: nanoid(),
      img:
        'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75',
      name: 'Kawasaki 2020',
      price: 20000,
      score: 5,
      off: 30,
    },
    {
      id: nanoid(),
      img:
        'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75',
      name: 'Kawasaki 2020',
      price: 20000,
      score: 4,
      off: 30,
    },
    {
      id: nanoid(),
      img:
        'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75',
      name: 'Kawasaki 2020',
      price: 20000,
      score: 2,
      off: 30,
    },
    {
      id: nanoid(),
      img:
        'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75',
      name: 'Kawasaki 2020',
      price: 20000,
      score: 1,
      off: 30,
    },
    {
      id: nanoid(),
      img:
        'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75',
      name: 'Kawasaki 2020',
      price: 20000,
      score: 5,
      off: 30,
    },
    {
      id: nanoid(),
      img:
        'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75',
      name: 'Kawasaki 2020',
      price: 20000,
      score: 4,
      off: 30,
    },
  ])
  return (
    <ThemeProvider theme={saleTheme}>
      <SalePageWrapper>
        <CssBaseline />
        <Container maxWidth="lg">
          <SaleTab />
          <Grid container spacing={3} sx={{ mt: 4 }}>
            {data.map((item, index) => (
              <MainCard key={index} data={item} />
            ))}
          </Grid>
        </Container>
      </SalePageWrapper>
    </ThemeProvider>
  )
}
