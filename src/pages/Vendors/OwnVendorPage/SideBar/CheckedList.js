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

export default function CheckboxesGroup() {
  ///styles Block
  const itemStyles = {
    color: "#2B3445",
    fontSize: "14px",
  };
  const classes = useStyles(itemStyles);

  ///Logic Block
  const [state, setState] = React.useState({
    Maccs: true,
    Karts: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { Maccs, Karts, antoine } = state;

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup className={`${classes.itemStyles}`}>
          <FormControlLabel
            control={
              <Checkbox
                checked={Maccs}
                onChange={handleChange}
                size="small"
                name="Maccs"
              />
            }
            label="Maccs"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Karts}
                onChange={handleChange}
                size="small"
                name="Karts"
              />
            }
            label="Karts"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                size="small"
                name="antoine"
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}
