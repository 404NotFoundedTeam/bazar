import React from "react";
import { Link } from "react-router-dom";
import { CgAsterisk } from "react-icons/cg";
import { Box, Typography } from "@mui/material";
import LoginContainer from "./loginComponents/LoginContainer";
import HookForm from "./loginComponents/Form";
import Links from "./loginComponents/Links";

export default function SignUp() {
  const signUpInputs = [
    {
      name: "fullName",
      example: "Palphs Advards",
      title: "Full Name",
      options: { required: true },
    },
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
    {
      name: "role",
      type: "select",
      title: "Your role",
      options: { required: true },
      elements: [{ val: "Vendor", }, { val: "Consumer",}],
    },
  ];
  const onSubmit = (data) => {
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
          Create Your Account
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
          Please fill all fields to continue
        </Typography>
        <Box px={{ sx: 0, md: "15px", lg: "25px" }}>
          <HookForm data={signUpInputs} submit={onSubmit} type={"error"} />
          <Links text={"Have account?"} link={"/login"} />
        </Box>
      </Box>
    </LoginContainer>
  );
}
