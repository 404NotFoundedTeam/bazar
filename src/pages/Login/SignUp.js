import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { createUser } from "../../firebase/server";
import { useDispatch } from "react-redux";

export default function SignUp() {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    createUser(data, dispatch);
    navigate("../");
    reset();
  };

  return <p>sign up</p>;
}
