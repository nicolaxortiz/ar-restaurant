import React from "react";
import "../styles/searchStyle.css";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../resources/theme";

function Search() {
  return (
    <>
      <div className="menu-title">Menu</div>

      <ThemeProvider theme={theme}>
        <div className="form-search">
          <TextField
            id="outlined-basic"
            label="Buscar plato"
            variant="outlined"
            sx={{ m: 1, width: "30ch", color: "#ffffff  " }}
            size="small"
            color="input"
          />

          <IconButton>
            <SearchIcon
              color="search"
              sx={{
                backgroundColor: "#344288",
                borderRadius: "50%",
                padding: 1,
              }}
            />
          </IconButton>
        </div>
      </ThemeProvider>
    </>
  );
}

export default Search;
