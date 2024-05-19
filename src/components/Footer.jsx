import React from "react";
import "../styles/footerStyle.css";
import Grid from "@mui/material/Unstable_Grid2";

function Footer() {
  return (
    <>
      <Grid container className="footer-box" rowSpacing={2}>
        <Grid xs={12} className="title-footer">
          Restaurante Los Colorados 2024
        </Grid>
        <Grid xs={12} className="row-footer">
          Desarrollado por: Nicolas Ortiz & Danny Novoa
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
