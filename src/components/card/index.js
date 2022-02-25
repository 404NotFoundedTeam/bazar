<<<<<<< HEAD
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import RatingSIze from "../rating";
import { Box } from "@mui/system";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Button, Grid } from "@mui/material";

export default function MainCard({ data }) {
  const [value, setValue] = useState(0);
  return (
    <Card
      sx={{
        width: "100%",
        boxShadow: "rgb(3 0 71 / 9%) 0px 1px 3px",
        fontFamily: "roboto !important",
      }}
    >
      {data.off > 0 && (
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
            borderRadius: "20px",
            color: "white",
            fontSize: "10px",
            fontWeight: "600",
          }}
        >
          <Typography>{data.off}%</Typography>
          <Typography sx={{ fontSize: "12px" }}> off</Typography>
        </Box>
      )}
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={data.img}
        sx={{}}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={6}>
            <Typography gutterBottom variant="body1" component="div">
              {data.name}
            </Typography>

            <RatingSIze score={data.score} />
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mt: 1 }}
            >
              <Typography color="primary" variant="body1">
                ${data.price}
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column-reverse",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
                width: "100%",
              }}
              aria-label="outlined primary button group"
            >
              <Button
                variant="outlined"
                sx={{
                  w: "10px !important",
                  h: "10px important",
                  p: "5px",
                  m: "0px",
                  svg: {
                    fontSize: "14px",
                    m: "0px important",
                    p: "0px",
                    display: "inline-block",
                  },
                }}
                onClick={() => setValue(value + 1)}
              >
                <FaPlus />
              </Button>

              {value > 0 && (
                <>
                  <Typography
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {value}
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => setValue(value - 1)}
                    sx={{
                      w: "10px !important",
                      h: "10px important",
                      p: "5px",
                      m: "0px",
                      svg: {
                        fontSize: "14px",
                        m: "0px important",
                        p: "0px",
                        display: "inline-block",
                      },
                    }}
                  >
                    <FaMinus />
                  </Button>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
=======
import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import RatingSIze from '../rating'
import { Box } from '@mui/system'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { Button, Grid } from '@mui/material'

export default function MainCard({ data }) {
  const [value, setValue] = useState(0)
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          width: '100%',
          mt: 2,
          boxShadow: 'rgb(3 0 71 / 9%) 0px 1px 3px',
          fontFamily: 'roboto !important',
        }}
      >
        {data.off > 0 && (
          <Box
            component={'div'}
            color="primary"
            variant="contained"
            sx={{
              background: 'rgb(210, 63, 87)',
              px: '8px',
              py: '4px',

              display: 'flex',
              alignItems: 'center',
              position: 'absolute',
              borderRadius: '20px',
              color: 'white',
              fontSize: '10px',
              fontWeight: '600',
            }}
          >
            <Typography>{data.off}%</Typography>
            <Typography sx={{ fontSize: '12px' }}> off</Typography>
          </Box>
        )}
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={data.img}
          sx={{}}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={6}>
              <Typography gutterBottom variant="body1" component="div">
                {data.name}
              </Typography>

              <RatingSIze score={data.score} />
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: 1 }}
              >
                <Typography color="primary" variant="body1">
                  ${data.price}
                </Typography>
              </Grid>
            </Grid>
            <Grid item lg={6} md={6} sm={6}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column-reverse',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                }}
                aria-label="outlined primary button group"
              >
                <Button
                  variant="outlined"
                  sx={{
                    w: '10px !important',
                    h: '10px important',
                    p: '5px',
                    m: '0px',
                    svg: {
                      fontSize: '14px',
                      m: '0px important',
                      p: '0px',
                      display: 'inline-block',
                    },
                  }}
                  onClick={() => setValue(value + 1)}
                >
                  <FaPlus />
                </Button>

                {value > 0 && (
                  <>
                    <Typography
                      sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {value}
                    </Typography>
                    <Button
                      variant="outlined"
                      onClick={() => setValue(value - 1)}
                      sx={{
                        w: '10px !important',
                        h: '10px important',
                        p: '5px',
                        m: '0px',
                        svg: {
                          fontSize: '14px',
                          m: '0px important',
                          p: '0px',
                          display: 'inline-block',
                        },
                      }}
                    >
                      <FaMinus />
                    </Button>
                  </>
                )}
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
>>>>>>> eceb8ee8fb08f68c1838115ec5079ffd925db888
}
