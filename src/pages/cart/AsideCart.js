import { Close, ShoppingBagOutlined } from "@mui/icons-material";
import { Button, Grow, IconButton, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PlusBtn from "../../components/PlusBtn";
import { changeOpenCart } from "../../redux/actions/userActions";

const AsideCart = ({ open }) => {
  const cart = [];
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
            <Typography ml={2}>0 Item</Typography>
          </Box>
          <Box sx={{ px: 2, flex: 1, overflow: "auto" }}>
            <Box>
              <Box display={"flex"} alignItems="center" sx={{ py: 2 }}>
                <Box display={"flex"} flexDirection="column">
                  <PlusBtn type={true} />
                  <Typography
                    align="center"
                    fontSize={"18px"}
                    fontWeight="cold"
                  >
                    1
                  </Typography>
                  <PlusBtn type={false} />
                </Box>
                <img
                  style={{ width: "100px", marginLeft: "10px" }}
                  src={
                    "https://bazar-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                  }
                  alt={"car"}
                />
                <Box flex={1} px={1}>
                  <Typography variant="p" fontWeight="600">
                    {"Ford 2019"}
                  </Typography>
                  <Typography lineHeight={"20px"} fontSize={"12px"}>
                    ${"300"} x {"5"}
                  </Typography>
                  <Typography color="error" variant="p" fontWeight={"600"}>
                    ${1500}
                  </Typography>
                </Box>
                <IconButton>
                  <Close />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} alignItems="center" sx={{ py: 2 }}>
                <Box display={"flex"} flexDirection="column">
                  <PlusBtn type={true} />
                  <Typography
                    align="center"
                    fontSize={"18px"}
                    fontWeight="cold"
                  >
                    1
                  </Typography>
                  <PlusBtn type={false} />
                </Box>
                <img
                  style={{ width: "100px", marginLeft: "10px" }}
                  src={
                    "https://bazar-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                  }
                  alt={"car"}
                />
                <Box flex={1} px={1}>
                  <Typography variant="p" fontWeight="600">
                    {"Ford 2019"}
                  </Typography>
                  <Typography lineHeight={"20px"} fontSize={"12px"}>
                    ${"300"} x {"5"}
                  </Typography>
                  <Typography color="error" variant="p" fontWeight={"600"}>
                    ${1500}
                  </Typography>
                </Box>
                <IconButton>
                  <Close />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} alignItems="center" sx={{ py: 2 }}>
                <Box display={"flex"} flexDirection="column">
                  <PlusBtn type={true} />
                  <Typography
                    align="center"
                    fontSize={"18px"}
                    fontWeight="cold"
                  >
                    1
                  </Typography>
                  <PlusBtn type={false} />
                </Box>
                <img
                  style={{ width: "100px", marginLeft: "10px" }}
                  src={
                    "https://bazar-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                  }
                  alt={"car"}
                />
                <Box flex={1} px={1}>
                  <Typography variant="p" fontWeight="600">
                    {"Ford 2019"}
                  </Typography>
                  <Typography lineHeight={"20px"} fontSize={"12px"}>
                    ${"300"} x {"5"}
                  </Typography>
                  <Typography color="error" variant="p" fontWeight={"600"}>
                    ${1500}
                  </Typography>
                </Box>
                <IconButton>
                  <Close />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} alignItems="center" sx={{ py: 2 }}>
                <Box display={"flex"} flexDirection="column">
                  <PlusBtn type={true} />
                  <Typography
                    align="center"
                    fontSize={"18px"}
                    fontWeight="cold"
                  >
                    1
                  </Typography>
                  <PlusBtn type={false} />
                </Box>
                <img
                  style={{ width: "100px", marginLeft: "10px" }}
                  src={
                    "https://bazar-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                  }
                  alt={"car"}
                />
                <Box flex={1} px={1}>
                  <Typography variant="p" fontWeight="600">
                    {"Ford 2019"}
                  </Typography>
                  <Typography lineHeight={"20px"} fontSize={"12px"}>
                    ${"300"} x {"5"}
                  </Typography>
                  <Typography color="error" variant="p" fontWeight={"600"}>
                    ${1500}
                  </Typography>
                </Box>
                <IconButton>
                  <Close />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} alignItems="center" sx={{ py: 2 }}>
                <Box display={"flex"} flexDirection="column">
                  <PlusBtn type={true} />
                  <Typography
                    align="center"
                    fontSize={"18px"}
                    fontWeight="cold"
                  >
                    1
                  </Typography>
                  <PlusBtn type={false} />
                </Box>
                <img
                  style={{ width: "100px", marginLeft: "10px" }}
                  src={
                    "https://bazar-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                  }
                  alt={"car"}
                />
                <Box flex={1} px={1}>
                  <Typography variant="p" fontWeight="600">
                    {"Ford 2019"}
                  </Typography>
                  <Typography lineHeight={"20px"} fontSize={"12px"}>
                    ${"300"} x {"5"}
                  </Typography>
                  <Typography color="error" variant="p" fontWeight={"600"}>
                    ${1500}
                  </Typography>
                </Box>
                <IconButton>
                  <Close />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} alignItems="center" sx={{ py: 2 }}>
                <Box display={"flex"} flexDirection="column">
                  <PlusBtn type={true} />
                  <Typography
                    align="center"
                    fontSize={"18px"}
                    fontWeight="cold"
                  >
                    1
                  </Typography>
                  <PlusBtn type={false} />
                </Box>
                <img
                  style={{ width: "100px", marginLeft: "10px" }}
                  src={
                    "https://bazar-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                  }
                  alt={"car"}
                />
                <Box flex={1} px={1}>
                  <Typography variant="p" fontWeight="600">
                    {"Ford 2019"}
                  </Typography>
                  <Typography lineHeight={"20px"} fontSize={"12px"}>
                    ${"300"} x {"5"}
                  </Typography>
                  <Typography color="error" variant="p" fontWeight={"600"}>
                    ${1500}
                  </Typography>
                </Box>
                <IconButton>
                  <Close />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} alignItems="center" sx={{ py: 2 }}>
                <Box display={"flex"} flexDirection="column">
                  <PlusBtn type={true} />
                  <Typography
                    align="center"
                    fontSize={"18px"}
                    fontWeight="cold"
                  >
                    1
                  </Typography>
                  <PlusBtn type={false} />
                </Box>
                <img
                  style={{ width: "100px", marginLeft: "10px" }}
                  src={
                    "https://bazar-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                  }
                  alt={"car"}
                />
                <Box flex={1} px={1}>
                  <Typography variant="p" fontWeight="600">
                    {"Ford 2019"}
                  </Typography>
                  <Typography lineHeight={"20px"} fontSize={"12px"}>
                    ${"300"} x {"5"}
                  </Typography>
                  <Typography color="error" variant="p" fontWeight={"600"}>
                    ${1500}
                  </Typography>
                </Box>
                <IconButton>
                  <Close />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} alignItems="center" sx={{ py: 2 }}>
                <Box display={"flex"} flexDirection="column">
                  <PlusBtn type={true} />
                  <Typography
                    align="center"
                    fontSize={"18px"}
                    fontWeight="cold"
                  >
                    1
                  </Typography>
                  <PlusBtn type={false} />
                </Box>
                <img
                  style={{ width: "100px", marginLeft: "10px" }}
                  src={
                    "https://bazar-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                  }
                  alt={"car"}
                />
                <Box flex={1} px={1}>
                  <Typography variant="p" fontWeight="600">
                    {"Ford 2019"}
                  </Typography>
                  <Typography lineHeight={"20px"} fontSize={"12px"}>
                    ${"300"} x {"5"}
                  </Typography>
                  <Typography color="error" variant="p" fontWeight={"600"}>
                    ${1500}
                  </Typography>
                </Box>
                <IconButton>
                  <Close />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} alignItems="center" sx={{ py: 2 }}>
                <Box display={"flex"} flexDirection="column">
                  <PlusBtn type={true} />
                  <Typography
                    align="center"
                    fontSize={"18px"}
                    fontWeight="cold"
                  >
                    1
                  </Typography>
                  <PlusBtn type={false} />
                </Box>
                <img
                  style={{ width: "100px", marginLeft: "10px" }}
                  src={
                    "https://bazar-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                  }
                  alt={"car"}
                />
                <Box flex={1} px={1}>
                  <Typography variant="p" fontWeight="600">
                    {"Ford 2019"}
                  </Typography>
                  <Typography lineHeight={"20px"} fontSize={"12px"}>
                    ${"300"} x {"5"}
                  </Typography>
                  <Typography color="error" variant="p" fontWeight={"600"}>
                    ${1500}
                  </Typography>
                </Box>
                <IconButton>
                  <Close />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} alignItems="center" sx={{ py: 2 }}>
                <Box display={"flex"} flexDirection="column">
                  <PlusBtn type={true} />
                  <Typography
                    align="center"
                    fontSize={"18px"}
                    fontWeight="cold"
                  >
                    1
                  </Typography>
                  <PlusBtn type={false} />
                </Box>
                <img
                  style={{ width: "100px", marginLeft: "10px" }}
                  src={
                    "https://bazar-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                  }
                  alt={"car"}
                />
                <Box flex={1} px={1}>
                  <Typography variant="p" fontWeight="600">
                    {"Ford 2019"}
                  </Typography>
                  <Typography lineHeight={"20px"} fontSize={"12px"}>
                    ${"300"} x {"5"}
                  </Typography>
                  <Typography color="error" variant="p" fontWeight={"600"}>
                    ${1500}
                  </Typography>
                </Box>
                <IconButton>
                  <Close />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} alignItems="center" sx={{ py: 2 }}>
                <Box display={"flex"} flexDirection="column">
                  <PlusBtn type={true} />
                  <Typography
                    align="center"
                    fontSize={"18px"}
                    fontWeight="cold"
                  >
                    1
                  </Typography>
                  <PlusBtn type={false} />
                </Box>
                <img
                  style={{ width: "100px", marginLeft: "10px" }}
                  src={
                    "https://bazar-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                  }
                  alt={"car"}
                />
                <Box flex={1} px={1}>
                  <Typography variant="p" fontWeight="600">
                    {"Ford 2019"}
                  </Typography>
                  <Typography lineHeight={"20px"} fontSize={"12px"}>
                    ${"300"} x {"5"}
                  </Typography>
                  <Typography color="error" variant="p" fontWeight={"600"}>
                    ${1500}
                  </Typography>
                </Box>
                <IconButton>
                  <Close />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} alignItems="center" sx={{ py: 2 }}>
                <Box display={"flex"} flexDirection="column">
                  <PlusBtn type={true} />
                  <Typography
                    align="center"
                    fontSize={"18px"}
                    fontWeight="cold"
                  >
                    1
                  </Typography>
                  <PlusBtn type={false} />
                </Box>
                <img
                  style={{ width: "100px", marginLeft: "10px" }}
                  src={
                    "https://bazar-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                  }
                  alt={"car"}
                />
                <Box flex={1} px={1}>
                  <Typography variant="p" fontWeight="600">
                    {"Ford 2019"}
                  </Typography>
                  <Typography lineHeight={"20px"} fontSize={"12px"}>
                    ${"300"} x {"5"}
                  </Typography>
                  <Typography color="error" variant="p" fontWeight={"600"}>
                    ${1500}
                  </Typography>
                </Box>
                <IconButton>
                  <Close />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} alignItems="center" sx={{ py: 2 }}>
                <Box display={"flex"} flexDirection="column">
                  <PlusBtn type={true} />
                  <Typography
                    align="center"
                    fontSize={"18px"}
                    fontWeight="cold"
                  >
                    1
                  </Typography>
                  <PlusBtn type={false} />
                </Box>
                <img
                  style={{ width: "100px", marginLeft: "10px" }}
                  src={
                    "https://bazar-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                  }
                  alt={"car"}
                />
                <Box flex={1} px={1}>
                  <Typography variant="p" fontWeight="600">
                    {"Ford 2019"}
                  </Typography>
                  <Typography lineHeight={"20px"} fontSize={"12px"}>
                    ${"300"} x {"5"}
                  </Typography>
                  <Typography color="error" variant="p" fontWeight={"600"}>
                    ${1500}
                  </Typography>
                </Box>
                <IconButton>
                  <Close />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} alignItems="center" sx={{ py: 2 }}>
                <Box display={"flex"} flexDirection="column">
                  <PlusBtn type={true} />
                  <Typography
                    align="center"
                    fontSize={"18px"}
                    fontWeight="cold"
                  >
                    1
                  </Typography>
                  <PlusBtn type={false} />
                </Box>
                <img
                  style={{ width: "100px", marginLeft: "10px" }}
                  src={
                    "https://bazar-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                  }
                  alt={"car"}
                />
                <Box flex={1} px={1}>
                  <Typography variant="p" fontWeight="600">
                    {"Ford 2019"}
                  </Typography>
                  <Typography lineHeight={"20px"} fontSize={"12px"}>
                    ${"300"} x {"5"}
                  </Typography>
                  <Typography color="error" variant="p" fontWeight={"600"}>
                    ${1500}
                  </Typography>
                </Box>
                <IconButton>
                  <Close />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} alignItems="center" sx={{ py: 2 }}>
                <Box display={"flex"} flexDirection="column">
                  <PlusBtn type={true} />
                  <Typography
                    align="center"
                    fontSize={"18px"}
                    fontWeight="cold"
                  >
                    1
                  </Typography>
                  <PlusBtn type={false} />
                </Box>
                <img
                  style={{ width: "100px", marginLeft: "10px" }}
                  src={
                    "https://bazar-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                  }
                  alt={"car"}
                />
                <Box flex={1} px={1}>
                  <Typography variant="p" fontWeight="600">
                    {"Ford 2019"}
                  </Typography>
                  <Typography lineHeight={"20px"} fontSize={"12px"}>
                    ${"300"} x {"5"}
                  </Typography>
                  <Typography color="error" variant="p" fontWeight={"600"}>
                    ${1500}
                  </Typography>
                </Box>
                <IconButton>
                  <Close />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box px={2} pt={1}>
            <Button
              size={"large"}
              fullWidth
              color="error"
              sx={{ textTransform: "capitalize" }}
              variant="contained"
            >
              Chechout Now (${"750"})
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
            >
              View Cart
            </Button>
          </Box>
        </Box>
      </Slide>
    </>
  );
};

export default AsideCart;
