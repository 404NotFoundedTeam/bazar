import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
    <Box>
      <Card
        sx={{
          position: "relative",
          "& .css-4ob670-MuiPaper-root-MuiCard-root": {
            overflow: "visible !important",
          },
        }}
      >
        <CardMedia component="img" image={obj.img} alt="green iguana" />
        <CardContent
          sx={{
            position: "absolute",
            bottom: "-80%",
            display: "flex",
            left: 0,
            "& .MuiCardContent-root": {
              overflow: "visible",
            },
          }}
        >
          <ImageAvatars width="120px" height="120px" />
          <Box
            sx={{
              flex: 1,
              minHeight: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Button variant="contained">{obj.vendorName}</Button>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                sx={{ boxShadow: "none !important" }}
              >
                <IconButton>
                  <TwitterIcon />
                </IconButton>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
              </ButtonGroup>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "blue",
              }}
            >
              <Box>
                <RatingSIze score={obj.rating} />
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
        </CardContent>
        {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
    </Box>
  );
}
