import { Box, Button, Container, Menu, MenuItem } from "@mui/material";
import React from "react";

const BottomHeader = () => {
  return (
    <Box
      sx={{
        paddingY: (theme) => theme.spacing(1),
        boxShadow: (theme) => theme.shadowsHeader.header,
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained">Dashboard</Button>
        <Menu>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Container>
    </Box>
  );
};

export default BottomHeader;
