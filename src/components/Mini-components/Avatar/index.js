import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function ImageAvatars({ avaImg, width, height }) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={avaImg}
        sx={{
          width: width,
          height: height,
          objectFit: "cover",
        }}
      />
    </Stack>
  );
}
