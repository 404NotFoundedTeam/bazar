import React, { useState } from "react";
import styled from "styled-components";
import { Container, Grid, Typography } from "@mui/material";
import ImgBox from "../../components/ImgBox";
import MainButton from "../../components/Button";
import { Box } from "@mui/system";
import MySlider from "../../components/MySlider";
import { FaAdjust, FaAlignCenter } from "react-icons/fa";
function Home() {
  const scidka = [
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis inventore aut obcaecati ipsum aliquam ratione pariatur veritatis dolorum amet.",
    },
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis inventore aut obcaecati ipsum aliquam ratione pariatur veritatis dolorum amet.",
    },
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis inventore aut obcaecati ipsum aliquam ratione pariatur veritatis dolorum amet.",
    },
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis inventore aut obcaecati ipsum aliquam ratione pariatur veritatis dolorum amet.",
    },
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis inventore aut obcaecati ipsum aliquam ratione pariatur veritatis dolorum amet.",
    },
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis inventore aut obcaecati ipsum aliquam ratione pariatur veritatis dolorum amet.",
    },
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis inventore aut obcaecati ipsum aliquam ratione pariatur veritatis dolorum amet.",
    },
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis inventore aut obcaecati ipsum aliquam ratione pariatur veritatis dolorum amet.",
    },
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis inventore aut obcaecati ipsum aliquam ratione pariatur veritatis dolorum amet.",
    },
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis inventore aut obcaecati ipsum aliquam ratione pariatur veritatis dolorum amet.",
    },
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis inventore aut obcaecati ipsum aliquam ratione pariatur veritatis dolorum amet.",
    },
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis inventore aut obcaecati ipsum aliquam ratione pariatur veritatis dolorum amet.",
    },
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
    <>
      <HomeWrapper className="py-5 bg-white text-[#2B3445]">
        <Container maxWidth="md" sx={{ mb: 15 }}>
          <MySlider>
            {scidka.map((item, i) => (
              <Box>
                <Grid container direction={"row"} sx={{ alignItems: "center" }}>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <Typography
                        component={"h2"}
                        variant={"h3"}
                        className={"!font-bold !mb-3"}
                      >
                        50% Of For Your First Shoppign.
                      </Typography>
                      <Typography
                        sx={{ fontSize: "14px" }}
                        component={"p"}
                        variant={"p"}
                      >
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
        <Box component={"main"} sx={{ bgcolor: "#F6F9FC", mt: "60px" }}>
          <Container maxWidth={"lg"}>
            <Box className="flash-deals">
              <MySlider
                settings={{
                  nextArrow: <FaAlignCenter />,
                  prevArrow: <FaAdjust />,
                  dots: false,
                  slidesToShow: 4,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                      },
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      },
                    },
                  ],
                }}
              >
                {scidka.map((item, i) => (
                  <Box>
                    <Grid
                      container
                      direction={"row"}
                      sx={{ alignItems: "center" }}
                    >
                      <Grid item xs={12}>
                        <ImgBox src={item.img} alt={"Praduct"} />
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </MySlider>
            </Box>
          </Container>
        </Box>
      </HomeWrapper>
    </>
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
