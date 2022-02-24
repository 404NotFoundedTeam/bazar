import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Paper from '@mui/material/Paper'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import Review from './Review'
import { Grid } from '@mui/material'
import { nanoid } from 'nanoid'
import ProductCards from './ProductCards'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const steps = ['Cart', 'Details', 'Payment', 'Review']

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />
    case 1:
      return <PaymentForm />
    case 2:
      return <Review />
    default:
      throw new Error('Unknown step')
  }
}

const theme = createTheme()

export default function Checkout() {
  const [data, setData] = React.useState([
    {
      id: nanoid(),
      img:
        'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75',
      name: 'Kawasaki 2020',
      price: 20000,
      score: 2,
      off: 0,
    },
    {
      id: nanoid(),
      img:
        'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75',
      name: 'Kawasaki 2020',
      price: 20000,
      score: 1,
      off: 0,
    },
    {
      id: nanoid(),
      img:
        'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F11.Kawasaki2020.png&w=1920&q=75',
      name: 'Kawasaki 2020',
      price: 20000,
      score: 5,
      off: 30,
    },
  ])

  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stepper activeStep={activeStep} sx={{ px: 3, pt: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Box sx={{ flexGrow: 1 }}>
              {data.map((item, index) => {
                return <ProductCards data={item} key={index} />
              })}
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 5, md: 10 }, p: { xs: 2, md: 3 } }}
            >
              <Typography component="h1" variant="h4" align="center">
                Checkout
              </Typography>

              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                      Thank you for your order.
                    </Typography>
                    <Typography variant="subtitle1">
                      Your order number is #2001539. We have emailed your order
                      confirmation, and will send you an update when your order
                      has shipped.
                    </Typography>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                          Back
                        </Button>
                      )}

                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 3, ml: 1 }}
                      >
                        {activeStep === steps.length - 1
                          ? 'Place order'
                          : 'Next'}
                      </Button>
                    </Box>
                  </React.Fragment>
                )}
              </React.Fragment>
            </Paper>
          </Grid>
        </Grid>

        <Copyright />
      </Container>
    </ThemeProvider>
  )
}
