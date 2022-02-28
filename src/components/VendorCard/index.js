import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, IconButton } from "@mui/material";
import ImageAvatars from "../Mini-components/Avatar";
import RatingSIze from "../Mini-components/Rating";
import { Link } from "react-router-dom";

export default function VendorCard({ obj }) {
  console.log(obj);
  return (
    <Card
      sx={{
        position: "relative",
        color: "#fff",
      }}
      color="secondary"
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={obj.img}
      />

      <CardContent
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          color: "#fff !important",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          <span className="mr-2">{obj.vendorName}</span>
        </Typography>
        <Typography>
          <RatingSIze score={obj.rating()} sx={{ color: "yellow" }} />
        </Typography>
        <Box sx={{ marginTop: "10px" }}>
          <Typography
            variant="body2"
            color="cardColor"
            sx={{ marginBottom: "10px" }}
          >
            <AddLocationIcon /> <span className="mr-3">{obj.location}</span>
          </Typography>
          <Typography variant="body2" color="cardColor">
            <LocalPhoneIcon /> <span className="mr-3">{obj.phoneNumber}</span>
          </Typography>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          color: "#fff",
          position: "relative",
          backgroundColor: "rgba(246,249,252 , 0.3)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "10%",
            bottom: "50%",
            borderRadius: "50%",
            borderWidth: "4px",
          }}
        >
          <ImageAvatars avaImg={obj.avaImg} width="56px" height="56px" />
        </Box>
        <IconButton>
          <Link to={`/vendor/${obj.id}`}>
            <ArrowForwardIcon sx={{ color: "#c0c0c0 !important" }} />
          </Link>
        </IconButton>
      </CardActions>
    </Card>
  );
}
