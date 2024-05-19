import React, { Children } from "react";
import "../styles/productStyle.css";
import { UseContext } from "../context/UseContext";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../resources/theme";
import { useNavigate } from "react-router-dom";
import FilterCenterFocusIcon from "@mui/icons-material/FilterCenterFocus";

function Product({ children, backPath }) {
  const navigate = useNavigate();
  const { product, setProduct } = React.useContext(UseContext);

  React.useEffect(() => {
    if (Object.entries(product).length === 0) {
      const value = localStorage.getItem("product");
      setProduct(JSON.parse(value));
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          startIcon={<ArrowBackIcon />}
          variant="contained"
          color="logo"
          sx={{ marginLeft: 8, marginTop: 4, borderRadius: "8px" }}
          onClick={() => {
            navigate(backPath);
          }}
        >
          Regresar
        </Button>
      </ThemeProvider>

      <Grid container sx={{ marginTop: 3, marginBottom: 4 }}>
        <Grid xs={6}>
          <div className="general-product">
            <div className="box-product">
              <img src={product?.image} alt="Imagen" />
            </div>
            <Button
              startIcon={<FilterCenterFocusIcon />}
              variant="contained"
              sx={{ marginTop: 3, borderRadius: "8px", maxWidth: "300px" }}
              onClick={() => {
                navigate("/AR");
              }}
            >
              Activar realidad aumentada
            </Button>
          </div>
        </Grid>
        <Grid xs={6}>{children}</Grid>
      </Grid>
    </>
  );
}

export default Product;
