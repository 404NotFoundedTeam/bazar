import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useForm } from 'react-hook-form'
import { TextField } from '@mui/material'

export default function PaymentCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Card sx={{ border: 'none', boxShadow: 0 }}>
        <React.Fragment>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Subtotal:
              </Typography>

              <Typography
                sx={{ mb: 1.5, fontSize: 20 }}
                variant="h4"
                color="bold"
              >
                $2640
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Shipping:
              </Typography>

              <Typography
                sx={{ mb: 1.5, fontSize: 20 }}
                variant="h4"
                color="bold"
              >
                -
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Tax:
              </Typography>

              <Typography
                sx={{ mb: 1.5, fontSize: 20 }}
                variant="h4"
                color="bold"
              >
                $40
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Discount:
              </Typography>

              <Typography
                sx={{ mb: 1.5, fontSize: 20 }}
                variant="h4"
                color="bold"
              >
                -
              </Typography>
            </Box>
            <Typography align="right" variant="h3">
              $2680
            </Typography>
          </CardContent>
          <CardActions>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                size="small"
                id="voucher"
                name="voucher"
                label="Voucher"
                fullWidth
                autoComplete="shipping address-line1"
                variant="outlined"
                color="error"
                {...register('vaucher')}
              />
              <Button
                fullWidth
                variant="outlined"
                sx={{ mt: 2 }}
                color="error"
                type="submit"
              >
                Apply Vaucher
              </Button>
            </form>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  )
}
