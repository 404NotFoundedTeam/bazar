import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
  return <Box component={"footer"} sx={}>
      <Container>
          <Grid container >
              <Grid item lg={5}>
                  <Box>
                      <img src="https://bazar-react.vercel.app/assets/images/logo.svg" alt="bazar"/>
                        <Typography parsagraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
                        </Typography>
                        
                  </Box>
              </Grid>
              <Grid item lg={2}></Grid>
              <Grid item lg={2}></Grid>
              <Grid item lg={3}></Grid>
          </Grid>
      </Container>
  </Box>;
};

export default Footer;
