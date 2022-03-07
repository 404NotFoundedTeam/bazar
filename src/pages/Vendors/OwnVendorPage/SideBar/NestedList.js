import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    backgroundColor: props.backgroundColor,
    color: theme.color,
  }),

  ListStyle: (props) => ({
    color: props.color,
    backgroundColor: props.backgroundColor,
    width: props.width,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    paddingTop: props.paddingTop,
  }),
}));

export default function NestedList({ arr }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const props = {
    backgroundColor: "background.paper",
    color: "#7D879C",
    fontSize: "14px",
    width: "100%",
    fontWeight: "bold",
    paddingTop: 0,
  };

  const classes = useStyles(props);

  return (
    <List
      className={`${classes.ListStyle}`}
      sx={{
        width: "100%",
        maxWidth: 360,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {arr.map((text) => (
        <ListItemButton>
          <ListItemText primary={text} />
        </ListItemButton>
      ))}
    </List>
  );
}
