import {
  Facebook,
  Google,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";
import { AiOutlineApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ListItemCostum = styled(ListItem)({
  color: "#AEB4BE",
  fontSize: "14px",
  cursor: "pointer",
  lineHeight: 1.8,
  "&:hover": { color: "white" },
});

const AppPlay = ({ icon, title }) => {
  return (
    <Box
      sx={{
        color: "#fff",
        cursor: "pointer",
        borderRadius: 1,
        width: "170px",
        padding: "8px",
        alignItems: "center",
        display: "flex",
        bgcolor: "#0C2A4D",
        "& svg": { fontSize: "30px", mr: 1 },
      }}
    >
      {icon}
      <Box>
        <Typography sx={{ fontSize: "8px" }}>Download on the</Typography>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "bold", color: "#fff" }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box component={"footer"} sx={{ bgcolor: "#0C0E30", py: 7 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={4}>
            <Box>
              <img
                src="https://bazar-react.vercel.app/assets/images/logo.svg"
                alt="bazar"
              />
              <Typography
                parsagraph
                sx={{ color: "#AEB4BE", fontSize: "14px", mt: 3 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                libero id et, in gravida. Sit diam duis mauris nulla cursus.
                Erat et lectus vel ut sollicitudin elit at amet.
              </Typography>
              <Box display={"flex"} gap={2} mt={2}>
                <AppPlay icon={<FaGooglePlay />} title={"Google Play"} />
                <AppPlay icon={<AiOutlineApple />} title={"App Store"} />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={2}>
            <Typography variant="h5" color="white" mb={1}>
              About Us
            </Typography>
            <List p={0} m={0} fontSize={"14px"} size={"small"}>
              <ListItemCostum disablePadding>Carers</ListItemCostum>
              <ListItemCostum disablePadding>Our Stores|</ListItemCostum>
              <ListItemCostum disablePadding>Courses</ListItemCostum>
              <ListItemCostum disablePadding>Terms | Conditions</ListItemCostum>
              <ListItemCostum disablePadding>Private Police</ListItemCostum>
            </List>
          </Grid>
          <Grid item lg={3}>
            <Typography variant="h5" color="white" mb={1}>
              Customer Care
            </Typography>
            <List p={0} m={0} fontSize={"14px"} size={"small"}>
              <ListItemCostum disablePadding>Help Center</ListItemCostum>
              <ListItemCostum disablePadding>
                Our Stores|How to Buy
              </ListItemCostum>
              <ListItemCostum disablePadding>Your Order</ListItemCostum>
              <ListItemCostum disablePadding>
                Corporate & Bulk Purchasing
              </ListItemCostum>
              <ListItemCostum disablePadding>Returns & Refunds</ListItemCostum>
            </List>
          </Grid>
          <Grid item lg={3} sx={{ pl: { lg: 3 } }}>
            <Typography variant="h5" color="white" mb={1}>
              Contact Us
            </Typography>
            <List p={0} m={0} fontSize={"14px"} size={"small"}>
              <ListItemCostum disablePadding>
                70 Washington Square South, New York, NY 10012, United States
              </ListItemCostum>
              <ListItemCostum disablePadding>
                Email: uilib.help@gmail.com
              </ListItemCostum>
              <ListItemCostum disablePadding>
                Phone: +1 1123 456 780
              </ListItemCostum>
            </List>
            <Box
              sx={{
                mt: 2,
                "& > button": {
                  bgcolor: "#0C0D2E",
                  color: "#fff",
                  mr: 1,
                  "& > svg": { fontSize: "18px" },
                },
              }}
            >
              <IconButton size="small">
                <Facebook />
              </IconButton>
              <IconButton size="small">
                <Twitter />
              </IconButton>
              <IconButton size="small">
                <YouTube />
              </IconButton>
              <IconButton size="small">
                <Google />
              </IconButton>
              <IconButton size="small">
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
