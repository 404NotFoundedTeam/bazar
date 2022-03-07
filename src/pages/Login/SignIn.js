import React from "react";
import Links from "./loginComponents/Links";
import { Box, Typography } from "@mui/material";
import LoginContainer from "./loginComponents/LoginContainer";
import HookForm from "./loginComponents/Form";

export default function SignIn() {
  const signInInputs = [
    {
      name: "email",
      type: "email",
      title: "Email",
      example: "example@mail.com",
      options: { required: true },
    },
    {
      name: "password",
      type: "password",
      example: "***********",
      title: "Password",
      options: { required: true },
    },
  ];
  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <LoginContainer>
      <Box display={"flex"} justifyContent="center" flexDirection={"column"}>
        <Typography
          sx={{ fontWeight: "bold" }}
          variant="h5"
          align="center"
          gutterBottom
        >
          Welcome To Ecommerce
        </Typography>
        <Typography
          align="center"
          gutterBottom
          color={"textSecondary"}
          variant="p"
          fontWeight={"700"}
          mb={3}
          sx={{ fontSize: "13px" }}
        >
          Log in with email & password
        </Typography>
        <Box px={{ sx: 0, md: "15px", lg: "25px" }}>
          <HookForm data={signInInputs} submit={submitForm} type={"primary"} />
          <Links text={"Don’t have account?"} link={"/signup"} />
        </Box>
      </Box>
    </LoginContainer>
  );
}
