import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RatingSIze from "../../../../components/rating";

export default function CheckboxesGroupRating() {
  const [state, setState] = React.useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { one, two, three, four, five } = state;

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={one}
                onChange={handleChange}
                name="one"
                size="small"
              />
            }
            label={<RatingSIze score={5} />}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={two}
                onChange={handleChange}
                name="two"
                size="small"
              />
            }
            label={<RatingSIze score={4} />}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={three}
                onChange={handleChange}
                name="three"
                size="small"
              />
            }
            label={<RatingSIze score={3} />}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={four}
                onChange={handleChange}
                name="four"
                size="small"
              />
            }
            label={<RatingSIze score={2} />}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={five}
                onChange={handleChange}
                name="five"
                size="small"
              />
            }
            label={<RatingSIze score={1} />}
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}
