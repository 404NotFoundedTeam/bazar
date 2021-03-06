import {
  FormControl,
  Input,
  InputAdornment,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function HeaderSearch() {
  const [searchCategory, setSearchCategory] = useState("all");

  const handleChange = (event) => {
    setSearchCategory(event.target.value);
  };

  return (
    <Box
      sx={{
        borderRadius: "32px",
        position: "relative",
        zIndex: "999999 !importnat",
        overflow: "hidden",
        border: "1.5px solid #D4E6EA",
      }}
    >
      <FormControl
        variant="standard"
        autoFocus={false}
        sx={{
          display: "flex !important",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Input
          placeholder="Searching for..."
          sx={{
            bgcolor: "white",
            padding: "6px 16px",
            flex: 1,
          }}
          disableUnderline
          startAdornment={
            <InputAdornment position="start">
              <BsSearch />
            </InputAdornment>
          }
        />
        <Select
          sx={{
            bgcolor: (theme) => theme.palette.info.dark,
            padding: "6px 16px",
            borderLeft: "1.5px solid #D4E6EA",
            position: "relative",
            zIndex: "999999 !important",
            "& .MuiSelect-icon": { right: "10px" },
          }}
          disableUnderline
          onChange={handleChange}
          value={searchCategory}
        >
          <MenuItem value={"all"}>All category</MenuItem>
          <MenuItem value={"cars"}>Cars</MenuItem>
          <MenuItem value={"komp"}>Komputers</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default HeaderSearch;
