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
          <Box sx={{ flex: "0.8", sm: { flex: 1 } }}>
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
                  item={obj.socail_links.facebook}
                />
                <SocialLink
                  bgColor="rgb(0, 172, 238)"
                  icon={<TwitterIcon />}
                  item={obj.socail_links.twitter}
                />
                <SocialLink
                  bgColor="rgb(255, 0, 0)"
                  icon={<YouTubeIcon />}
                  item={obj.socail_links.instagram}
                />
                <SocialLink
                  bgColor="rgb(225, 48, 108)"
                  icon={<InstagramIcon />}
                  item={obj.socail_links.twitter}
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
