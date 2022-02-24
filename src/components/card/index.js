import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import RatingSIze from "../rating";
import { Box } from "@mui/system";
import { FaPlus } from "react-icons/fa";
import { Grid, IconButton } from "@mui/material";
import { CenterFocusStrong } from "@mui/icons-material";

export default function MainCard({ data }) {
  return (
    <Card
      sx={{
        width: "100%",
        // mt: 2,
        boxShadow: "rgb(3 0 71 / 9%) 0px 1px 3px",
        fontFamily: "roboto !important",
      }}
    >
      {data.off > 0 && (
        <Box
          component={"div"}
          color="primary"
          variant="contained"
          sx={{
            background: "rgb(210, 63, 87)",
            px: 2,
            py: 1,
            display: "flex",
            alignItems: "center",
            position: "absolute",
            borderRadius: "20px",
            color: "white",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          <Typography>{data.off}%</Typography>
          <Typography sx={{ fontSize: "12px" }}> off</Typography>
        </Box>
      )}
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={data.img}
        sx={{}}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {data.name}
        </Typography>

        <RatingSIze score={data.score} />
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "between",
            alignItems: "center",
          }}
        >
          <Box
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 1 }}
          >
            <Typography color="primary" variant="body1">
              ${data.price}
            </Typography>
            <IconButton size="small" color="primary" variant="outlined">
              <FaPlus />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
