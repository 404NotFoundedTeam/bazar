import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";

export default function Payment() {
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
        <FormControl onChange={(e) => console.log(e.target.value)}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="credit-card"
              control={<Radio />}
              label="Pay with credit card

"
            />
            <FormControlLabel
              value="paypal"
              control={<Radio />}
              label="Pay with Paypal

"
            />
            <FormControlLabel
              value="delivery"
              control={<Radio />}
              label="Cash On Delivery"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3} mt={3}>
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

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3} mt={3} sx={{ alignItems: "center" }}>
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
            <Button type="submit" fullWidth variant="outlined" color="error">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
