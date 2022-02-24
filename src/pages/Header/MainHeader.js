import { InputUnstyled } from "@mui/base";
import {
  Autocomplete,
  Box,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import HeaderSearch from "./HeaderSearch";

function MainHeader() {
  const [searchCategory, setSearchCategory] = React.useState("");

  const handleChange = (event) => {
    setSearchCategory(event.target.value);
  };
  return (
    <WrapperMain className={"sticky top-0 left-0 py-5 bg-red-300"}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{}} className="logo">
            <img
              src="https://bazar-react.vercel.app/assets/images/logo2.svg"
              alt="logo"
            />
          </Box>
          <HeaderSearch/>
        </Box>
      </Container>
    </WrapperMain>
  );
}

const WrapperMain = styled.div`
  /* &.headerSticky{ */
  position: sticky !important;
  top: 0;
  left: 0;
  width: 100%;
  /* } */
`;

export default MainHeader;
