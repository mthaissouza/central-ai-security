import "./Searcher.css";
import React from "react";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Search = (props) => {
  const { value, onChange } = props;

  return (
    <Paper
      className="Searcher"
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "#fff" }}
        placeholder="Find a character..."
        inputProps={{ "aria-label": "search google maps" }}
        value={value}
        onChange={onChange}
      />
      <IconButton
        type="button"
        sx={{ p: "10px", color: "#fff" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
