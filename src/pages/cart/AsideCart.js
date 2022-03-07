import { Close, ShoppingBagOutlined } from "@mui/icons-material";
import { Button, Grow, IconButton, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PlusBtn from "../../components/PlusBtn";
import {
  changeOpenCart,
  changeSoniProduct,
  deleteProduct__K,
} from "../../redux/actions/userActions";

const AsideCart = ({ open }) => {
  const navigate = useNavigate();
  const korzina = useSelector((state) => state.user.korzina);
  const cart = Object.entries(korzina);
  const cartProducsSum = cart.length;
  const products = useSelector((state) => state.products);
  const [sum, setSum] = useState(0);
  useEffect(() => {
    let s = 0;
    cart.forEach((i) => {
      s += products[i[0]].price * i[1];
    });
    setSum(s);
  }, [cart]);
  return (
    <>
      <Grow timeout={10} in={open}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            bgcolor: "rgba(0, 0, 0, 0.5)",
            width: "100%",
            height: "100vh",
            zIndex: 99999,
          }}
          onClick={() => {
            changeOpenCart(false);
          }}
        ></Box>
      </Grow>
      <Slide timeout={300} direction="left" in={open}>
        <Box
          sx={{
            width: "100%",
            maxWidth: "400px",
            height: "100vh",
            position: "fixed",
            bgcolor: "#fff",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            top: 0,
            padding: "0",
            right: 0,
            boxShadow: (theme) => theme.shadowsHeader.card,
            zIndex: 999999,
          }}
        >
          <Box
            py={3}
            px={2}
            sx={{ borderBottom: "1px solid #dfe6e9" }}
            display="flex"
            alignItems={"center"}
          >
            <ShoppingBagOutlined />
            <Typography ml={2}>{cartProducsSum} Item</Typography>
          </Box>
          <Box
            sx={{
              px: 2,
              flex: 1,
              overflow: "auto",
              display: cartProducsSum === 0 ? "none" : "block",
            }}
          >
            {cart.map((element, i) => {
              const item = products[element[0]];
              return (
                <Box key={item.name + i}>
                  <Box display={"flex"} alignItems="center" sx={{ py: 2 }}>
                    <Box display={"flex"} flexDirection="column">
                      <PlusBtn
                        type={true}
                        onClick={() => {
                          changeSoniProduct(element[0], true);
                        }}
                      />
                      <Typography
                        align="center"
                        fontSize={"18px"}
                        fontWeight="cold"
                      >
                        {element[1]}
                      </Typography>
                      <PlusBtn
                        onClick={() => {
                          changeSoniProduct(element[0], false);
                        }}
                        type={false}
                        disabled={element[1] <= 1}
                      />
                    </Box>
                    <img
                      style={{ width: "100px", marginLeft: "10px" }}
                      src={
                        item.productsImg ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3-HBdZNC4ZdhEpF3H-QcM8XzYXsBbjWMrg&usqp=CAU"
                      }
                      alt={"car"}
                    />
                    <Box flex={1} px={1}>
                      <Typography variant="p" fontWeight="600">
                        {item.name}
                      </Typography>
                      <Typography lineHeight={"20px"} fontSize={"12px"}>
                        ${item.price} x {element[1]}
                      </Typography>
                      <Typography color="error" variant="p" fontWeight={"600"}>
                        ${item.price * element[1]}
                      </Typography>
                    </Box>
                    <IconButton
                      onClick={() => {
                        deleteProduct__K(element[0]);
                      }}
                    >
                      <Close />
                    </IconButton>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box px={2} pt={1} display={cartProducsSum === 0 ? "none" : "block"}>
            <Button
              size={"large"}
              fullWidth
              color="error"
              sx={{ textTransform: "capitalize" }}
              variant="contained"
            >
              Chechout Now (${sum})
            </Button>
            <Button
              size={"large"}
              fullWidth
              sx={{
                display: "block",
                mt: 1,
                mb: 2,
                textTransform: "capitalize",
              }}
              color="error"
              variant="outlined"
              onClick={() => navigate("/cart")}
            >
              View Cart
            </Button>
          </Box>
          <Box
            sx={{
              flex: 1,
              marginTop: "-50px",
              display: cartProducsSum === 0 ? "flex" : "none",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              style={{ width: "100%", maxWidth: "100px" }}
              alt="free bag"
              src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogos%2Fshopping-bag.svg&w=96&q=75"
            />
            <Typography
              sx={{
                textAlign: "center",
                color: "#999",
                width: "100%",
                maxWidth: "200px",
                fontSize: "14px",
                mt: 3,
              }}
            >
              Your shopping bag is empty. Start shopping
            </Typography>
          </Box>
        </Box>
      </Slide>
    </>
  );
};

export default AsideCart;
