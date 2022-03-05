import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signIn } from "../../firebase/server";
import { Box, FormControl, TextField, Typography } from "@mui/material";
import LoginContainer from "./LoginContainer";
import TextFieldHiddenLabel from "../Vendors/OwnVendorPage/SideBar/Price";

export default function SignIn() {
  const { register, reset, handleSubmit } = useForm();

  const navigate = useNavigate();
  const nimadir = (data) => {
    console.log(data);
  };

  const onSubmit = (data) => {
    signIn(data, nimadir);
    navigate("../");
    reset();
  };

  return (
    <LoginContainer>
      <FormControl fullWidth>
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
            color={'textSecondary'}
            variant="p"
            sx={{ fontSize: "14px" }}
          >
            Log in with email & password
          </Typography>
          <TextField label={"hello world"}></TextField>
        </Box>
      </FormControl>
    </LoginContainer>
  );
}
