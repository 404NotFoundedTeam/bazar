import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Portal,
  Slide,
  Zoom,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { FaAccusoft } from "react-icons/fa";

const BottomHeader = () => {
  const [show, setShow] = useState("false");
  const menu = useRef();
  return (
    <Box
      sx={{
        paddingY: (theme) => theme.spacing(1),
        zIndex: "40",
        boxShadow: (theme) => theme.shadows.header,
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid container>
          <Grid item md={4} lg={3} sx={{ position: "relative" }}>
            <Button
              sx={{ width: "100%", display: "block" }}
              variant="contained"
              onClick={() => setShow((i) => !i)}
            >
              Dashboard
            </Button>
            <Zoom in={show} timeout={300}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50px",
                  left: "0",
                  width: "100%",
                  zIndex: "20 !important",
                  bgcolor: "#fff",
                  boxShadow: (theme) => theme.shadows.header,
                }}
              >
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <FaAccusoft />
                    </ListItemIcon>
                    <ListItemText primary="Single-line item" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FaAccusoft />
                    </ListItemIcon>
                    <ListItemText primary="Single-line item" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FaAccusoft />
                    </ListItemIcon>
                    <ListItemText primary="Single-line item" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FaAccusoft />
                    </ListItemIcon>
                    <ListItemText primary="Single-line item" />
                  </ListItem>
                </List>
              </Box>
            </Zoom>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BottomHeader;
