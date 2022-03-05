import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import NestedList from "./NestedList";
import TextFieldHiddenLabel from "./Price";
import CheckboxesGroup from "./CheckedList";
import CheckboxesGroupRating from "./PoRating";
import { database } from "../../../../data/data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const useStyles = makeStyles({
  foo: (props) => ({
    backgroundColor: props.backgroundColor,
    padding: props.padding,
    borderRadius: props.borderRadius,
  }),
  mainTypo: {
    color: (props) => props.color,
    fontSize: (props) => props.fontSize,
    fontWeight: (props) => props.fontWeight,
  },
  pricesBox: {
    display: (props) => props.display,
    alignItems: (props) => props.alignItems,
    paddingInline: (props) => props.paddingInline,
    marginBlock: (props) => props.marginBlock,
    backgroundColor: (props) => props.backgroundColor,
  },
  hr: {
    display: (props) => props.display,
    marginBlock: (props) => props.marginBlock,
  },
  marginT: (props) => props.marginTop,
  root: (props) => ({
    backgroundColor: props.backgroundColor,
    color: props.color,
  }),
});

export default function SideBar({ ownCategories, ownGroups, ownBrands }) {
  console.log(ownBrands, "   ownBrands");
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const { categories, groups, brands } = database;

  console.log(categories, groups, brands);

  const props = {
    color: "rgb(43, 52, 69)",
    backgroundColor: "white",
    padding: "16px",
    fontSize: "16px",
    marginBlock: "16px",
    marginTop: "50px",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    paddingInline: "16px",
  };

  const hrProps = {
    marginBlock: "20px",
    display: "block",
  };

  const hrClass = useStyles(hrProps);
  const classes = useStyles(props);

  return (
    <Box
      className={`${classes.foo}`}
      sx={{
        maxWidth: 300,
        backgroundColor: "#fff !important",
      }}
    >
      <Typography className={`${classes.mainTypo}`}>Categories</Typography>
      <NestedList />
      <hr className={`${hrClass.hr}`} />

      <Typography className={`${classes.mainTypo}`}>Price Range</Typography>
      <Box className={`${classes.pricesBox}`} mb={2}>
        <TextFieldHiddenLabel defaultValue={4} />{" "}
        <span style={{ marginInline: "10px" }}>-</span>
        <TextFieldHiddenLabel defaultValue={250} />
      </Box>

      <hr className={`${hrClass.hr}`} />

      <Typography className={`${classes.mainTypo}`}>Brands</Typography>
      <CheckboxesGroup ownBrands={ownBrands} />

      <hr className={`${hrClass.hr}`} />

      <Typography className={`${classes.mainTypo}`}>Rating</Typography>
      <CheckboxesGroupRating />
    </Box>
  );
}
