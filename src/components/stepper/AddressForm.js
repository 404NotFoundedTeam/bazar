import * as React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material'
import { useQuery } from 'react-query'
import { useForm } from 'react-hook-form'

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

export default function AddressForm({ sum }) {
  let [countryName, setCountryName] = React.useState([])
  let [cityName, setCityName] = React.useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://restcountries.com/v2/all').then((res) => res.json()),
  )
  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message

  const handleChange = (event) => {
    event.preventDefault()
    setCountryName(event.target.value)
  }

  const handleChange2 = (event) => {
    event.preventDefault()
    setCityName(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography color={'gray'} component={'h3'} variant="h6">
            Total:
          </Typography>
          <Typography component={'h3'} variant="h6">
            ${sum}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="voucher"
            name="voucher"
            label="Voucher"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
            color="error"
            {...register('vaucher')}
          />
          <Button variant="outlined" color="error" sx={{ mt: 3 }} fullWidth>
            Apply Vaucher
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography mb={'10px'}>Shipping Estimates</Typography>
          <FormControl fullWidth color="error">
            <InputLabel id="demo-multiple-name-label">Country</InputLabel>
            <Select
              {...register('country')}
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={countryName}
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

          <FormControl fullWidth sx={{ mt: 2 }} color="error">
            <InputLabel id="demo-multiple-name-label2">City</InputLabel>
            <Select
              {...register('city')}
              labelId="demo-multiple-name-label2"
              id="demo-multiple-name2"
              value={cityName}
              onChange={handleChange2}
              input={<OutlinedInput label="City" />}
              MenuProps={MenuProps}
            >
              {data.map((item, index) => (
                <MenuItem key={index} value={item.capital}>
                  {item.capital}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            sx={{ mt: 2 }}
            id="zip-code"
            name="zip-code"
            label="Zip code"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
            color="error"
            {...register('zip-code')}
            type="number"
            placeholder="3110"
          />
        </Grid>
        <Grid item xs={12} sx={{}}>
          <Button color="error" fullWidth variant="outlined">
            Calculate Shipping
          </Button>
          <Button
            type="submit"
            color="error"
            sx={{ mt: 3 }}
            fullWidth
            variant="contained"
          >
            Checkout Now
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
