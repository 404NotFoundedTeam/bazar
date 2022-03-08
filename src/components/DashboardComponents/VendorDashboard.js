import { ArrowRightAlt } from "@mui/icons-material";
import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Pagination,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
  Button,
  Box,
  Collapse,
  Alert,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { dispatch, store } from "../../redux/store";
import DeleteIcon from "@mui/icons-material/Delete";
import { nanoid } from "nanoid";
import {
  addNewProduct,
  addNewProductToVendor,
  deleteOrderProduct,
  deleteProduct,
  updateVendor,
} from "../../redux/actions/vendorActions";
import { deleteOrder, updateOrder } from "../../redux/actions/orderActions";

const useStyles = makeStyles((theme) => ({
  activeStyle: {
    "& .MuiListItemButton-root": {
      borderLeft: `4px solid ${theme.palette.error.main}`,
      backgroundColor: "transparent",
      color: theme.palette.error.main,
      "& .MuiSvgIcon-root": {
        color: theme.palette.error.main,
      },
    },
  },
  tableHeader: {
    backgroundColor: "transparent !important",
    padding: "0 18px",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    "& p": { width: "15%", fontSize: 18 },
    "& p:last-child": { width: "8%" },
    "& p:nth-child(2)": { width: "30%" },
    "& p:first-child": { width: "13%" },
    color: `${theme.palette.text.secondary} !important`,
    margin: "0 0 10px",
  },
  ordersBox: {
    "& div": {
      boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px 0px",
      borderRadius: 8,
      padding: "14px 18px",
      marginBottom: "16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      width: "100%",
      "& p": {
        width: "15%",
        fontWeight: 100,
        margin: 0,
      },
      "& p:last-child": { width: "8%" },
      "& p:nth-child(2)": { width: "30%" },
      "& p:first-child": { width: "13%" },
    },
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    padding: "4px 16px !important",
    fontSize: "12px !important",
    textTransform: "capitalize !important",
  },
  addressBox: {
    "& div": {
      boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px 0px",
      borderRadius: 8,
      padding: "14px 18px",
      marginBottom: "16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      gap: "10px",
      "& p": {
        width: "100%",
        fontWeight: 100,
        margin: 0,
        textAlign: "center",
      },
      "& p:last-child": { width: "50%" },
      "& p:first-child": { width: "50%" },
    },
  },
}));

export const Dashboard = () => {
  const vendors = useSelector((state) => state.vendors);
  //TODO id olib kelish kere kirgan vendornikini
  const vendor = vendors[0];
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <Paper
            sx={{
              minWidth: { xs: "250px", md: "290px" },
              padding: "24px",
              textAlign: "center",
            }}
          >
            <Typography color="textSecondary">
              Earnings (before taxes)
            </Typography>
            <Typography variant="h4" fontWeight="bold" sx={{ my: 1 }}>
              ${vendor.balance.toFixed(2)}
            </Typography>
            <Typography color="textSecondary">
              after associated vendor fees
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper
            sx={{
              minWidth: { xs: "250px", md: "290px" },
              padding: "24px",
              textAlign: "center",
            }}
          >
            <Typography color="textSecondary">Your balance</Typography>
            <Typography variant="h4" fontWeight="bold" sx={{ my: 1 }}>
              ${vendor.dailyBalance}
            </Typography>
            <Typography color="textSecondary">
              processed on {new Date().toDateString()}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper sx={{ padding: "24px", textAlign: "center" }}>
            <Typography color="textSecondary">Pending Orders</Typography>
            <Typography variant="h4" fontWeight="bold" sx={{ my: 1 }}>
              {vendor.orders.length}
            </Typography>
            <Typography color="textSecondary">7/3/2020 - 8/1/2020</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Paper sx={{ padding: "24px" }}>
            <Typography fontWeight="bold">Sale</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper
            sx={{ minWidth: { xs: "250px", md: "290px" }, padding: "24px" }}
          >
            <Typography fontWeight="bold">Top countries</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export const VendorProducts = () => {
  const classes = useStyles();
  const products = useSelector((state) => state.products);
  const vendors = useSelector((state) => state.vendors);
  const vendorProducts = vendors[0].products;
  const filteredProducts = [];
  for (let i = 0; i < vendorProducts.length; i++)
    filteredProducts.push(products[vendorProducts[i]]);
  const [currentOrders, setCurrentOrders] = useState([...filteredProducts]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(5);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const presentOrders = currentOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const pageNumbers = Math.ceil(currentOrders.length / ordersPerPage);
  return (
    <div>
      <Paper
        className={classes.tableHeader}
        elevation={0}
        sx={{ display: { xs: "none !important", sm: "flex !important" } }}
      >
        <Typography>Image</Typography>
        <Typography>Name</Typography>
        <Typography>Stock</Typography>
        <Typography>Price</Typography>
        <Typography>Sale</Typography>
        <Typography></Typography>
      </Paper>
      <div className={classes.ordersBox}>
        {presentOrders.map((product) => {
          return (
            product && (
              <NavLink to="../edit-product" state={JSON.stringify(product)}>
                <Paper elevation={1}>
                  <Typography>
                    <img
                      style={{
                        borderRadius: "50%",
                        width: "35px",
                        height: "35px",
                        objectFit: "cover",
                        display: "inline-block",
                        margin: "0 auto",
                      }}
                      src={product.productsImg}
                      alt=""
                    />
                  </Typography>
                  <Typography>{product.name}</Typography>
                  <Typography>{product.stock}</Typography>
                  <Typography>${product.price}</Typography>
                  <Typography>
                    ${product.price - (product.price * product.off) / 100}
                  </Typography>
                  <Typography color="textSecondary">
                    <ArrowRightAlt />
                  </Typography>
                </Paper>
              </NavLink>
            )
          );
        })}
      </div>
      <Pagination
        className={classes.pagination}
        onChange={(e, page) => setCurrentPage(page)}
        variant="outlined"
        count={pageNumbers}
      ></Pagination>
    </div>
  );
};

export default function TransitionAlerts({ open, message, setOpen, sx }) {
  return (
    <Box sx={sx}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{
            mb: 2,
            backgroundColor: "white",
            boxShadow: "rgba(3, 0, 71, 0.3) 0px 1px 3px 0px !important",
          }}
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
}

export const AddProduct = () => {
  return <ProductForm formType={"Add product"} message="Added" />;
};

export const EditProduct = () => {
  const location = useLocation();
  const defVal = JSON.parse(location.state);
  return <ProductForm defVal={defVal} formType="Save" message="Saved" />;
};

export const ProductForm = ({ defVal, formType, message }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const vendorId = 0;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { ...(defVal ? defVal : {}) } });

  const onSubmit = (data) => {
    if (defVal) {
      data = {
        id: defVal.id,
        ...data,
        price: parseFloat(data.price),
        stock: parseFloat(data.stock),
        off: parseFloat(data.off),
        rating: function () {
          return (this.star / this.rated).toFixed(1);
        },
      };
    } else {
      let id = nanoid();
      addNewProductToVendor({ vendorId, productId: id });
      data = {
        ...data,
        id,
      };
    }

    addNewProduct(data);
    setOpen(true);
    setTimeout(() => setOpen(false), 3000);
  };
  const categories = useSelector((state) => state.categories.categories);
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ position: "relative" }}>
      <TransitionAlerts
        message={message}
        open={open}
        setOpen={setOpen}
        sx={{
          position: "absolute !important",
          bottom: 0,
          left: "25%",
          trasnform: "translate(-50%, -50%)",
          width: "70%",
          zIndex: 10,
        }}
      />
      <Paper sx={{ padding: "24px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("name", { required: true })}
              id="outlined-required"
              label="Name"
              fullWidth
              error={errors["name"]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("brand", { required: true })}
              id="outlined-required"
              label="Brand"
              fullWidth
              error={errors["brand"]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("stock", { required: true })}
              label="Stock"
              type="number"
              id="outlined-start-adornment"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">pcs.</InputAdornment>
                ),
              }}
              fullWidth
              error={errors["stock"]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                {...register("category", { required: true })}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Category"
                fullWidth
                error={errors["category"]}
                defaultValue={defVal ? defVal.category : null}
              >
                {Object.entries(categories).map((item, i) => (
                  <MenuItem key={i} value={item[0]}>
                    {item[1].name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                type="number"
                {...register("price", { required: true })}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Price"
                error={errors["price"]}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Discount"
              type="number"
              {...register("off", { required: true })}
              id="outlined-start-adornment"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">%</InputAdornment>
                ),
              }}
              fullWidth
              error={errors["off"]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("description", { required: true })}
              id="outlined-required"
              label="Description"
              rows={4}
              fullWidth
              multiline
              error={errors["description"]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("productsImg", { required: true })}
              id="outlined-required"
              label="Image link"
              fullWidth
              error={errors["productsImg"]}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="error">
              {formType}
            </Button>
            {defVal && (
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginLeft: "15px" }}
                onClick={() => {
                  console.log("Def form", defVal.id);
                  deleteProduct({ id: defVal.id });
                  navigate("../products");
                }}
              >
                Delete
              </Button>
            )}
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export const VendorOrders = () => {
  const classes = useStyles();
  const orders = useSelector((state) => state.orders);
  const vendors = useSelector((state) => state.vendors);
  const vendorOrders = vendors[0].orders;
  const filteredOrders = [];
  for (let i = 0; i < vendorOrders.length; i++)
    filteredOrders.push(orders[vendorOrders[i]]);
  const [currentOrders, setCurrentOrders] = useState([...filteredOrders]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(5);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const presentOrders = currentOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );
  const pageNumbers = Math.ceil(currentOrders.length / ordersPerPage);
  return (
    <div>
      <Paper className={classes.tableHeader} elevation={0}>
        <Typography
          sx={{ display: { xs: "none !important", sm: "flex !important" } }}
        >
          Order #
        </Typography>
        <Typography>Status</Typography>
        <Typography>Date</Typography>
        <Typography>Total</Typography>
        <Typography
          sx={{
            display: { xs: "none !important", sm: "flex !important" },
          }}
        ></Typography>
      </Paper>
      <div className={classes.ordersBox}>
        {presentOrders &&
          presentOrders.map((order) => {
            return (
              order && (
                <Link to="../order-info" state={`${order.id}`}>
                  <Paper elevation={1}>
                    <Typography
                      sx={{
                        display: {
                          xs: "none !important",
                          sm: "flex !important",
                        },
                      }}
                    >
                      {order.id}
                    </Typography>
                    <Typography>
                      <span>{order.status}</span>
                    </Typography>
                    <Typography>{order.date.toLocaleDateString()}</Typography>
                    <Typography>${order.total()}</Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        display: {
                          xs: "none !important",
                          sm: "flex !important",
                        },
                      }}
                    >
                      <ArrowRightAlt />
                    </Typography>
                  </Paper>
                </Link>
              )
            );
          })}
      </div>
      <Pagination
        className={classes.pagination}
        onChange={(e, page) => setCurrentPage(page)}
        variant="outlined"
        count={pageNumbers}
      ></Pagination>
    </div>
  );
};

export const VendorOrderDetails = () => {
  const [open, setOpen] = useState(false);
  const orders = useSelector((state) => state.orders);
  const products = useSelector((state) => state.products);
  const navigate = useNavigate();
  const location = useLocation();
  const defVal = orders[location.state];
  let sum = 0;
  const productAmount = Object.entries(defVal.products).map(([id, amount]) => {
    sum += products[id].price * amount;
    return [products[id], amount];
  });

  const vendorId = 0;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { ...(defVal ? defVal : {}) } });
  const onSubmit = (data) => {
    data = {
      ...data,
      id: defVal.id,
      products: defVal.products,
      date: defVal.date,
      total: function () {
        return this.price - (this.price * this.off) / 100 + this.shipping;
      },
    };
    updateOrder({ orderId: defVal.id, orderInfo: data });
    setOpen(true);
    setTimeout(() => setOpen(false), 3000);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ position: "relative" }}>
      <TransitionAlerts
        message={"Saved"}
        open={open}
        setOpen={setOpen}
        sx={{
          position: "absolute !important",
          bottom: 0,
          left: "25%",
          trasnform: "translate(-50%, -50%)",
          width: "70%",
          zIndex: 10,
        }}
      />
      <Paper sx={{ padding: "24px" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Stack direction="row" spacing={2}>
            <span>Order ID: {defVal.id}</span>
            <span>Placed on: {defVal.date.toDateString()}</span>
          </Stack>
          <FormControl sx={{ width: 200 }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              {...register("status", { required: true })}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
              fullWidth
              error={errors["status"]}
              defaultValue={defVal.status}
            >
              <MenuItem value={"delivered"}>Delivered</MenuItem>
              <MenuItem value={"pending"}>Pending</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        {productAmount.map(([product, amount]) => {
          return (
            <Paper sx={{ padding: "10px", marginTop: "15px" }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <img
                    src={product.productsImg}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <span>{product.name}</span>
                  <span>x</span>
                  <span>{amount}</span>
                  <span>=</span>
                  <span>${amount * product.price}</span>
                </Stack>
                {/* <IconButton
                  aria-label="delete"
                  onClick={() => {
                    let data = productAmount.filter(
                      ([item, amount]) => item.id != product.id
                    );
                    deleteOrderProduct({
                      orderId: defVal.id,
                      data: Object.fromEntries(data),
                    });
                  }}
                >
                  <DeleteIcon />
                </IconButton> */}
              </Stack>
            </Paper>
          );
        })}
        <div style={{ marginTop: "15px" }}>
          <TextField
            {...register("address", { required: true })}
            id="outlined-required"
            label="Address"
            fullWidth
            error={errors["address"]}
          />
        </div>
        <div style={{ marginTop: "15px" }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              type="number"
              defaultValue={sum}
              {...register("price", { required: true })}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Price"
              error={errors["price"]}
            />
          </FormControl>
        </div>
        <div style={{ marginTop: "15px" }}>
          <TextField
            label="Discount"
            type="number"
            {...register("off", { required: true })}
            id="outlined-start-adornment"
            InputProps={{
              endAdornment: <InputAdornment position="start">%</InputAdornment>,
            }}
            fullWidth
            error={errors["off"]}
          />
        </div>
        <div style={{ marginTop: "15px" }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">
              Shipment
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              type="number"
              {...register("shipping", { required: true })}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Price"
              error={errors["shipping"]}
            />
          </FormControl>
        </div>
        <div style={{ marginTop: "15px" }}>
          <TextField
            {...register("payment", { required: true })}
            id="outlined-required"
            label="Name"
            fullWidth
            error={errors["payment"]}
          />
        </div>
        <Stack
          direction="row"
          alignItems="center"
          style={{ marginTop: "15px" }}
        >
          <Button type="submit" variant="contained" color="error">
            Save
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{ marginLeft: "15px" }}
            onClick={() => {
              deleteOrder({ orderId: defVal.id });
              navigate("../orders");
            }}
          >
            Delete
          </Button>
        </Stack>
      </Paper>
    </form>
  );
};

export const VendorSettings = () => {
  const [open, setOpen] = useState(false);
  const vendors = useSelector((state) => state.vendors);
  const defVal = vendors[0];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { ...(defVal ? defVal : {}) } });
  const onSubmit = (data) => {
    data = {
      ...defVal,
      ...data,
    };
    console.log(data);
    updateVendor({ vendorId: defVal.id, vendorInfo: data });
    setOpen(true);
    setTimeout(() => setOpen(false), 3000);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ position: "relative" }}>
      <TransitionAlerts
        message={"Saved"}
        open={open}
        setOpen={setOpen}
        sx={{
          position: "absolute !important",
          bottom: 0,
          left: "25%",
          trasnform: "translate(-50%, -50%)",
          width: "70%",
          zIndex: 10,
        }}
      />
      <Paper style={{ padding: "20px" }}>
        <div style={{ marginTop: "15px" }}>
          <TextField
            {...register("vendorName", { required: true })}
            id="outlined-required"
            label="Name"
            fullWidth
            error={errors["vendorName"]}
          />
        </div>
        <div style={{ marginTop: "15px" }}>
          <TextField
            {...register("phoneNumber", { required: true })}
            id="outlined-required"
            label="Phone number"
            fullWidth
            error={errors["phoneNumber"]}
          />
        </div>
        <div style={{ marginTop: "15px" }}>
          <TextField
            {...register("location", { required: true })}
            id="outlined-required"
            label="Location"
            fullWidth
            error={errors["location"]}
          />
        </div>
        <div style={{ marginTop: "15px" }}>
          <TextField
            {...register("productsImg", { required: true })}
            id="outlined-required"
            label="Wallpaper"
            fullWidth
            error={errors["productsImg"]}
          />
        </div>
        <div style={{ marginTop: "15px" }}>
          <TextField
            {...register("avaImg", { required: true })}
            id="outlined-required"
            label="Avatar"
            fullWidth
            error={errors["avaImg"]}
          />
        </div>
        {Object.entries(defVal.socialLinks).map(([name, link]) => {
          return (
            <div style={{ marginTop: "15px" }}>
              <TextField
                {...register(name, { required: true })}
                id="outlined-required"
                label={name}
                fullWidth
                error={errors[name]}
                defaultValue={link}
              />
            </div>
          );
        })}
        <div style={{ marginTop: "15px" }}>
          <Button type="submit" variant="contained" color="error">
            Save
          </Button>
        </div>
      </Paper>
    </form>
  );
};
