import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { Grid } from "@mui/material";
import { nanoid } from "nanoid";
import ProductCards from "./ProductCards";
import PaymentCard from "./PaymentCard";
import Payment from "./Payment";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  changeSoniProduct,
  deleteProduct__K,
} from "../../redux/actions/userActions";
import { ADD_TO_ORDERS } from "../../redux/types";
import { addOrder } from "../../redux/actions/orderActions";
import { addOrderToVendor } from "../../redux/actions/vendorActions";

const steps = ["Cart", "Details", "Payment", "Review"];

const theme = createTheme();

export default function Checkout() {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = React.useState(0);

  const korzina = useSelector((state) => state.user.korzina);
  const orders = useSelector((state) => state.orders);
  const cart = Object.entries(korzina);
  const products = useSelector((state) => state.products);
  const [sum, setSum] = React.useState(0);

  console.log(products);
  React.useEffect(() => {
    let s = 0;
    cart.forEach((i) => {
      s += products[i[0]].price * i[1];
    });
    setSum(s);
  }, [cart]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    let id = nanoid();
    addOrderToVendor({ orderId: id, vendorId: 0 });
    addOrder({
      orderId: id,
      orderData: {
        id,
        date: new Date(),
        status: "pending",
        products: Object.fromEntries(cart),
        price: sum,
        address: "Amir Temur",
        payment: "debit card",
        off: 10,
        shipping: 12,
      },
    });
    addOrder({});
    console.log("orders++++++++>", orders);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <PaymentForm />;
      case 2:
        return <Payment />;
      // case 3:
      //   return <Review />;
      case 5:
        return <PaymentCard sum={sum} />;
      case 10:
        return <PaymentCard />;
      // case 15:
      //   return <PaymentCard />;
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
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
            {/* {console.log(activeStep === steps.length)} */}

            {activeStep === 0 ? (
              <React.Fragment>
                <Box sx={{ flexGrow: 1 }}>
                  {cart.map((element, i) => {
                    const item = products[element[0]];
                    return (
                      <ProductCards
                        data={item}
                        key={item.name + 1}
                        deleteProduct__K={deleteProduct__K}
                        changeSoniProduct={changeSoniProduct}
                        element={element}
                        cart={cart}
                        products={products}
                      />
                    );
                  })}
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep === 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box> */}
              </React.Fragment>
            )}
          </Grid>
          <Grid item xs={4}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 5, md: 10 }, p: { xs: 2, md: 3 } }}
            >
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
                    {getStepContent(activeStep * 5)}
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                          Back
                        </Button>
                      )}

                      <Button
                        type="submit"
                        variant="contained"
                        color="error"
                        fullWidth
                        onClick={handleNext}
                        sx={{ mt: 3 }}
                      >
                        {activeStep === steps.length - 1
                          ? "Place order"
                          : "Next"}
                      </Button>
                    </Box>
                  </React.Fragment>
                )}
              </React.Fragment>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
