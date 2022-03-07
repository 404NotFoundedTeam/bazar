import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Links = ({ text, link, alt }) => {
  return (
    <Typography
      display={"block"}
      color={"primary"}
      sx={{ fontSize: "13px", marginTop: 3, textAlign: "center" }}
      align={"center"}
      variant={"p"}
      fontWeight={"500"}
    >
      {text}{" "}
      <Link
        style={{
          textDecoration: "underline",
          color: "#000",
          fontWeight: "700",
        }}
        to={link}
      >
        {alt}
      </Link>
    </Typography>
  );
};

export default Links;
