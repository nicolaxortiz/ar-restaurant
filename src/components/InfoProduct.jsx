import React from "react";
import { UseContext } from "../context/UseContext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../resources/theme";
import { useNavigate } from "react-router-dom";

function InfoProduct() {
  const navigate = useNavigate();
  const { product } = React.useContext(UseContext);
  return (
    <div className="box-information">
      <Typography
        variant="h5"
        gutterBottom
        className="title-information"
        sx={{ fontWeight: "bold" }}
      >
        {product?.name}
      </Typography>

      <div className="description-information">
        <Typography
          variant="h6"
          color="text.primary"
          gutterBottom
          sx={{ fontWeight: "bolder" }}
        >
          {product?.price}
        </Typography>

        <Typography variant="body1" color="text.primary" gutterBottom>
          {product?.description}
        </Typography>

        <Typography
          variant="body1"
          color="text.primary"
          gutterBottom
          sx={{ fontWeight: "bolder" }}
        >
          Ingredientes:
        </Typography>

        <Typography variant="body1" color="text.primary" gutterBottom>
          {product?.ingredients?.join(", ")}
        </Typography>

        <Typography
          variant="body1"
          color="text.primary"
          gutterBottom
          sx={{ fontWeight: "bolder" }}
        >
          Tiempo estimado de preparación:
        </Typography>

        <Typography variant="body1" color="text.primary" gutterBottom>
          {product?.preparationTime}
        </Typography>
      </div>

      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="logo"
          sx={{ minWidth: 230, borderRadius: "8px" }}
          onClick={() => {
            navigate("/buy");
          }}
        >
          Comprar
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default InfoProduct;
