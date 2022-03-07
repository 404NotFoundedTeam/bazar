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
import YouTubeIcon from "@mui/icons-material/YouTube";

const SocialLink = ({ item = "#", bgColor, icon }) => (
  <a href={item}>
    <IconButton
      sx={{
        backgroundColor: `${bgColor}`,
        color: "white",
        fontSize: "14px",
        "&:hover": { color: "white", backgroundColor: `${bgColor}` },
      }}
    >
      {icon}{" "}
    </IconButton>
  </a>
);

export default function MediaCard({ obj }) {
  return (
    <Box
      mb={2}
      sx={{
        position: "relative",
        minHeight: "350px",
        overflow: "hidden",
        borderRadius: "2px",
        backgroundColor: "#fff",
        backgroundImage: `url(${obj.img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 55%",
        objectFit: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Box
          mx={2}
          sx={{
            boxSizing: "border-box",
            // transform: {
            //   lg: "translateY(-30%)",
            // },
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
            gap: 4,
            "& .css-1pqm26d-MuiAvatar-img": {
              display: { xs: "none !important", sm: "block !important" },
            },
          }}
        >
          <ImageAvatars
            width="120px"
            height="120px"
            avaImg={obj.avaImg}
            sx={{
              borderWidth: "4px",
              borderColor: "black",
              borderStyle: "solid",
              borderRadius: "50% !important",
            }}
          />
          <Box sx={{ flex: 1, minWidth: "300px" }}>
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
                sx={{ boxShadow: "none !important", gap: "4px" }}
              >
                <SocialLink
                  bgColor="rgb(59, 89, 152)"
                  icon={<FacebookIcon />}
                  item={obj.socialLinks.facebook}
                />
                <SocialLink
                  bgColor="rgb(0, 172, 238)"
                  icon={<TwitterIcon />}
                  item={obj.socialLinks.twitter}
                />
                <SocialLink
                  bgColor="rgb(255, 0, 0)"
                  icon={<YouTubeIcon />}
                  item={obj.socialLinks.instagram}
                />
                <SocialLink
                  bgColor="rgb(225, 48, 108)"
                  icon={<InstagramIcon />}
                  item={obj.socialLinks.twitter}
                />
              </ButtonGroup>
            </Box>
            <Box
              className="bottomActions"
              mt={2}
              sx={{
                justifyContent: "space-between",
                display: "flex",
                p: 2,
                color: "rgb(125, 135, 156)",
              }}
            >
              <Box>
                <Box display="flex" alignItems="center">
                  <RatingSIze score={obj.rating()} />
                  <span style={{ marginLeft: "5px" }}>({obj.rated})</span>
                </Box>
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
