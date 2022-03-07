import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { useSelector } from "react-redux";

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
    setValue(newValue);
  };

  return (
    <Tabs value={value} color={"error"} onChange={handleChange}>
      {currentCategory.map((item, index) => (
        <Tab
          key={index}
          sx={{
            fontSize: "14px",
            pt: 3,
          }}
          icon={item.icon}
          label={item.name}
        />
      ))}
    </Tabs>
  );
}
