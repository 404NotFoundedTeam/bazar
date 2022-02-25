import { Container, Grid, Link } from "@mui/material";
// import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import React from "react";
import { FaPhone, FaRegEnvelope } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function TopHeader() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            component={"button"}
            onClick={() => navigate("/")}
            sx={{ display: { xs: "block", md: "none" } }}
            className="logo"
          >
            <img
              className="w-[100px]"
              src="https://bazar-react.vercel.app/assets/images/logo.svg"
              alt="logo"
            />
          </Box>
          <Box
            component={"ul"}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              fontSize: "18px",
            }}
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
            sx={{ display: "flex", alignItems: "center", fontSize: "18px" }}
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
  padding: 10px 0;
  background-color: #0f3460;
  .icon {
    font-size: 18px;
    color: #fff;
  }
  li {
    font-size: 12px;
    color: #fff;
    margin-left: 20px;
    gap: 10px;
  }
`;

export default TopHeader;
