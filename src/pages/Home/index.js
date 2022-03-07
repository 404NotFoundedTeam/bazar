import React from "react";
import styled from "styled-components";
import { Container, Grid, Typography } from "@mui/material";
import ImgBox from "../../components/ImgBox";
import MainButton from "../../components/Button";
import { Box } from "@mui/system";
import MySlider from "../../components/MySlider";
import { FaAdjust, FaAlignCenter } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import HomeBlock from "./HomeComp/Block";
import Arriwals from "./HomeComp/NewProducts";
import { MdFiberNew } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import MainCard from "../../components/card";
import { useSelector } from "react-redux";
import { Category } from "@mui/icons-material";
import CategoryCard from "../../components/card/CategoryCard";
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

  const arrivals = [
    {
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(2).png&w=384&q=75",
      title: "Perferendis",
      price: 300,
    },
    {
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(2).png&w=384&q=75",
      title: "Perferendis",
      price: 300,
    },
    {
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(2).png&w=384&q=75",
      title: "Perferendis",
      price: 300,
    },
    {
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(2).png&w=384&q=75",
      title: "Perferendis",
      price: 300,
    },
    {
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(2).png&w=384&q=75",
      title: "Perferendis",
      price: 300,
    },
    {
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(2).png&w=384&q=75",
      title: "Perferendis",
      price: 300,
    },
    {
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(2).png&w=384&q=75",
      title: "Perferendis",
      price: 300,
    },
    {
      img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(2).png&w=384&q=75",
      title: "Perferendis",
      price: 300,
    },

    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      title: "Perferendis",
      price: 300,
    },
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      title: "Perferendis",
      price: 300,
    },
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      title: "Perferendis",
      price: 300,
    },
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      title: "Perferendis",
      price: 300,
    },
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      title: "Perferendis",
      price: 300,
    },
    {
      img: "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
      title: "Perferendis",
      price: 300,
    },
  ];

  const categoriesObj = useSelector((state) => state.categories.categories);
  const categories = Object.entries(categoriesObj).sort(
    (a, b) => a[1].products?.length - b[1].products?.length
  );

  const products = useSelector((state) => state.products);
  const productsArr = Object.entries(products);
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
          <Container>
            <HomeBlock
              title="All Products"
              link={"/salepage"}
              icon={<AiFillThunderbolt />}
            >
              <Grid container spacing={3}>
                {productsArr.slice(0, 4).map((item, i) => (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MainCard key={i} data={item[1]} id={item[0]} />
                  </Grid>
                ))}
              </Grid>
            </HomeBlock>
            <HomeBlock title={"Top Categories"} link="#" icon={<BiCategory />}>
              <Grid container spacing={3}>
                {categories.slice(0, 4).map((item, i) => (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CategoryCard key={i} data={item[1]} id={item[0]} />
                  </Grid>
                ))}
              </Grid>
            </HomeBlock>
            <HomeBlock icon={<MdFiberNew />} title={"New Arrivals"} link={"#"}>
              <Arriwals data={arrivals} />
            </HomeBlock>
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
