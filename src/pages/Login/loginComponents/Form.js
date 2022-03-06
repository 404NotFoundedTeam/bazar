import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
  Zoom,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";

const HookForm = ({ data, submit, type }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => submit(data);
  return (
    <Box sx={{ width: "100%" }}>
      <FormControl
        fullWidth
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
      >
        {data.map((item, i) => (
          <Box>
            <Typography fontSize={"14px"} mb={1} color={"primary"}>
              {item.title}
            </Typography>
            {item.type !== "select" ? (
              <TextField
                key={i}
                fullWidth
                sx={{ "& input": { padding: "12px 20px" } }}
                type={item.type || "text"}
                error={errors[item.name]}
                {...register(item.name, { ...(item.options || {}) })}
                placeholder={item.example || item.name}
              />
            ) : (
              <Select
                key={i}
                fullWidth
                sx={{ "& > div": { padding: "12px 20px" } }}
                error={errors["role"]}
                {...register("role", { required: true })}
              >
                <MenuItem component="option" selected value={0}>
                  Consumer
                </MenuItem>
                <MenuItem component="option" value={1}>
                  Vendor
                </MenuItem>
              </Select>
            )}
            <Zoom in={errors[item.name]}>
              <Typography ml={3} fontSize={"14px"} color={"error"}>
                {item.title} is required
              </Typography>
            </Zoom>
          </Box>
        ))}
        <Button size={"large"} color={type} variant="contained" type="submit">
          {type === "error" ? "Create account" : "Login"}
        </Button>
      </FormControl>
    </Box>
  );
};

export default HookForm;
