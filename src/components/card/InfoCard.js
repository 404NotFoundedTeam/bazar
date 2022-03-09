import { IconButton, Typography } from "@mui/material";
import { Box, padding } from "@mui/system";
import React from "react";
import ShadowBox from "../ShadowBox";

const InfoCard = ({ icon, title, desc }) => {
  return (
    <ShadowBox>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
        }}
      >
        <IconButton
          sx={{
            width: { sm: "60px", lg: "80px", xs: "40px" },
            height: { sm: "60px", lg: "80px", xs: "40px" },
            bgcolor: "#F5F5F5",
            mb: 3,
          }}
          size={"large"}
        >
          {icon}
        </IconButton>
        <Typography
          sx={{ fontSize: "18px", fontWeight: "600", mb: 1 }}
          variant="h6"
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "13px",
            color: (theme) => theme.palette.primary.light,
            textAlign: "center",
          }}
          variant="p"
        >
          {desc}
        </Typography>
      </Box>
    </ShadowBox>
  );
};

export default InfoCard;
