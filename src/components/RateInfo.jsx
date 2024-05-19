import React from "react";
import { UseContext } from "../context/UseContext";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../resources/theme";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

function RateInfo() {
  const navigate = useNavigate();
  const { product } = React.useContext(UseContext);
  const [loading, setLoading] = React.useState(false);
  return (
    <>
      <div className="box-information">
        <Typography
          variant="h5"
          gutterBottom
          className="title-information"
          sx={{ fontWeight: "bold" }}
        >
          {product?.name}
        </Typography>

        <Rating
          name="half-rating"
          size="large"
          defaultValue={2.5}
          precision={0.5}
        />

        <TextField
          id="outlined-basic"
          label="Comentario"
          rows="5"
          variant="outlined"
          sx={{ minWidth: 450, marginTop: 2 }}
          multiline={true}
        />
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="logo"
            sx={{ minWidth: 230, borderRadius: "8px", marginTop: 3 }}
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                navigate("/");
              }, 4000);
            }}
          >
            {loading ? (
              <CircularProgress color="inherit" size={30} />
            ) : (
              "Enviar calificación"
            )}
          </Button>
        </ThemeProvider>
      </div>
    </>
  );
}

export default RateInfo;
