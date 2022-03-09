import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import SalePage from "../../pages/salepage";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "#d61f56",
      height: 2,
    },
    "& .MuiTab-root.Mui-selected": {
      color: "#d61f56",
    },
  },
});

export default function SaleTab() {
  const [value, setValue] = React.useState(0);
  const reduxCategory = useSelector((state) => {
    console.log("categories  = >", state.categories.categories);
    return state.categories.categories;
  });

  const category = Object.values(reduxCategory);
  const [currentCategory, setCurrentCategory] = React.useState(category);
  console.log(currentCategory);
  const handleChange = (event, newValue) => {
    console.log();
    return setValue(newValue);
  };

  const classes = useStyles();
  return (
    <>
      {" "}
      <Tabs
        value={value}
        sx={{}}
        onChange={handleChange}
        className={classes.tabs}
      >
        {currentCategory.map((item, index) => (
          <Tab
            key={index}
            sx={{
              fontSize: "14px",
              pt: 3,
            }}
            tabIndex={item.name}
            icon={item.icon}
            label={item.name}
          />
        ))}
      </Tabs>
      <SalePage value={value} />
    </>
  );
}
