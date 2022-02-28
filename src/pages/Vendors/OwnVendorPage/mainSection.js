import * as React from "react";
import Button from "@mui/material/Button";
import { Box, ButtonGroup, IconButton, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import RatingSIze from "../../../components/rating";
import ImageAvatars from "../../../components/Mini-components/Avatar";

export default function MediaCard({ obj }) {
  return (
    <Box
      mb={2}
      sx={{
        position: "relative",
        minHeight: "200px",
        overflow: "hidden",
        borderRadius: "5px",
      }}
    >
      <Box>
        <img
          src={obj.img}
          alt="image"
          style={{ width: "100%", height: "220px", objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Box
          mx={2}
          sx={{
            boxSizing: "border-box",
            transform: {
              lg: "translateY(-30%)",
              md: "translateY(-15%)",
              sm: "translateY(0)",
            },
            display: "flex",
            width: "100%",
            gap: 4,
          }}
        >
          <ImageAvatars width="120px" height="120px" avaImg={obj.avaImg} />
          <Box sx={{ flex: "0.8" }}>
            <Box
              className="topActions"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Button variant="contained">{obj.vendorName}</Button>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                sx={{ boxShadow: "none !important" }}
              >
                <a
                  href={`${
                    obj.socail_links.twitter || "http://localhost:3000/vendor/0"
                  }`}
                >
                  <IconButton color="secondary">
                    <TwitterIcon />
                  </IconButton>
                </a>
                <a
                  href={`${
                    obj.socail_links.facebook ||
                    "http://localhost:3000/vendor/0"
                  }`}
                >
                  <IconButton color="secondary">
                    <FacebookIcon />
                  </IconButton>
                </a>

                <a
                  href={`${
                    obj.socail_links.youtube || "http://localhost:3000/vendor/0"
                  }`}
                >
                  <IconButton color="secondary">
                    <TwitterIcon />
                  </IconButton>
                </a>
                <a
                  href={`${
                    obj.socail_links.instagram ||
                    "http://localhost:3000/vendor/0"
                  }`}
                >
                  <IconButton color="secondary">
                    <InstagramIcon />
                  </IconButton>
                </a>
              </ButtonGroup>
            </Box>
            <Box
              className="bottomActions"
              mt={2}
              sx={{
                justifyContent: "space-between",
                display: "flex",
                p: 2,
                color: "rgb(43, 52, 69)",
              }}
            >
              <Box>
                <RatingSIze score={obj.rating()} />{" "}
                <Typography sx={{ marginTop: 3 }}>
                  <LocationOnIcon sx={{ marginRight: 1 }} />
                  {obj.location}
                </Typography>
                <Typography sx={{ marginTop: 3 }}>
                  <PhoneIcon sx={{ marginRight: 1 }} />
                  {obj.phoneNumber}
                </Typography>
              </Box>
              <Box>
                <Button variant="outlined">Contact Vendor</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
