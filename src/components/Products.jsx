import React from "react";
import "../styles/productsStyle.css";
import { UseContext } from "../context/UseContext";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { productos } from "../resources/products";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const { setProduct } = React.useContext(UseContext);

  const handleProduct = (product) => {
    setProduct(product);
    localStorage.setItem("product", JSON.stringify(product));
    navigate("/product");
  };

  return (
    <>
      <Grid container rowSpacing={3} sx={{ marginBottom: 3 }}>
        {productos.map((product) => {
          return (
            <Grid xs={4} key={product.name}>
              <Card sx={{ maxWidth: 300 }} className="product-box">
                <CardActionArea
                  onClick={() => {
                    handleProduct(product);
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={`imagen: ${product.name}`}
                    sx={{ backgroundColor: "#aec6fa" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      {product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Products;
