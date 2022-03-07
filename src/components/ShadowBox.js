import { Box } from "@mui/system";
import React from "react";

const ShadowBox = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        transition: "all .3s ease",
        borderRadius: 2,
        boxShadow: (theme) => theme.shadowsHeader.block,
        "&:hover": {
          boxShadow: (theme) => theme.shadowsHeader.box,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ShadowBox;
