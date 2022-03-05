import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

export default function Payment() {
  const [chek, setChek] = React.useState(true);
  const [chek1, setChek1] = React.useState(false);
  const [chek2, setChek2] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Box>
        <RadioGroup name="use-radio-group" defaultValue="first">
          <MyFormControlLabel
            value="crdit-card"
            label="Pay with credit card"
            control={
              <Radio checked={chek} onClick={() => setChek((prev) => !prev)} />
            }
          />
          {chek && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    size="small"
                    id="card-number"
                    label="Card Number"
                    fullWidth
                    {...register("card-number")}
                    autoComplete="cc-name"
                    variant="outlined"
                    color="error"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="fullName3"
                    size="small"
                    label="Exp Data"
                    type="number"
                    fullWidth
                    placeholder="MM/DD"
                    {...register("full-name")}
                    autoComplete="cc-name"
                    variant="outlined"
                    color="error"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    size="small"
                    id="name-on-card"
                    label="Name On Card"
                    fullWidth
                    {...register("name-on-card")}
                    autoComplete="cc-name"
                    variant="outlined"
                    color="error"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    size="small"
                    id="name-on-card-2"
                    label="Name On Card"
                    fullWidth
                    {...register("name-on-card-2")}
                    autoComplete="cc-name"
                    variant="outlined"
                    color="error"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="outlined" color="error">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
          <MyFormControlLabel
            value="paypal"
            label="Pay with Paypal"
            control={
              <Radio
                checked={chek1}
                onClick={() => setChek1((prev) => !prev)}
              />
            }
          />
          {chek1 && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3} sx={{ alignItems: "center" }}>
                <Grid item xs={10}>
                  <TextField
                    size="small"
                    id="paypal-email"
                    label="Paypal Email "
                    fullWidth
                    {...register("paypal-email")}
                    autoComplete="cc-name"
                    variant="outlined"
                    color="error"
                    required
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="error"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
          <MyFormControlLabel
            value="delivery"
            label="Cash On Delivery"
            control={
              <Radio
                checked={chek2}
                onClick={() => {
                  if (chek2 === true) {
                    setChek(false);
                    setChek1(false);
                  }
                  return setChek2((prev) => !prev);
                }}
              />
            }
          />
        </RadioGroup>
      </Box>
    </>
  );
}
