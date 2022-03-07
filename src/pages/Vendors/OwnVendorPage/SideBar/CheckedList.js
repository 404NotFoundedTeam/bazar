import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  itemStyles: {
    color: (props) => props.color,
    fontSize: (props) => props.fontSize,
  },
});

export default function CheckboxesGroup({ ownBrands }) {
  ///styles Block

  const itemStyles = {
    color: "#2B3445",
    fontSize: "14px",
  };
  const classes = useStyles(itemStyles);

  ///Logic Block
  const [state, setState] = React.useState({});

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  React.useEffect(() => {
    let temp = [];
    ownBrands.map((val) => temp.push({ name: val, checked: false }));
    setState(temp);
  }, []);

  // const { Maccs, Karts, antoine } = state;

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup className={`${classes.itemStyles}`}>
          {ownBrands.map((item) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={item.checked}
                  onChange={handleChange}
                  size="small"
                  name={item.name}
                />
              }
              label={item.name}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
