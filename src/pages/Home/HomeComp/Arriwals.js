import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Arriwals = ({ data }) => {
  return (
    <Box
      sx={{
        padding: "20px",
        borderRadius: 2,
        boxShadow: (theme) => theme.shadowsHeader.block,
      }}
    >
      <Grid spacing={3} container>
        {data.slice(0, 6).map((element, i) => (
          <Grid key={element.title + i} item xs={12} sm={4} md={3} lg={2}>
            <Box>
              <Box
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <img
                  src={element.img}
                  style={{ width: "100%", objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0, 0, 0, .3)",
                    transition: "all .3s ease",
                    opacity: 0,
                    "div:hover > &": { opacity: 1 },
                  }}
                ></Box>
              </Box>
              <Typography sx={{ mt: 3 }}>{element.title}</Typography>
              <Typography color="error">${element.price}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Arriwals;
