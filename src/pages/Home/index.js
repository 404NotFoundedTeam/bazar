import React from "react";
import styled from "styled-components";
import { Button, Container, Grid, Typography } from "@mui/material";
import ImgBox from "../../components/ImgBox";
import MainButton from "../../components/Button";
import { Box } from "@mui/system";
import MySlider from "../../components/MySlider";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const scidka = [
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis inventore aut obcaecati ipsum aliquam ratione pariatur veritatis dolorum amet.",
    },
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis inventore aut obcaecati ipsum aliquam ratione pariatur veritatis dolorum amet.",
    },
  ];
  return (
    <HomeWrapper className="py-5 text-[#2B3445] mb-10">
      <Container >
        <MySlider settings={settings}>
          {scidka.map((item, i) => (
            <Box>
              <Grid container direction={"row"} sx={{alignItems: "center"}}>
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography
                      component={"h2"}
                      variant={"h2"}
                      className={"!font-bold !mb-3"}
                    >
                      50% Of For Your First Shoppign.
                    </Typography>
                    <Typography component={"p"} variant={"p"}>
                      {item.desc}
                    </Typography>
                    <MainButton
                      variant={"contained"}
                      className={"!py-3 !px-6 !mt-7"}
                    >
                      Shop Now
                    </MainButton>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ImgBox src={item.img} alt={"Praduct"} />
                </Grid>
              </Grid>
            </Box>
          ))}
        </MySlider>
      </Container>
      <Box component={"main"} sx = {{bgcolor: "#F6F9FC", mt: "60px"}}>
          <Container>
            
          </Container>
      </Box>
    </HomeWrapper>
  );
}
const HomeWrapper = styled.div`
  .slick-dots {
    button {
      border-radius: 50%;
      padding: 0 !important;
      border: 1px solid #0f3460 !important;
      &::before {
        display: flex;
        width: 100% !important;
        height: 100% !important;
        justify-content: center;
        padding-top: 3px;
        align-items: center;
        color: #0f3460 !important;
        font-size: 12px;
      }
    }
  }
`;

export default Home;
