import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CheckboxesGroupRating from "./PoRating";
import { StyleClasses } from "./StylesClasses";
import { itemStyles, hrProps, props, ListStyle, priceStyles } from "./styles";

const useStyles = makeStyles(StyleClasses);

export default function SideBar({ categories, brands, products, setProducts }) {
  //classes
  const itemStylesClass = useStyles(itemStyles);
  const hrClass = useStyles(hrProps);
  const classes = useStyles(props);
  const ListStyleClass = useStyles(ListStyle);
  const priceStyleClass = useStyles(priceStyles);

  const [state, setState] = React.useState({});

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handleProducts = (event) => {
    console.log(event.target.id);
    if (event.target.id === "minPrice") {
      setProducts((state) => ({
        ...state,
        minPrice: parseInt(event.target.value),
      }));
    } else if (event.target.id === "maxPrice") {
      setProducts((state) => ({
        ...state,
        maxPrice: parseInt(event.target.value),
      }));
    }
  };

  React.useEffect(() => {
    let temp = [];
    brands.map((val) => temp.push({ name: val, checked: false }));
    setState(temp);
  }, []);

  return (
    <Box
      className={`${classes.foo}`}
      sx={{
        maxWidth: 300,
        backgroundColor: "#fff !important",
      }}
    >
      <Typography className={`${classes.mainTypo}`}>Categories</Typography>
      <List
        className={`${ListStyleClass.ListStyle}`}
        sx={{
          width: "100%",
          maxWidth: 360,
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {categories.map((text, index) => (
          <ListItemButton key={index}>
            <ListItemText
              primary={
                text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase()
              }
            />
          </ListItemButton>
        ))}
      </List>
      <hr className={`${hrClass.hr}`} />

      <Typography className={`${classes.mainTypo}`}>Price Range</Typography>
      <Box className={`${classes.pricesBox}`} mb={2}>
        <Stack
          component="form"
          sx={{
            backgroundColor: "#fff !important",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            className={priceStyleClass.priceTextField}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            hiddenLabel
            id="minPrice"
            defaultValue={products.minPrice}
            variant="filled"
            size="small"
            onChange={handleProducts}
          />
        </Stack>
        <span style={{ marginInline: "10px" }}>-</span>
        <Stack
          component="form"
          sx={{
            backgroundColor: "#fff !important",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            className={priceStyleClass.priceTextField}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            hiddenLabel
            id="maxPrice"
            defaultValue={products.maxPrice}
            variant="filled"
            size="small"
            onChange={handleProducts}
          />
        </Stack>
      </Box>

      <hr className={`${hrClass.hr}`} />

      <Typography className={`${classes.mainTypo}`}>Brands</Typography>
      <Box sx={{ display: "flex" }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormGroup className={`${itemStylesClass.itemStyles}`}>
            {brands.map((item, i) => {
              return (
                <FormControlLabel
                  key={i}
                  control={
                    <Checkbox
                      id="category"
                      checked={item.checked}
                      onChange={(handleChange, handleProducts)}
                      size="small"
                      name={item}
                    />
                  }
                  label={
                    item.name.trim().slice(0, 1).toUpperCase() +
                    item.name.trim().slice(1).toLowerCase()
                  }
                />
              );
            })}
          </FormGroup>
        </FormControl>
      </Box>

      <hr className={`${hrClass.hr}`} />

      <Typography className={`${classes.mainTypo}`}>Rating</Typography>
      <CheckboxesGroupRating products={products} setProducts={setProducts} />
    </Box>
  );
}
