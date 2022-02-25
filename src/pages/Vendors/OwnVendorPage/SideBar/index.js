import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import NestedList from "./NestedList";
import TextFieldHiddenLabel from "./Price";
import CheckboxesGroup from "./CheckedList";
import CheckboxesGroupRating from "./PoRating";

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
});

export default function SideBar() {
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
      sx={{ backgroundColor: "#fff !important", padding: "0 !important" }}
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
      <CheckboxesGroup />

      <hr className={`${hrClass.hr}`} />

      <Typography className={`${classes.mainTypo}`}>Rating</Typography>
      <CheckboxesGroupRating />
    </Box>
  );
}
