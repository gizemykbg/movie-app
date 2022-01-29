import React, { useEffect, useState } from "react";
import {
  SearchBarWrapper,
  IconImage,
  Input,
  RightSide,
  Spinner,
} from "./SearchBar.styles";
import ZoomOutOutlinedIcon from "@mui/icons-material/ZoomOutOutlined";

function SearchBar({ isLoading, value, handleChange, setValue, onSubmit }) {
  const handleClear = () => {
    setValue("");
  };

  return (
    <>
      <SearchBarWrapper onSubmit={onSubmit}>
        <IconImage>
          <ZoomOutOutlinedIcon />
        </IconImage>
        <Input value={value} onChange={handleChange} />
        <RightSide>
          {value && <div onClick={handleClear}> X </div>}
          {isLoading && <Spinner />}
        </RightSide>
      </SearchBarWrapper>
    </>
  );
}

export default SearchBar;
