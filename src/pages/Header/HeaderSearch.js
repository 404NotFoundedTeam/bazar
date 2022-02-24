import { InputUnstyled } from "@mui/base";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

function HeaderSearch() {
  const [searchCategory, setSearchCategory] = useState("All category");
  console.log(searchCategory);

  return (
    <Wrapper>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "32px",
          height: "50px",
          overflow: "hidden",
          bgcolor: "#fff",
          border: "1px solid #898989",
          gap: "10px",
        }}
      >
        <BsSearch />
        <InputUnstyled />
        <select
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        >
          <option value={"hello"}>hello</option>
          <option value={"1"}>hellodw</option>
          <option value={"hello1"}>dfgsfgsdfg</option>
          <option value={"hello2"}>hellod</option>
        </select>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    input, select{
        height: 100%;
        margin: -3px;
        padding: 16px;
        border: none;
        outline: none;
    }
    select{
        margin-right: 32px;
        background-color: pink;
    }
    option{
        padding: 10px 0;
    }
`

export default HeaderSearch;
