import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { useQuery } from 'react-query'
import { useForm } from 'react-hook-form'
import FormGroup from '@mui/material/FormGroup'
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material'
import { Box, maxWidth } from '@mui/system'

const ITEM_HEIGHT = 60
const ITEM_PADDING_TOP = 30
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

export default function PaymentForm() {
  const [countryName, setCountryName] = React.useState([])
  const [value, setValue] = React.useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://restcountries.com/v2/all?limit=20').then((res) =>
      res.json(),
    ),
  )
  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message

  const handleChange = (e) => {
    e.preventDefault()
    setCountryName(e.target.value)
  }
  const handleChange2 = (e) => {
    e.preventDefault()
    setCountryName(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '30px' }}>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{ my: 3, p: 2, boxShadow: 'rgb(3 0 71 / 9%) 0px 1px 3px' }}
      >
        <Grid item xs={12} md={6}>
          <TextField
            id="fullName"
            label="Full Name"
            fullWidth
            {...register('fullname')}
            autoComplete="cc-name"
            variant="outlined"
            color="error"
            size="small"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            size="small"
            id="emailAddress"
            label="Email Address"
            type={'email'}
            fullWidth
            {...register('email')}
            autoComplete="cc-number"
            variant="outlined"
            color="error"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            size="small"
            id="phoneNumber"
            label="Phone Number"
            fullWidth
            {...register('phoneNumber')}
            autoComplete="cc-exp"
            variant="outlined"
            color="error"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            size="small"
            id="company"
            label="Company"
            fullWidth
            {...register('company')}
            autoComplete="cc-csc"
            variant="outlined"
            color="error"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            size="small"
            id="zip-code"
            label="Zip Code"
            type={'number'}
            fullWidth
            {...register('zip-code')}
            autoComplete="cc-csc"
            variant="outlined"
            color="error"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth color="error">
            <InputLabel id="demo-multiple-name-label">Country</InputLabel>
            <Select
              {...register('country')}
              labelId="demo-multiple-name-label3"
              id="demo-multiple-name3"
              value={countryName}
              {...register('country')}
              onChange={handleChange}
              input={<OutlinedInput label="Country" />}
              MenuProps={MenuProps}
            >
              {data.map((item, index) => (
                <MenuItem key={index} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            size="small"
            id="address-1"
            label="Address 1"
            fullWidth
            {...register('address-1')}
            autoComplete="cc-csc"
            variant="outlined"
            color="error"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            size="small"
            id="address-2"
            label="Address 2"
            fullWidth
            {...register('address-2')}
            autoComplete="cc-csc"
            variant="outlined"
            color="error"
          />
        </Grid>
      </Grid>

      <Box
        fullWidth
        sx={{ my: 3, boxShadow: 'rgb(3 0 71 / 9%) 0px 1px 3px', p: 2 }}
      >
        {' '}
        <Typography variant="h6" sx={{ my: 2 }} gutterBottom>
          Billing Address
        </Typography>
        <Grid container spacing={3}></Grid>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                cheked={value}
                color="error"
                onChange={() => setValue((prev) => !prev)}
              />
            }
            label="Same as Shipping Address"
          />
        </FormGroup>
        {!value && (
          <Grid container spacing={3} mt={3}>
            <Grid item xs={12} md={6}>
              <TextField
                size="small"
                id="fullName2"
                label="Full Name"
                fullWidth
                {...register('fullname2')}
                autoComplete="cc-name"
                variant="outlined"
                color="error"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                size="small"
                id="emailAddress2"
                label="Email Address"
                type={'email'}
                fullWidth
                {...register('email2')}
                autoComplete="cc-number"
                variant="outlined"
                color="error"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                size="small"
                id="phoneNumber2"
                label="Phone Number"
                fullWidth
                {...register('phoneNumber2')}
                autoComplete="cc-exp"
                variant="outlined"
                color="error"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                size="small"
                id="company2"
                label="Company"
                fullWidth
                {...register('company2')}
                autoComplete="cc-csc"
                variant="outlined"
                color="error"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                size="small"
                id="zip-code2"
                label="Zip Code"
                type={'number'}
                fullWidth
                {...register('zip-code2')}
                autoComplete="cc-csc"
                variant="outlined"
                color="error"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth color="error">
                <InputLabel id="demo-multiple-name-label">Country</InputLabel>
                <Select
                  labelId="demo-multiple-name-label3"
                  id="demo-multiple-name3"
                  value={countryName}
                  {...register('country2')}
                  onChange={handleChange2}
                  input={<OutlinedInput label="Country" />}
                  MenuProps={MenuProps}
                >
                  {data.map((item, index) => (
                    <MenuItem key={index} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                size="small"
                id="address-1-2"
                label="Address 1"
                fullWidth
                {...register('address-1_2')}
                autoComplete="cc-csc"
                variant="outlined"
                color="error"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                size="small"
                id="address-2-2"
                label="Address 2"
                fullWidth
                {...register('address-2_2')}
                autoComplete="cc-csc"
                variant="outlined"
                color="error"
              />
            </Grid>
          </Grid>
        )}
      </Box>
      <Grid container spacing={3} mt={3}>
        <Grid item xs={12} md={6}>
          <Button variant="outlined" color="error" fullWidth>
            Back To Cart
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant="contained" color="error" type="submit" fullWidth>
            Procced To Payment
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
