import { Container, Grid, Link } from "@mui/material";
// import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import React from "react";
import { FaPhone, FaRegEnvelope } from "react-icons/fa";
import styled from "styled-components";

function TopHeader() {
  return (
    <Wrapper>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            component={"ul"}
            sx={{ display: "flex", alignItems: "center", fontSize: "20px" }}
          >
            <Box
              component={"li"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <FaPhone className="icon" />
              +88012 3456 7894
            </Box>
            <Box
              component={"li"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <FaRegEnvelope className="icon" />
              support@ui-lib.com
            </Box>
          </Box>
          <Box
            component={"ul"}
            sx={{ display: "flex", alignItems: "center", fontSize: "20px" }}
          >
            <Box component={"li"}>
              <Link
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": { color: "red" },
                }}
                to="/faq"
              >
                Theme Faqs"
              </Link>
            </Box>
            <Box component={"li"}>
              <Link
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": { color: "red" },
                }}
                to="/help"
              >
                Need Help?
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 12px 0;
  background-color: #0f3460;
  .icon {
    font-size: 18px;
    color: #fff;
  }
  li {
    font-size: 14px;
    color: #fff;
    margin-left: 20px;
    gap: 10px;
  }
`;

export default TopHeader;
