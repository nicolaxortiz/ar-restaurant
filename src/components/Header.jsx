import React from "react";
import "../styles/headerStyles.css";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../resources/theme";

function Header() {
  return (
    <>
      <div className="header-box">
        <ThemeProvider theme={theme}>
          <RamenDiningIcon className="header-logo" color="logo" />
          <div className="header-txt">Restaurante Los Colorados</div>
        </ThemeProvider>
      </div>
      <div className="header-separator"></div>
    </>
  );
}

export default Header;
